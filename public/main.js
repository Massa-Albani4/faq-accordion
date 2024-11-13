// Get all the question containers
const rowContainers = document.querySelectorAll(".row-container");

// Add a click event listener to each question container
rowContainers.forEach((row) => {
  const question = row.querySelector("p");
  const answer = row.querySelector(".answer");
  const plusIcon = row.querySelector("img");

  question.addEventListener("click", () => {
    // Toggle the display of the answer
    answer.classList.toggle("active");
    if (answer.classList.contains("active")) {
      plusIcon.src = "../src/assets/icon-minus.svg";
    } else {
      plusIcon.src = "../src/assets/icon-plus.svg";
    }
  });
});
