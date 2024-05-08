<script>
    export let errorMessage;
</script>

<div class="error-container">
    <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
    <p>{errorMessage}</p>
    <a href="/login" class="login-link">ログイン画面へ</a>
</div>

<style>
    .error-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh; /* Full viewport height */
        text-align: center;
    }

    .fa-exclamation-triangle {
        font-size: 5rem; /* 3rem for larger icon */
        color: red; /* Red color for error icon */
        margin-bottom: 20px; /* Space between icon and text */
    }

    p {
        font-size: 2rem;
        color: #333; /* Dark grey text */
    }
    .login-link {
        color: blue; /* Blue color for link */
        text-decoration: none; /* No underline */
        font-size: 1.5rem; /* Slightly larger font for visibility */
        margin-top: 20px; /* Space above the link */
    }

    .login-link:hover {
        text-decoration: underline; /* Underline on hover for better interaction */
    }
</style>
