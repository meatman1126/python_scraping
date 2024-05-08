from openai import OpenAI
import subprocess
import datetime
from flask import jsonify


def transcribe_audio(audio_file):
    client = OpenAI()
    nowdate = datetime.datetime.now().strftime("%Y%m%d%H%M%S")
    input_webm_path = "./uploads/path_to_input" + nowdate + ".webm"
    output_wav_path = "./uploads/path_to_output" + nowdate + ".wav"
    # ファイルを一時的に保存
    audio_file.save(input_webm_path)

    # ファイル形式の変換
    convert_webm_to_wav(input_webm_path, output_wav_path)
    # return jsonify({"transcription": "節約のため固定文言です。"})
    # OpenAI APIを使って音声ファイルをテキストに変換
    try:
        with open(output_wav_path, "rb") as f:
            transcription = client.audio.transcriptions.create(
                model="whisper-1", file=f, language="ja"
            )
        print(transcription)
    except Exception as e:
        print(e)
        return jsonify({"error": str(e)}), 500
    return transcription.text


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
