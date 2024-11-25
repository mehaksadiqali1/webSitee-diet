"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const bookingForm = document.getElementById("bookingForm");
  const confirmationMessage = document.getElementById("confirmationMessage");

  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const people = document.getElementById("people").value;

    confirmationMessage.textContent = `Thank you, ${name}! Your table for ${people} people on ${date} at ${time} has been booked. We will contact you at ${email} or ${phone} for any updates.`;
    confirmationMessage.classList.remove("d-none");

    bookingForm.reset();
  });
});
