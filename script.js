let selectedRating;
const ratingOptions = document.querySelectorAll(".card__option");
const submitButton = document.querySelector("button");
const selectedRatingSpan = document.querySelector(".selected-rating");

const ratingState = document.querySelector(".rating-state");
const thankYouState = document.querySelector(".thank-you-state");

ratingOptions.forEach((option) => {
  option.addEventListener("click", () => {
    if (typeof selectedRating !== "undefined") {
      selectedRating.classList.remove("selected-option");
    }
    selectedRating = option;
    option.classList.add("selected-option");
  });
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (typeof selectedRating === "undefined") {
    alert("Please select a rating number out of five.");
  } else {
    selectedRatingSpan.innerText = selectedRating.innerText;
    ratingState.classList.add("hidden");
    thankYouState.classList.remove("hidden");
  }
});