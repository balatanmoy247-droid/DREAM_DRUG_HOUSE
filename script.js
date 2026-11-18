// Dream Drugs House Doctor Slider

let currentSlide = 0;

const slides = document.querySelectorAll(".slide");

// Show Doctor Slide

function showSlide(index) {

    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
}

// Next and Previous Buttons

function changeSlide(direction) {

    showSlide(currentSlide + direction);

}

// Automatic Slider

setInterval(function() {

    showSlide(currentSlide + 1);

}, 4000);
// Dream Drugs House Appointment Booking

const appointmentForm =
    document.getElementById("appointmentForm");

appointmentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get Patient Information

    const name =
        document.getElementById("patientName").value;

    const mobile =
        document.getElementById("mobile").value;

    const doctor =
        document.getElementById("doctor").value;

    const date =
        document.getElementById("appointmentDate").value;

    const time =
        document.getElementById("appointmentTime").value;

    const problem =
        document.getElementById("problem").value;
fetch("https://script.google.com/macros/s/AKfycbzq5KQ55KU8kp2VjU4gB3z99cDIso7ZkzjAdE0KXzMetBYBl-qYJdWBoGOkktpKnelF/exec" {
  method: "POST",
  body: JSON.stringify({
    patientName: patientName,
    phone: phone,
    doctor: doctor,
    date: date,,
    time: time
  })
})
.then(response => response.json())
.then(data => {
  console.log(data);
  alert(data.message);
})
.catch(error => {
  console.error("Error:", error);
  alert("Something went wrong!");
});
    // Show Booking Request

    const message =
        document.getElementById("bookingMessage");

    message.innerHTML =
        "Thank you, " + name +
        "! Your demo appointment request has been submitted.<br>" +
        "Doctor: " + doctor + "<br>" +
        "Date: " + date + "<br>" +
        "Time: " + time + "<br>" +
        "Please contact the pharmacy to confirm your appointment.";

    // Reset Form

    appointmentForm.reset();

});