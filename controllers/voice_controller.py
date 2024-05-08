from models.user import User
from flask import render_template, request, redirect, Blueprint, url_for, jsonify
from flask_security import current_user, login_required
import subprocess
import services.transcribe as transcribe
import services.chat as chat
from pydub import AudioSegment
import io

voice_page = Blueprint("voice_page", __name__)


@voice_page.get("/voice")
def voice_input():
    return render_template("voice.html")


def convert_webm_to_wav(input_webm_path, output_wav_path):
    # ffmpegを使用してaudio/webmをaudio/wavに変換
    command = [
        "ffmpeg",
        "-i",
        input_webm_path,
        "-acodec",
        "pcm_s16le",
        "-ar",
        "16000",
        output_wav_path,
    ]
    subprocess.run(command, check=True)


@voice_page.post("/voice/upload")
def voice_upload():
    try:

        if "audio" not in request.files:
            return jsonify({"error": "No audio file"}), 400
        audio_file = request.files["audio"]
        audio = AudioSegment.from_file(io.BytesIO(audio_file.read()))

        duration_seconds = len(audio) / 1000  # 長さをミリ秒から秒に変換
        if duration_seconds > 30:
            return jsonify(
                {
                    "answer": "入力された音声データが30秒を越えているようです。\n節約のため簡潔にお尋ねください。"
                }
            )

        transcribed_text = transcribe.transcribe_audio(audio_file)
        ai_answer = chat.excute_chatgpt(transcribed_text)
        return jsonify({"answer": ai_answer})
        # return jsonify(
        #     {"answer": "節約のために固定文言を返します\n改行も挟んだりしてみます。"}
        # )
    except Exception as e:
        print(e)
        return jsonify(
            {
                "answer": "すみません、予期せぬ問題が発生したようです。\nもう一度質問をしてください。\n問題が繰り返し発生する場合システム管理者にご連絡ください。"
            }
        )


@voice_page.before_request
@login_required
def auth():
    if current_user.is_authenticated:
        pass
    else:
        print("ログインしていません。ログイン画面に遷移します。")
        return redirect(url_for("home"))
