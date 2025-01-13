document.getElementById("search-button").addEventListener("click", () => {
    const searchQuery = document.getElementById("game-search").value;
    alert(`Searching for: ${searchQuery}`);
});

document.getElementById("connect-steam").addEventListener("click", () => {
    alert("Connecting to Steam library...");
});
