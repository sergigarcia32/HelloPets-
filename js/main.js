const btn = document.getElementById("btnSubir");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

function subirArriba() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
