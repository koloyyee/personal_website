// window.addEventListener('DOMContentLoaded', (event) => {
//   const contactForm = document.querySelector('.contact-form');
//   contactForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const formData = new FormData(contactForm);
//     const name = formData.get('name');
//     const email = formData.get('email');
//     const body = formData.get('body');
//     console.log(name, email, body);
//   });
// });
const contactForm = document.querySelector("#contact_form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get("name");
  const email = formData.get("email");
  const body = formData.get("body");
  console.log(name, email, body);
  Email.send({
    SecureToken: "d33b6006-bdff-42da-9e9f-d9b9d7a8cb60",
    To: "koloyyee@gmail.com",
    From: email,
    Subject: name + " testing",
    Body: body,
  }).then((message) => alert(message));
});
