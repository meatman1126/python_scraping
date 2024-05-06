<script>
    import Menu from "./components/Menu.svelte";
    import VoiceRecognition from "./components/VoiceRecognition.svelte";
</script>

<div class="menu-area">
    <Menu />
</div>
<VoiceRecognition></VoiceRecognition>

<style>
    .menu-area {
        position: absolute; /* 位置を絶対位置で指定 */
        right: 10px; /* 右端から0pxの位置 */
        top: 5px; /* 上端から0pxの位置 */
        z-index: 1000; /* 他の要素の上に表示 */
    }
</style>
