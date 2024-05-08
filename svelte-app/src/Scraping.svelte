<script>
	import { Button, Modal, ModalBody, ModalHeader } from "sveltestrap";
	import Menu from "./components/Menu.svelte";
	import Spinner from "./components/Spinner.svelte";
	import { isLoading } from "./components/stores.js";
	let isExplanationModalOpen = false;
	let isImageModalOpen = false;
	let selectedImageURL = ""; // 選択された画像のURL

	let selectedFile;
	let selectedFileName = "";
	let fileInput;

	function toggleExplanationModal() {
		isExplanationModalOpen = !isExplanationModalOpen;
	}
	function toggleImageModal(imageSrc) {
		selectedImageURL = imageSrc;
		isImageModalOpen = !isImageModalOpen;
	}
	function handleFileChange(event) {
		selectedFile = event.target.files[0];
		selectedFileName = selectedFile ? selectedFile.name : "";
	}
	async function handleSubmit(event) {
		event.preventDefault(); // デフォルトのフォーム送信を防止
		if (!selectedFile) {
			alert("ファイルが選択されていません。");
			return;
		}
		isLoading.set(true);
		const formData = new FormData();
		formData.append("fileUpload", selectedFile);

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
			const errorInfo = await response.json();
			alert(errorInfo.message);
			console.error("Upload failed");
		}
		isLoading.set(false);
		fileInput.value = "";
		selectedFile = null;
		selectedFileName = "";
	}
</script>

<Spinner />

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
					bind:this={fileInput}
					on:input={handleFileChange}
					style="display: none;"
					accept=".csv"
				/>
			</label>
		</div>

		<Button type="submit" outline color="light">
			企業情報を取得する <i class="fa fa-upload ml-2"></i>
		</Button>
		<Button type="button" color="light" on:click={toggleExplanationModal}
			>使い方がわからない方へ <i class="fa fa-question-circle ml-2"
			></i></Button
		>
		<Modal
			isOpen={isExplanationModalOpen}
			toggle={toggleExplanationModal}
			size="lg"
		>
			<ModalHeader toggle={toggleExplanationModal}
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
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<img
							src="/static/images/upload_csv.png"
							alt="アップロードCSVサンプル"
							on:click={() =>
								toggleImageModal(
									"/static/images/upload_csv.png",
								)}
						/>
					</li>
					<li class="item">
						<h5>ダウンロードされるファイルのサンプル</h5>
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<img
							src="/static/images/download_csv.png"
							alt="ダウンロードCSVサンプル"
							on:click={() =>
								toggleImageModal(
									"/static/images/download_csv.png",
								)}
						/>
					</li>
				</ul>
				<Button color="primary" on:click={toggleExplanationModal}
					>閉じる</Button
				>
			</ModalBody>
		</Modal>
		<Modal
			isOpen={isImageModalOpen}
			toggle={() => (isImageModalOpen = false)}
			size="xl"
		>
			<ModalBody>
				<img src={selectedImageURL} alt="Expanded" class="img-fluid" />
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
	.img-fluid {
		width: 100%;
	}
	:global(.modal-xl .modal-content) {
		background-color: gray !important; /* ここで背景色を設定 */
	}
</style>
