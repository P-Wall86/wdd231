//TOGGLE GRID-LIST
const viewToggle = document.getElementById("view-toggle");
const cardsSection = document.getElementById("json-cards-section");

viewToggle.addEventListener("click", () => {
    if (cardsSection.classList.contains("list-view")) {
        cardsSection.classList.remove("list-view");
        viewToggle.innerHTML = "▦";
        
    } else {

        cardsSection.classList.add("list-view");
        viewToggle.innerHTML = "L";
    }
});