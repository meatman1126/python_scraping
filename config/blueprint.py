# from flask import Blueprint, redirect, url_for
# from flask_security import login_required, current_user

# auth = Blueprint("auth", __name__)


# @auth.before_request
# @login_required
# def authentication():
#     if current_user.is_authenticated:
#         print("ログインしてます")
#         pass
#     else:
#         print("ログインしてません")
#         return redirect(url_for("home"))
