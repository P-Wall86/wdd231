function displayThankYouMessage() {
    const data = JSON.parse(localStorage.getItem("formSubmission"));
    const title = document.getElementById("thankTitle");
    const message = document.getElementById("thankMessage");
    const infoBox = document.getElementById("submittedInfo");

    console.log("Retrieved data from localStorage:", data);

    if (data && data.formType === "vet") {
        title.textContent = "Thanks for Joining Us!";
        message.textContent = "We appreciate your interest in supporting our cause.";

        document.getElementById("display-org-name").textContent = data.orgName;
        document.getElementById("display-contact-email").textContent = data.contactEmail;

        infoBox.innerHTML = `
            <p><strong>Organization:</strong> ${data.orgName}</p>
            <p><strong>Contact Email:</strong> ${data.contactEmail}</p>
            <p><strong>Location:</strong> ${data.location}</p>
        `;
    } else if (data && data.formType === "adoption") {
        title.textContent = "Thank You for Applying!";
        message.textContent = "Your adoption request has been received.";

        document.getElementById("display-org-name").textContent = data.fullName;
        document.getElementById("display-contact-email").textContent = data.email;

        infoBox.innerHTML = `
            <p><strong>Full Name:</strong> ${data.fullName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Preferred Pet Type:</strong> ${data.petType}</p>
            <p><strong>Living Situation:</strong> ${data.livingSituation}</p>
        `;
    } else {
        title.textContent = "Oops!";
        message.textContent = "No form data was found. Please go back and try again.";
        infoBox.innerHTML = "";
        document.querySelector(".confirmation-text").style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', displayThankYouMessage);