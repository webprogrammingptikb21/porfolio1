// event pada saat d klik
$(".page-scroll").on("click", function (e) {
  // ambil isi href
  var tujuan = $(this).attr("href");
  // tangkap elemen ybs
  var elementujuan = $(tujuan);
  // pindahkan body
  $("body").animate({
    scrollTop: elementujuan.offset().top - 50,
  });
  e.preventDefault();
});
