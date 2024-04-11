from flask import (
    render_template,
    render_template_string,
    request,
    send_from_directory,
    redirect,
    url_for,
    session,
)
import services.get_company_info as get_company_info
from models.user import User
from __init__ import app
from flask_security import auth_required, logout_user, current_user
from config.database import db


# DIRECTORY = "downloads"


@app.route("/login")
def home():
    return render_template("security/login_user.html")


@app.route("/logout")
def logout():
    logout_user()  # Flask-Securityのログアウトヘルパーを使用
    # session.clear()  # セッションのクリア
    return redirect(url_for("home"))  # リダイレクト


# @app.route("/upload", methods=["POST"])
# def upload_file():
#     if "fileUpload" in request.files:
#         file = request.files["fileUpload"]
#         if file and file.mimetype.endswith("csv"):
#             filename = get_company_info.get_companies_info(file)

#             # as_attachment=Trueとすることでブラウザにファイル表示ではなくダウンロードを促す
#             return send_from_directory(DIRECTORY, filename, as_attachment=True)

#         # ファイルを保存するロジックをここに記述
#         return "Invalid file type"
#     return "No file part"


# @app.get("/fileup")
# def file():
#     return render_template("file-upload.html")


if __name__ == "__main__":
    app.run()
