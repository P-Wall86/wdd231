export function updateFooter() {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    console.log("Current Year:", currentYear);
    console.log("Last Modified:", lastModified);

    document.querySelector("#currentyear").innerHTML = `Pamela Pared &copy; ${currentYear}`;
    document.querySelector("#lastmodified").innerHTML = `Last modified: ${lastModified}`;
}