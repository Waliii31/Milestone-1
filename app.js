// Select the button and the skills section
var toggleButton = document.getElementById("toggle-skills");
var skillsSection = document.getElementById("skills");
// Function to toggle visibility of the skills section
var toggleSkillsVisibility = function () {
    if (skillsSection.classList.contains("hidden")) {
        skillsSection.classList.remove("hidden");
    }
    else {
        skillsSection.classList.add("hidden");
    }
};
// Add event listener to the button
toggleButton.addEventListener("click", toggleSkillsVisibility);
