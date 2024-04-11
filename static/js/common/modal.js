
$(document).ready(function(){
    // モーダルを開く処理
    $("#openModal").click(function(){
        $("#myModal").css("display", "block");
    });

    // ユーザ登録完了後モーダルを閉じた際の処理
    $('#user_register_ok').click(function() {
        // ログイン画面へリダイレクト
        window.location.href = '/login'; // ここにログインページのURLを指定
    });
});
