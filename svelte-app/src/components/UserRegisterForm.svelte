<script>
    // import { writable } from "svelte/store";

    // export const registered = writable(false);
    import { Button, Input, InputGroup, InputGroupText } from "sveltestrap";
    import { registered } from "./stores.js";
    export let register_url;
    let email = "";
    let password = "";
    let username = "";
    let note = "";

    async function handleSubmit(event) {
        event.preventDefault(); // フォームのデフォルトの送信を防ぎます

        // POSTリクエストの設定
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email,
                password: password,
                username: username,
                note: note,
            }),
        };

        try {
            const response = await fetch(register_url, requestOptions);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // 成功した後の処理をここに書く
            registered.set(true);
        } catch (error) {
            console.error("Error:", error);
        }
    }
</script>

<div class="registration-container">
    <h2>ユーザ登録</h2>
    <form
        action={register_url}
        method="post"
        id="register-form"
        on:submit={handleSubmit}
    >
        <div class="form-group">
            <label for="email">メールアドレス</label>
            <InputGroup>
                <InputGroupText>
                    <i class="fas fa-envelope"></i>
                </InputGroupText>
                <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="メールアドレスを入力"
                    required
                    bind:value={email}
                />
            </InputGroup>
            <!-- <label for="email">メールアドレス</label>
            <input
                type="email"
                id="email"
                name="email"
                required
                bind:value={email}
            />
            <i class="fas fa-envelope"></i> -->
        </div>
        <div class="form-group">
            <label for="password">パスワード</label>
            <InputGroup>
                <InputGroupText>
                    <i class="fas fa-lock"></i>
                </InputGroupText>
                <Input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="パスワードを入力"
                    required
                    bind:value={password}
                />
            </InputGroup>

            <!-- <label for="password">パスワード</label>
            <input
                type="password"
                id="password"
                name="password"
                required
                bind:value={password}
            />
            <i class="fas fa-lock"></i> -->
        </div>
        <div class="form-group">
            <label for="username">ユーザ名</label>
            <InputGroup>
                <InputGroupText>
                    <i class="fas fa-user"></i>
                </InputGroupText>
                <Input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="ユーザ名を入力"
                    required
                    bind:value={username}
                />
            </InputGroup>

            <!-- <input
                type="text"
                id="username"
                name="username"
                required
                bind:value={username}
            /> -->
        </div>
        <div class="form-group">
            <label for="note">備考</label>
            <InputGroup>
                <InputGroupText>
                    <i class="fas fa-comment"></i>
                </InputGroupText>
                <Input
                    type="textarea"
                    id="note"
                    name="note"
                    placeholder="備考を入力"
                    bind:value={note}
                />
            </InputGroup>

            <!-- <textarea id="note" name="note" bind:value={note}></textarea> -->
        </div>
        <div class="button-group">
            <Button
                type="submit"
                color="primary"
                block="true"
                class="register-btn">登録</Button
            >
        </div>
    </form>
</div>

<style>
    .registration-container {
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 400px;
    }

    h2 {
        text-align: center;
        color: #333;
    }

    .form-group {
        margin-bottom: 20px;
    }

    label {
        display: block;
        margin-bottom: 5px;
    }

    /* input[type="email"],
    input[type="password"], */
    /* input[type="text"],
    textarea {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        box-sizing: border-box; 
    }
 */
    .button-group {
        display: flex;
        justify-content: space-between;
    }

    /* .register-btn,
    .cancel-btn {
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    .register-btn {
        background-color: #007bff;
        color: white;
    }

    .cancel-btn {
        background-color: #6c757d;
        color: white;
    }

    .register-btn:hover {
        background-color: #0056b3;
    }

    .cancel-btn:hover {
        background-color: #545b62;
    } */
</style>
