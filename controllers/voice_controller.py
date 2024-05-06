from models.user import User
from flask import render_template, request, redirect, Blueprint, url_for, jsonify
from flask_security import current_user, login_required
import subprocess
import services.transcribe as transcribe
import services.chat as chat

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
    if "audio" not in request.files:
        return jsonify({"error": "No audio file"}), 400
    audio_file = request.files["audio"]
    transcribed_text = transcribe.transcribe_audio(audio_file)
    ai_answer = chat.excute_chatgpt(transcribed_text)
    return jsonify({"answer": ai_answer})
    # return jsonify(
    #     {"answer": "節約のために固定文言を返します\n改行も挟んだりしてみます。"}
    # )


@voice_page.before_request
@login_required
def auth():
    if current_user.is_authenticated:
        pass
    else:
        print("ログインしていません。ログイン画面に遷移します。")
        return redirect(url_for("home"))
