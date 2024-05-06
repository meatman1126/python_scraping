<script>
	import { Button, Modal, ModalBody, ModalHeader } from "sveltestrap";

	import UserRegisterForm from "./components/UserRegisterForm.svelte";
	import { registered } from "./components/stores.js";

	let isModalOpen = false;
	$: isModalOpen = $registered;

	function toLoginPage() {
		window.location.href = "/logout";
	}
</script>

<UserRegisterForm register_url="/register" />
<Modal isOpen={isModalOpen} size="sm">
	<ModalHeader>ユーザ登録完了</ModalHeader>
	<ModalBody class="modal-body">
		<h5>ログイン画面に遷移します。</h5>
		<Button color="primary" block="true" on:click={toLoginPage}>OK</Button>
	</ModalBody>
</Modal>
