$(window).load(function () {
    $(".bg-slider").bgSwitcher({
      images: [
        "https://jinmati.github.io/test/fv-bgi_01@2x.jpg",
        "https://jinmati.github.io/test/fv-bgi_02@2x.jpg",
        "https://jinmati.github.io/test/fv-bgi_03@2x.jpg",
      ], // 切り替える背景画像を指定
      interval: 5000, // 背景画像を切り替える間隔を指定 3000=3秒
      loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
      shuffle: false, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
      effect: "drop", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
      duration: 1000, // エフェクトの時間を指定します。
      easing: "linear", // エフェクトのイージングをlinear,swingから指定
    });
  });
