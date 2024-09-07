// Skills Toogle Button 
// page finish loading run this code 
document.addEventListener("DOMContentLoaded", function () {
    // button that show/hide skills section
    var toggleButton = document.getElementById("toggle-button");
    // section that contain the skills 
    var skillSection = document.getElementById("skills");
    //   conditions to check if elements exists
    if (toggleButton && skillSection) {
        toggleButton.addEventListener("click", function () {
            // Toogle the skills section visibility 
            if (skillSection.style.display === "none" ||
                !skillSection.style.display) {
                skillSection.style.display = "block";
                toggleButton.textContent = "Hide Skills";
            }
            else {
                skillSection.style.display = "none";
                toggleButton.textContent = "Show Skills";
            }
        });
    }
});
