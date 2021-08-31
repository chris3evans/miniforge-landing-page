const ctaBtn = document.querySelector(".cta--btn");
const formContainer = document.querySelector("#mc_embed_signup");
const formOverlay = document.querySelector(".form-overlay");
const formInputs = document.querySelectorAll(".required");
const formCloseBtn = document.querySelector(".close--icon");

// Close Form
const closeForm = function () {
  formContainer.classList.add("hidden");
  formOverlay.classList.add("hidden");
};

// Reset Form Fields
const resetForm = function () {
  formInputs.forEach(function (formInput) {
    formInput.value = "";
  });
};

// Reveal Form
ctaBtn.addEventListener("click", function (e) {
  formContainer.classList.remove("hidden");
  formOverlay.classList.remove("hidden");
});

// Hide Form - Form Button
formCloseBtn.addEventListener("click", function () {
  closeForm();
  resetForm();
});

// Hide Form - Esc Button
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeForm();
    resetForm();
  }
});

// Hide Form - Click Overlay
formOverlay.addEventListener("click", function () {
  closeForm();
  resetForm();
});
