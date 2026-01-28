/* PAGE SWITCH */
function showPage(pageId) {
  document.querySelectorAll(".page").forEach((p) => {
    p.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");
  document.querySelector("nav").classList.remove("show");
}

/* MENU TOGGLE */
function toggleMenu() {
  document.querySelector("nav").classList.toggle("show");
}

/* DATE */
function updateDate() {
  const today = new Date();
  document.getElementById("dateBox").innerHTML =
    "📅 " +
    today.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
}
updateDate();

/* DARK MODE */
function toggleDarkMode() {
  document.body.classList.toggle("dark");

  const btn = document.querySelector(".theme-btn");
  btn.innerHTML = document.body.classList.contains("dark") ? "☀️" : "🌙";
}

/* SHOW MESSAGE HOME */
function showMessage() {
  /* Tombol hilang setelah klik sekali */
  document.getElementById("openBtn").style.display = "none";

  /* Pesan tampil */
  document.getElementById("giftArea").style.display = "block";

  /* Musik play */
  let music = document.getElementById("music");
  music.volume = 0.5;
  music.play();

  /* Typing Effect */
  typingEffect();
}

/* Typing Effect */
function typingEffect() {
  const text =
    "Jujur ya… aku masih suka senyum sendiri kalau inget awal kita ketemu haha.\n\n" +
    "Siapa sangka, aku yg niatnya cuma main Avakin buat seru-seruan,\n" +
    "eh malah ketemu sama kamu…\n\n" +
    "Orang yang awalnya cuma aku kenal di game,\n" +
    "tapi lama-lama jadi seseorang yang beneran bikin aku nyaman.\n\n" +
    "Kadang aku mikir, lucu juga ya…\n" +
    "dari sekadar game, malah jadi awal cerita yang aku bersyukur bgt sampai sekarang.\n\n" +
    "Aku bersyukur banget bisa ketemu sama kamu,\n" +
    "ntah gimana waktu ini mengaturnya kamu bikin aku nyaman.\n\n" +
    "Makasih ya udah mau sama akuuu sayangku eyinn,\n" +
    "udah bikin aku ketawa, bikin aku semangat,\n" +
    "dan tanpa kamu sadar… kamu jadi satu satunya yang bikin aku senyum senyum sedniri kayak orang gila.\n\n" +
    "Semoga ini bukan cuma pertemuan singkat,\n" +
    "tapi jadi perjalanan panjang yang terus kita jalanin bareng-bareng.\n\n" +
    "Happy Birthday ya, sayangku 🎀\n" +
    "aku beneran bangga dan bahagia punya kamu, jangan lupa pap manisnya yahh xxixixixi 🤍✨";

  let i = 0;
  const typing = document.getElementById("typingText");
  typing.innerHTML = "";

  function run() {
    if (i < text.length) {
      typing.innerHTML += text.charAt(i);
      i++;
      setTimeout(run, 50);
    }
  }
  run();
}
