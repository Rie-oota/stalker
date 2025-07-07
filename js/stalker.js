$(function () {
  // id[js-stalker]を取得する
  const stalker = $("#js-stalker");
  // 不透明にする
  $(stalker).css("opacity","1");
  // マウスを移動させたときの処理を指定する
  $(document).on("mousemove", function (e) {
    // マウスの座標を取得
    const x = e.clientX;
    const y = e.clientY;
    // ストーカーの位置を更新する
    $(stalker).css("transform","translate(" + x + "px, " + y + "px)");
  });
  // アニメーションを更新する
  (function update(){
    window.requestAnimationFrame(update);
  })();
});