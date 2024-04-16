<script>
	import { Button, Modal, ModalBody, ModalHeader } from "sveltestrap";
	import Menu from "./components/Menu.svelte";
	let isModalOpen = false;
	let selectedFile;
	let selectedFileName = "";

	function toggleModal() {
		isModalOpen = !isModalOpen;
	}
	function handleFileChange(event) {
		selectedFile = event.target.files[0];
		selectedFileName = selectedFile.name;
	}

	async function handleSubmit(event) {
		event.preventDefault(); // デフォルトのフォーム送信を防止
		if (!selectedFile) {
			alert("ファイルが選択されていません。");
			return;
		}

		const formData = new FormData();
		formData.append("fileUpload", selectedFile);

		try {
			const response = await fetch("/upload", {
				method: "POST",
				body: formData,
			});
			if (response.ok) {
				const blob = await response.blob();
				const downloadUrl = window.URL.createObjectURL(blob);
				const a = document.createElement("a");
				a.style.display = "none";
				a.href = downloadUrl;
				a.download = response.headers
					.get("Content-Disposition")
					.match(/filename="?(.+)"?/)[1];
				document.body.appendChild(a);
				a.click();
				document.body.removeChild(a);
			} else {
				console.error("Upload failed");
			}
		} catch (error) {
			console.error("Upload failed:", error);
		}
		selectedFile = null;
		selectedFileName = "";
	}
</script>

<form on:submit={handleSubmit}>
	<div class="screen">
		<div class="menu-area">
			<Menu />
		</div>
		<h1 class="text-light">
			企業名リストCSVファイルをアップロードしてください
		</h1>
		<div class="upload-container">
			<label class="upload-container">
				<i class="fa fa-cloud-upload-alt fa-3x"></i>
				<span class="mt-2">ファイルを選択</span>
				<span class="mt-2 border-bottom">{selectedFileName}</span>
				<input
					type="file"
					id="fileUpload"
					name="fileUpload"
					on:change={handleFileChange}
					style="display: none;"
					accept=".csv"
				/>
			</label>
		</div>
		<Button type="submit" outline color="light">
			企業情報を取得する <i class="fa fa-upload ml-2"></i>
		</Button>
		<Button type="button" color="light" on:click={toggleModal}
			>使い方がわからない方へ <i class="fa fa-question-circle ml-2"
			></i></Button
		>
		<Modal isOpen={isModalOpen} toggle={toggleModal} size="lg">
			<ModalHeader toggle={toggleModal}
				>企業情報リスト取得機能の使い方</ModalHeader
			>
			<ModalBody class="modal-body">
				<ul>
					<li class="item">
						<h5>概要の説明</h5>
						<p>
							調査対象の企業名が列挙されたCSVファイルをアップロードすることで、企業のホームページのURLが格納されたCSVファイルをダウンロードすることができます。
						</p>
					</li>
					<li class="item">
						<h5>アップロードするCSVファイルのサンプル</h5>
						<img
							src="/static/images/upload_csv.png"
							alt="アップロードCSVサンプル"
						/>
					</li>
					<li class="item">
						<h5>ダウンロードされるファイルのサンプル</h5>
						<img
							src="/static/images/download_csv.png"
							alt="ダウンロードCSVサンプル"
						/>
					</li>
				</ul>
				<Button color="primary" on:click={toggleModal}>閉じる</Button>
			</ModalBody>
		</Modal>
	</div>
</form>

<style>
	.menu-area {
		position: absolute; /* 位置を絶対位置で指定 */
		right: 10px; /* 右端から0pxの位置 */
		top: 5px; /* 上端から0pxの位置 */
		z-index: 1000; /* 他の要素の上に表示 */
	}
	.upload-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: 400px;
		height: 200px;
		color: #f8fafc;
		background-color: #1e293b;
		border-radius: 0.75rem;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
		transition: background-color 300ms ease-in-out;
		cursor: pointer;
	}
	.upload-container:hover {
		background-color: #334155;
	}
	.screen {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background: linear-gradient(to bottom right, #6ee7b7, #3b82f6);
		font-family: Roboto, sans-serif;
		gap: 2rem;
	}
	.item {
		margin-bottom: 20px; /* 各アイテム間にスペースを追加 */
	}
	.item img {
		width: 100%; /* イメージを適切に表示 */
		max-width: 550px; /* イメージの最大横幅を制限 */
	}
</style>
