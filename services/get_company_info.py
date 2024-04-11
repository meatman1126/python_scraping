import csv
import requests
import os
from dotenv import load_dotenv
from io import StringIO
import datetime

# .envファイルの内容を読み込見込む
load_dotenv()

api_key = os.environ.get("GOOGLE_CUSTOME_SEARCH_JSON_API_KEY")
cse_id = os.environ.get("CUSTOME_SEARCH_ENGINE_ID")
URL = f"https://www.googleapis.com/customsearch/v1?key={api_key}&cx={cse_id}"


def search_company_info(company_name):
    """企業名に基づいて情報を検索し、結果を返す"""
    params = {"q": company_name}
    response = requests.get(URL, params=params)
    response_json = response.json()

    items = response_json.get("items", [])
    if items:
        item = {
            "company": company_name,
            "title": items[0].get("title"),
            "link": items[0].get("link"),
            "snippet": items[0].get("snippet"),
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
        fieldnames = ["company", "title", "link", "snippet"]
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
