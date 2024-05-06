<script>
    import Menu from "./components/Menu.svelte";

    function getStaticImage(filename) {
        return "/static/images/" + filename;
    }
</script>

<div class="page-header p-3 mb-5 text-white bg-dark">
    <h1>ポートフォリオ一覧</h1>
    <Menu />
</div>

<div class="container">
    <div class="card-container">
        <!-- ここにカードを追加 -->
        <div class="card">
            <a href="/fileup">
                <img
                    src={getStaticImage("scraping.jpg")}
                    alt="ポートフォリオ1"
                />
            </a>
            <h3>企業情報取得ツール</h3>
            <p>
                企業情報の取得を自動で行うことのできるWebスクレイピングツールです。<br
                /> 営業リストの作成などに使用することが可能です。
            </p>
        </div>
        <div class="card">
            <a href="/voice">
                <img
                    src={getStaticImage("voice_recognition.jpg")}
                    alt="ポートフォリオ2"
                />
            </a>

            <h3>音声認識</h3>
            <p>
                マイクからAIに質問をすることができます。<br
                />生成AIを利用する際にプロンプトを書き起こすの面倒という方向けです。
            </p>
        </div>
        <div class="card">
            <img
                src={getStaticImage("image_recognition.jpg")}
                alt="ポートフォリオ3"
            />
            <h3>画像認識</h3>
            <p>現在製作中です。</p>
        </div>
        <!-- カードの追加終わり -->
    </div>
</div>

<style>
    .page-header {
        display: flex;
        justify-content: space-between;
    }

    .card-container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: space-evenly;
        transition: transform 0.3s ease;
    }

    .card {
        width: calc(
            (100% - 50px) / 3
        ); /* 1行あたりのカードの幅を3枚分に調整し、ギャップを考慮 */
        border: 1px solid #ddd;
        border-radius: 5px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 15px;
    }

    .card img {
        max-width: 100%;
        height: auto;
        border-bottom: 1px solid #ddd;
        margin-bottom: 15px;
    }

    .card h3 {
        font-size: 1.2em;
        margin: 0;
        margin-bottom: 10px;
    }

    @media (max-width: 768px) {
        .card {
            width: calc(100% - 20px); /* スマホ表示時は1行に1枚表示 */
        }
    }
</style>
