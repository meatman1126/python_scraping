from flask import render_template, jsonify
from flask_security import logout_user


def init_error_handler(app):
    @app.errorhandler(429)
    def handle_toomany_requests(error):
        logout_user()
        return render_template("error.html")

    @app.errorhandler(Exception)
    def handle_exception(error):
        """全ての例外のキャッチと処理"""
        print(error)
        # logout_user()
        # return render_template("error.html")
        return (
            jsonify(
                {
                    "error": "Too many requests",
                    "message": "リクエスト回数が上限を超過しました。一定時間後に再度お試しください。",
                }
            ),
            429,
        )
