import os
from dotenv import load_dotenv

# .envファイルの内容を読み込見込む
load_dotenv()


class SystemConfig:
    DEBUG = True

    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URI_LOCAL")
    #     (
    #         "mysql+pymysql://{user}:{password}@{host}/{db-name}?charset=utf8".format(
    #             **{
    #                 "user": "root",
    #                 "password": "Password_123",
    #                 "host": "localhost",
    #                 "db-name": "py_portfolio",
    #             }
    #         )
    #     )
    # "mysql+pymysql://root:Password_123@localhost/py_portfolio?charset=utf8"
    SECRET_KEY = "super-secret"
    SECURITY_PASSWORD_SALT = os.environ.get("SECURITY_PASSWORD_SALT")
    REMEMBER_COOKIE_SAMESITE = "strict"
    SESSION_COOKIE_SAMESITE = "strict"
    SECURITY_POST_LOGIN_VIEW = "/index"


Config = SystemConfig
