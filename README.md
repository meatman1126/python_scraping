# 企業情報取得アプリ
このアプリは、営業リスト作成のために企業情報を収集し、リスト化することを目的としています。企業の問い合わせページのURL、email、電話番号などの情報を取得し、CSV形式で出力します。

### 主要機能
情報取得: Google Custom Search APIを使用して、指定された企業の問い合わせページのURL、email、電話番号などの情報を取得します。
CSV出力: 取得した企業情報をCSVファイルに出力します。
CSV入力: 企業名が列挙されたCSVファイルから情報を読み込みます。

### 技術スタック
* バックエンド: Flask
* フロントエンド: Svelte
* データベース: MySQL

### 前提条件
本アプリを使用するには、Google Custom Search APIのAPIキーが必要です。Google Cloud PlatformのコンソールからAPIキーを取得し、アプリケーションで使用できるように設定してください。

### インストール方法
* 必要なライブラリをインストール

`pip install -r requirements.txt`

* MySQLデータベースを設定します。
* app.pyを実行してアプリケーションをローカルで起動:

`python app.py`

### 使用例
CSVファイルに企業名を列挙します。
アプリを起動し、CSVファイルをアプリケーションにアップロードします。
処理が完了すると、取得した企業情報がCSVでダウンロード可能になります。
<img width="709" alt="スクリーンショット 2024-05-08 22 19 38" src="https://github.com/meatman1126/python_scraping/assets/104036221/30e127a1-a0d3-4b25-8c2c-dae23c9d579b">
