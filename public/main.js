const faqRow = document.getElementsByTagName("li");

for (let i = 0; i < faqRow.length; i++) {
  faqRow[i].addEventListener("click", () => {
    this.classList.toggle("active");
    this.style.backgroundColor = "#63535B";
  });
}
