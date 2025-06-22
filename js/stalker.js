$(function () {
  // id[js-stalker]を取得する
  const stalker = $("#js-stalker");
  // マウスを移動させたときの処理を指定する
  $(document).on("mousemove", function (e) {
    // マウスの座標を取得
    const x = e.clientX;
    const y = e.clientY;
    // ストーカーの位置を更新する
    stalker.css({
      // 不透明にする
      opacity: 1,
      // マウスの座標に移動する
      transform: "translate(" + x + "px, " + y + "px)",
    });
  });
}); 