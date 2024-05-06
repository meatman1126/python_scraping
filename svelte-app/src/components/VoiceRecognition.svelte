<script>
    import { Button } from "sveltestrap";
    import Spinner from "./Spinner.svelte";
    import Typewriter from "./Typewriter.svelte";
    import { generatedText, isLoading } from "./stores.js";

    let audio;
    let isRecording = false;
    let mediaRecorder;
    let audioChunks = [];
    let isExplanationShow = true;
    let isAnswerShow = false;
    async function startRecording() {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            console.error("getUserMedia not supported on your browser!");
            return;
        }
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
        });
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.ondataavailable = (e) => {
            audioChunks.push(e.data);
        };
        mediaRecorder.onstop = sendToServer;
        mediaRecorder.start();
        isRecording = true;
        audio.play();
    }

    function stopRecording() {
        if (!mediaRecorder) return;
        mediaRecorder.stop();
        isRecording = false;
        mediaRecorder.stream.getTracks().forEach((track) => track.stop());
        audio.play();
    }

    async function sendToServer() {
        isLoading.set(true);
        // generatedText.set("");

        const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
        const formData = new FormData();
        formData.append("audio", audioBlob);
        const response = await fetch("/voice/upload", {
            method: "POST",
            body: formData,
        });
        const result = await response.json();
        console.log("answer:", result.answer);
        audioChunks = []; // Reset chunks after sending
        isLoading.set(false);
        isExplanationShow = false;
        isAnswerShow = true;
        generatedText.set(result.answer);
    }
</script>

<Spinner />

<div class="flex">
    <h1 class="text-white font-roboto text-3xl mb-4">
        AIに質問をしてみましょう
    </h1>
    <audio bind:this={audio} src="/static/sounds/voice_recognition.mp3"></audio>
    <Button
        color={isRecording ? "danger" : "primary"}
        outline={false}
        on:click={isRecording ? stopRecording : startRecording}
        class="custom-button"
        style="display: flex; align-items: center; justify-content: center; border-radius: 50%;"
    >
        <i class="fa-solid fa-microphone"></i>
    </Button>
    {#if isExplanationShow}
        <p class="mt-2 font-roboto text-white">
            音声入力を開始するにはマイクアイコンをクリックしてください。
        </p>
    {/if}
    {#if isAnswerShow}
        <Typewriter text={$generatedText} />
    {/if}
</div>

<style>
    .flex {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: #2f855a;
    }
    .text-white {
        color: white;
    }
    .font-roboto {
        font-family: "Roboto", sans-serif;
    }
    :global(.custom-button) {
        width: 100px;
        height: 100px;
    }
</style>
