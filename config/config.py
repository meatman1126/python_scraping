import os
from dotenv import load_dotenv

# .envファイルの内容を読み込見込む
load_dotenv()


class SystemConfig:
    DEBUG = True

    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URI_LOCAL")
    SECRET_KEY = os.environ.get("SECRET_KEY")
    SECURITY_PASSWORD_SALT = os.environ.get("SECURITY_PASSWORD_SALT")
    REMEMBER_COOKIE_SAMESITE = "strict"
    SESSION_COOKIE_SAMESITE = "strict"
    SECURITY_POST_LOGIN_VIEW = "/index"
    SECURITY_POST_LOGOUT_VIEW = "/login"


Config = SystemConfig
