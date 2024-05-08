import csv
import requests
import os
from dotenv import load_dotenv
from io import StringIO
import datetime
from bs4 import BeautifulSoup
import re
from flask import jsonify
from Exception.api_error import APIError

# .envファイルの内容を読み込見込む
load_dotenv()

api_key = os.environ.get("GOOGLE_CUSTOME_SEARCH_JSON_API_KEY")
cse_id = os.environ.get("CUSTOME_SEARCH_ENGINE_ID")
URL = f"https://www.googleapis.com/customsearch/v1?key={api_key}&cx={cse_id}"
num_results = 1
# 電話番号を抽出するための正規表現パターン
phone_pattern = r"\d{2,4}-\d{2,4}-\d{4}"


def search_company_info(company_name):
    """企業名に基づいて情報を検索し、結果を返す"""
    params = {"q": company_name + " お問い合わせ", "num": num_results}
    response = requests.get(URL, params=params)
    if response.status_code == 429:
        raise APIError("Too many requests", 429)
    contact_info = response.json().get("items", [])
    print(contact_info)

    params = {"q": company_name + " 企業概要", "num": num_results}
    response = requests.get(URL, params=params)
    print(response)
    outline_url = response.json().get("items", [])[0].get("link")
    html_response = requests.get(outline_url)
    html_response.encoding = "utf-8"
    soup = BeautifulSoup(html_response.text, "html.parser", from_encoding="utf-8")
    # scriptタグとstyleタグを削除する
    for script in soup(["script", "style"]):
        script.decompose()

    # ページ内のすべてのテキストノードを探索し、電話番号が含まれているものを抽出
    phone_numbers = set()
    for text in soup.find_all(text=re.compile(phone_pattern)):
        phone = re.search(phone_pattern, text)
        if phone:
            phone_numbers.add(text.parent.get_text(strip=True))

    phone_number_info = ";  ".join(map(str, phone_numbers))

    # メールアドレスの取得
    email = soup.find(
        text=re.compile(r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b")
    )
    email = (
        email.strip() if email is not None else "メールアドレスは取得できませんでした。"
    )

    if contact_info and outline_url:
        item = {
            "company": company_name,
            "問い合わせページURL": contact_info[0].get("link"),
            "企業概要ページURL": outline_url,
            "連絡先": phone_number_info,
            "メールアドレス": email,
        }
        return item

    return None


def read_company_names(file):
    """CSVファイルから企業名を読み込む"""
    stream = StringIO(file.stream.read().decode("UTF-8"), newline=None)
    csv_input = csv.reader(stream)

    return [row[0] for row in csv_input]


def save_to_csv(data):
    """情報をCSVファイルに保存する"""
    filename = (
        "company_info_" + datetime.datetime.now().strftime("%Y%m%d%H%M%S") + ".csv"
    )
    # filename = "company_info.csv"
    directory = "downloads/" + filename

    with open(directory, mode="w", newline="", encoding="utf-8") as file:
        fieldnames = [
            "company",
            "問い合わせページURL",
            "企業概要ページURL",
            "連絡先",
            "メールアドレス",
        ]
        writer = csv.DictWriter(file, fieldnames=fieldnames)
        writer.writeheader()
        for row in data:
            writer.writerow(row)
        return filename


def get_companies_info(file):
    # 企業名を読み込む
    company_names = read_company_names(file)
    # 全企業の情報を保存するためのリスト
    all_results = []

    # 各企業について情報を検索
    for company_name in company_names:
        results = search_company_info(company_name)
        all_results.append(results)

    # 結果をCSVに保存
    return save_to_csv(all_results)
