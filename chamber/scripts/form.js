document.querySelector("#orgtitle").addEventListener("input", function () {
    const value = this.value;
    if (value.length > 16) {
        this.setCustomValidity("Maximum 16 characters allowed.");
    } else {
        this.setCustomValidity("");
    }
});
document.querySelector("#orgtitle").addEventListener("invalid", function () {
    this.setCustomValidity(
        "Org title must be at least 7 letters, hyphens, or spaces (no numbers/symbols)."
    );
});


