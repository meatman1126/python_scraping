<script>
    import { Spinner } from "sveltestrap";
    import { isLoading } from "./stores.js";
</script>

{#if $isLoading}
    <div class="overlay">
        <Spinner
            class="scraping-spinner"
            style="width: 100px; height: 100px;"
            type="border"
            color="primary"
        />
    </div>
{/if}

<style>
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999;
    }
</style>
