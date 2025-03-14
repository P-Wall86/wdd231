//DATE-LAST MODIFIED
var currentYear = new Date().getFullYear();
var lastModified = document.lastModified;

console.log("Current Year:", currentYear);
console.log("Last Modified:", lastModified);

document.querySelector(".right-section p:nth-child(3)").innerHTML = "&copy" + currentYear + " - Flower City Chamber of Commerce ";
document.querySelector(".right-section p:nth-child(4)").innerHTML = "Last modified: " + lastModified;