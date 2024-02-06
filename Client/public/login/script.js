
const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");


registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

// Define submitForm function separately for better readability and organization
function submitForm(formType) {
  const form = document.getElementById(formType === "signup" ? "signupForm" : "signinForm");

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  console.log(`Form data for ${formType} form:`, data);

  fetch(`http://localhost:4000/${formType}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(response => response.text())
    .then(text => console.log(text));
}

// Use event delegation to handle form submissions
document.body.addEventListener("submit", (event) => {
  // Ensure the target is a form and has the 'submitForm' attribute
  if (event.target.tagName === "FORM" && event.target.hasAttribute("submitForm")) {
    event.preventDefault();
    submitForm(event.target.getAttribute("submitForm"));
  }
});
