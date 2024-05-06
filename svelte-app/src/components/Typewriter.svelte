<script>
    export let text = "";
    let displayedText = "";
    let interval;

    // textが更新されるたびにtypewrite関数を呼び出す
    $: if (text) {
        displayedText = ""; // 既存のテキストをクリア
        clearInterval(interval); // 既存のインターバルをクリア
        typewrite(); // 新しいテキストでタイプライトを開始
    }

    function typewrite() {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                displayedText += text[index++];
            } else {
                clearInterval(interval);
            }
            console.log(text.length);
        }, 100); // 100ミリ秒ごとに文字を追加
    }

    // onMount(typewrite);
</script>

<div class="main">
    <div class="indicator"></div>
    <h3 class="title">AIからの回答</h3>
    <div class="typewriter">{displayedText}</div>
</div>

<style>
    .main {
        position: relative;
        max-width: 700px;
        background-color: #57c4e5;
        margin: 32px;
        padding: 16px;
        border-radius: 8px;
        color: white;
        font-family: "Roboto", sans-serif;
    }

    .indicator {
        position: absolute;
        top: -12px;
        left: 12px;
        width: 20px;
        height: 20px;
        background-color: #57c4e5;
        transform: rotate(45deg);
    }

    .title {
        color: #ffcc00;
        font-size: 1.125rem; /* 18px */
    }
    .typewriter {
        font-family: "Courier New", monospace;
        white-space: pre-wrap;
        overflow-wrap: break-word;
        font-size: x-large;
    }
</style>
