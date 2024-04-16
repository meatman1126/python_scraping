<script>
    import { isOpen } from "./stores.js";

    function toggleMenu() {
        $isOpen = !$isOpen;
    }

    function handleKeydown(event) {
        if (event.key === "Enter" || event.key === " ") {
            toggleMenu();
        }
    }
</script>

<div>
    <div
        class="hamburger"
        role="button"
        tabindex="0"
        on:click={toggleMenu}
        on:keydown={handleKeydown}
    >
        <h1>&#9776;</h1>
    </div>
    <div>
        <ul class={$isOpen ? "menu open" : "menu"}>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </div>
</div>

<style>
    .menu {
        display: block;
        opacity: 0;
        position: absolute;
        background-color: white;
        list-style-type: none;
        padding: 20px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        width: 200px;
        transition:
            opacity 0.3s ease,
            transform 0.3s ease;
        transform: translateX(20px);
        pointer-events: none;
        right: 0;
    }
    .menu.open {
        opacity: 1;
        transform: translateX(0);
        pointer-events: auto;
    }
    .hamburger {
        cursor: pointer;
        user-select: none;
        position: relative;
    }
</style>
