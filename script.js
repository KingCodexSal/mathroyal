window.addEventListener("scroll", function () {
  var header = this.document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});
function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function closeSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
