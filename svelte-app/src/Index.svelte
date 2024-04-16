<script>
    import Menu from "./components/Menu.svelte";
    import { isOpen } from "./components/stores.js";
    function getStaticImage(filename) {
        return "/static/images/" + filename;
    }
</script>

<div class="container">
    <div class="page-header">
        <h1>ポートフォリオ一覧</h1>
        <Menu />
    </div>
    <div class="card-container" class:shifted={$isOpen}>
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
            <img src={getStaticImage("scraping.jpg")} alt="ポートフォリオ2" />
            <h3>タイトル1</h3>
            <p>ポートフォリオ2の説明文</p>
        </div>
        <div class="card">
            <img src={getStaticImage("scraping.jpg")} alt="ポートフォリオ3" />
            <h3>タイトル1</h3>
            <p>ポートフォリオ3の説明文</p>
        </div>
        <!-- カードの追加終わり -->
    </div>
</div>

<style>
    .page-header {
        display: flex;
        justify-content: space-between;
    }
    .shifted {
        transform: translateY(150px);
    }

    .container {
        width: 90%;
        max-width: 1200px;
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
