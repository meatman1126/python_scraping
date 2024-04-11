from flask import (
    render_template,
    redirect,
    url_for,
    Blueprint,
    request,
    send_from_directory,
)
from flask_security import login_required, current_user
import services.get_company_info as get_company_info

scraping_page = Blueprint("scraping_page", __name__)
DIRECTORY = "downloads"


@scraping_page.route("/upload", methods=["POST"])
def upload_file():
    # return "ok"
    if "fileUpload" in request.files:
        file = request.files["fileUpload"]
        if file and file.mimetype.endswith("csv"):
            filename = get_company_info.get_companies_info(file)

            # as_attachment=Trueとすることでブラウザにファイル表示ではなくダウンロードを促す
            return send_from_directory(DIRECTORY, filename, as_attachment=True)

        # ファイルを保存するロジックをここに記述
        return "Invalid file type"
    return "No file part"


@scraping_page.get("/fileup")
def file():
    return render_template("file-upload.html")


@scraping_page.before_request
@login_required
def auth():
    if current_user.is_authenticated:
        pass
    else:
        print("ログインしていません。ログイン画面に遷移します。")
        return redirect(url_for("home"))
