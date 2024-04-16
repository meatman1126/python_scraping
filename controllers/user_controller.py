from models.user import User
from flask import render_template, request, redirect, Blueprint, url_for, jsonify
from flask_security import auth_required, current_user, login_required


user_page = Blueprint("user_page", __name__)


@user_page.route("/get_users")
def get_users():
    users = User.get_users()
    return "<br>".join(
        [f"{user.id}: {user.login_id} - {user.password}" for user in users]
    )


@user_page.before_request
@login_required
def auth():
    if current_user.is_authenticated:
        pass
    else:
        print("ログインしていません。ログイン画面に遷移します。")
        return redirect(url_for("home"))


@user_page.get("/register")
def register_form():
    return render_template("user_register.html", register_url="/register")


@user_page.post("/register")
def register():
    data = request.get_json()

    userinfo = {
        "email": data.get("email"),
        "password": data.get("password"),
        "username": data.get("username"),
        "note": data.get("note"),
    }
    User.register(userinfo)
    response = {"stasus": "success", "message": "user registered"}
    return jsonify(response), 200
