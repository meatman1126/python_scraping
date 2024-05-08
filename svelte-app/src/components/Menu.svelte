<script>
    import { onMount } from "svelte";
    import { Button, Offcanvas } from "sveltestrap";
    let isOpen = false;
    let userRoles = [];
    let isLoaded = false;
    onMount(async () => {
        const res = await fetch("/api/get-user-roles");
        console.log(res);
        userRoles = await res.json();
        console.log(userRoles);
        console.log(hasRole("Admin"));
        isLoaded = true;
    });
    const hasRole = (role) => userRoles.includes(role);

    const toggle = (event) => {
        isOpen = !isOpen;
    };
</script>

<Button type="button" color="light" on:click={toggle} size="lg">&#9776;</Button>
<Offcanvas theme="light" {isOpen} {toggle} header="Link" placement="start">
    <div class="list-group">
        {#if isLoaded}
            <a href="/index" class="list-group-item list-group-item-action">
                ポートフォリオ一覧
            </a>
            {#if hasRole("Admin")}
                <a
                    href="/register"
                    class="list-group-item list-group-item-action"
                    >ユーザ新規登録</a
                >
            {/if}
            <a href="/logout" class="list-group-item list-group-item-action"
                >ログアウト</a
            >
        {/if}
    </div>
</Offcanvas>

<style>
</style>
