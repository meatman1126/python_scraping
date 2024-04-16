<script>
	import Modal from "./components/Modal.svelte";
	import UserRegisterForm from "./components/UserRegisterForm.svelte";
	import { registered } from "./components/stores.js";

	let showModal = false;
	$: showModal = $registered;
</script>

<!-- <button on:click={() => (showModal = true)}> show modal </button> -->

<UserRegisterForm register_url="/register" />
<Modal bind:showModal>
	<h2 slot="header">
		ユーザ登録が完了しました。<br />
		ログイン画面に遷移します。
	</h2>
</Modal>
