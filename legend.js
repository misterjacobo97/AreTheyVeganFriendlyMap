// Select the legend and toggle button
var legend = document.getElementById("legend");
var toggleBtn = document.getElementById("toggle-legend");

// Set the initial state of the legend
legend.style.display = "none";

// Add an event listener to the toggle button
toggleBtn.addEventListener("click", function() {
    if (legend.style.display === "none") {
        legend.style.display = "block";
    } else {
        legend.style.display = "none";
    }
});
