// Select the button and the skills section
const toggleButton = document.getElementById("toggle-skills") as HTMLButtonElement;
const skillsSection = document.getElementById("skills") as HTMLElement;

// Function to toggle visibility of the skills section
const toggleSkillsVisibility = (): void => {
  if (skillsSection.classList.contains("hidden")) {
    skillsSection.classList.remove("hidden");
  } else {
    skillsSection.classList.add("hidden");
  }
};

// Add event listener to the button
toggleButton.addEventListener("click", toggleSkillsVisibility);
