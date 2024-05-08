from flask import render_template, redirect, url_for, Blueprint
from flask_security import login_required, current_user


index_page = Blueprint("index_page", __name__)


@index_page.route("/index")
def index():
    return render_template("index.html")


@index_page.before_request
@login_required
def auth():
    if current_user.is_authenticated:
        pass
    else:
        print("ログインしていません。ログイン画面に遷移します。")
        return redirect(url_for("home"))
