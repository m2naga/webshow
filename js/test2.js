$(function(){
    // 画面表示時にダイアログが表示されないよう設定
    $("#mydialog").dialog({ 
        autoOpen: false,
        width: 'auto',
    });
   
    // ボタンのクリックイベント
    $("#btn_action").click(function(){
        // ダイアログを表示する
        $("#mydialog").dialog("open");
    });
})

$("#open-sample-dialog").on("click", function(){
  //leftの値 = (ウィンドウ幅 -コンテンツ幅) ÷ 2
  var leftPosition = (($(window).width() - $("#sample-dialog").outerWidth(true)) / 2);
  //CSSを変更
  $("#sample-dialog").css({"left": leftPosition + "px"});
  //ダイアログを表示する
  $("#sample-dialog").show();
});
//閉じるボタンで非表示
$(".dialog-close").on("click", function(){
  $(this).parents(".dialog").hide();
});