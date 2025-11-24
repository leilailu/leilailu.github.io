// Smooth scroll knapp
document.getElementById("scrollButton").addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
});

// Log for å vise at JS funker (forhåpentligvis)
console.log("Portfolio JS lastet inn!");
