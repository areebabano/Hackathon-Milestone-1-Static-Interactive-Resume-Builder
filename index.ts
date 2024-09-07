// Skills Toogle Button 
// page finish loading run this code 

document.addEventListener("DOMContentLoaded", () => {

 // button that show/hide skills section

  const toggleButton = document.getElementById(
    "toggle-button"
  ) as HTMLButtonElement;

// section that contain the skills 

  const skillSection = document.getElementById("skills") as HTMLElement;

//   conditions to check if elements exists

  if (toggleButton && skillSection) {
    toggleButton.addEventListener("click", () => {
        // Toogle the skills section visibility 
      if (
        skillSection.style.display === "none" ||
        !skillSection.style.display
      ) {
        skillSection.style.display = "block";
        toggleButton.textContent = "Hide Skills";
      } else {
        skillSection.style.display = "none";
        toggleButton.textContent = "Show Skills";
      }
    });
  }
});
