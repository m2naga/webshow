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

// 以下テスト

let dialog = ['テスト','キッチン','玄関'];
let dialogFunc = [];
let dialogStr = [];
for(let i = 0; i < dialog.length; i++){
    dialogFunc[i] = '"#open-sample-dialog' + i + '"';
    dialogStr[i] = '"sample-dialog' + i + '"';
    console.log(dialogFunc[i]);
    console.log(dialogStr[i]);
}

$(function(){
    $('.js-sample-open').each(function(){
        $(this).on('click',function(){
            var target = $(this).data('target');
            var sampleName = document.getElementById(target);
            //leftの値 = (ウィンドウ幅 -コンテンツ幅) ÷ 2
            var leftPosition = (($(window).width() - $(sampleName).outerWidth(true)) / 2);
            //CSSを変更
            $(sampleName).css({"left": leftPosition + "px"});
            //ダイアログを表示する
            $(sampleName).show();
        });
    });
});