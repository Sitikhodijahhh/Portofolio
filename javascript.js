const openNavbar = document.querySelector(".openNavbar");
const closeNavbar = document.querySelector(".closeNavbar");
const navbar = document.querySelector(".nav");

openNavbar.onclick = () => {
  navbar.classList.add("active");
};

closeNavbar.addEventListener("click", () => {
  navbar.classList.remove("active");
});
function showMore(listId, button) {
  const list = document.getElementById(listId);
  const hiddenItems = list.querySelectorAll(".hidden-item");
  const isHidden = hiddenItems[0]?.style.display === "none" || hiddenItems[0]?.style.display === "";

  if (isHidden) {
    hiddenItems.forEach(item => item.style.display = "block");
    button.textContent = "Show Less";
  } else {
    hiddenItems.forEach(item => item.style.display = "none");
    button.textContent = "Show All";
    list.scrollIntoView({ behavior: 'smooth' });
  }
}
