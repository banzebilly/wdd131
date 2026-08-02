const form = document.querySelector("#appointmentForm");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const appointment = {
            firstName: firstName.value,
            email: email.value,
            phone: phone.value,
            service: service.value,
            date: date.value,
            time: time.value,
            notes: notes.value
        };

        localStorage.setItem("appointment", JSON.stringify(appointment));

        window.location.href = "thanks.html";

    });

}