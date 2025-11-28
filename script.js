// API settings
const apiKey = "724e617695msh711297355ba1339p1a2074jsn5768c50c8415";
const apiHost = "jsearch.p.rapidapi.com";

// ---------------------- Login System ----------------------
function checkLogin() {
    const loggedIn = localStorage.getItem("loggedIn");
    if (!loggedIn && window.location.pathname.indexOf("login.html") === -1) {
        window.location.href = "login.html";
    }
}

function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
        alert("Please enter username and password");
        return;
    }

    // Simple localStorage auth (for demonstration)
    localStorage.setItem("username", username);
    localStorage.setItem("loggedIn", "true");
    window.location.href = "index.html";
}

function logout() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    window.location.href = "login.html";
}

// ---------------------- Theme ----------------------
document.addEventListener("DOMContentLoaded", () => {
    const storedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", storedTheme);
});

function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
}

// ---------------------- Jobs Search ----------------------
async function searchJobs() {
    const query = document.getElementById("searchInput").value;
    const category = document.getElementById("categoryFilter").value;

    const url = `https://jsearch.p.rapidapi.com/search?query=${query}+${category}+remote&num_pages=1`;

    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": apiKey,
            "X-RapidAPI-Host": apiHost
        }
    };

    const jobsContainer = document.getElementById("jobsContainer");
    jobsContainer.innerHTML = "<p>Loading...</p>";

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        jobsContainer.innerHTML = "";

        data.data.forEach(job => {
            const card = document.createElement("div");
            card.classList.add("job-card");

            card.innerHTML = `
                <h3>${job.job_title}</h3>
                <p><strong>Company:</strong> ${job.employer_name}</p>
                <p><strong>Location:</strong> ${job.job_city || "Remote"}</p>
                <p>${job.job_description.substring(0, 150)}...</p>
                <button class="favorite-btn" onclick='saveFavorite(${JSON.stringify(job).replace(/'/g, "&apos;")})'>
                    Add to Favorites
                </button>
                <a href="${job.job_apply_link}" target="_blank">
                    <button class="apply-btn">Apply Now</button>
                </a>
            `;

            jobsContainer.appendChild(card);
        });

    } catch (error) {
        jobsContainer.innerHTML = "<p>Failed to load jobs.</p>";
    }
}

// ---------------------- Favorites ----------------------
function saveFavorite(job) {
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (!favorites.some(fav => fav.job_id === job.job_id)) {
        favorites.push(job);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert("Saved to Favorites!");
    } else {
        alert("Job already in favorites!");
    }
}

function loadFavorites() {
    let list = JSON.parse(localStorage.getItem("favorites") || "[]");
    const container = document.getElementById("favoritesContainer");

    if (list.length === 0) {
        container.innerHTML = "<p>No favorites yet.</p>";
        return;
    }

    container.innerHTML = "";
    list.forEach(job => {
        const card = document.createElement("div");
        card.classList.add("job-card");

        card.innerHTML = `
            <h3>${job.job_title}</h3>
            <p><strong>Company:</strong> ${job.employer_name}</p>
            <p>${job.job_description.substring(0, 150)}...</p>
            <a href="${job.job_apply_link}" target="_blank">
                <button class="apply-btn">Apply Now</button>
            </a>
        `;

        container.appendChild(card);
    });
}

// ---------------------- Clear Favorites ----------------------
function clearFavorites() {
    localStorage.removeItem("favorites");
    alert("Favorites cleared!");
    if (document.getElementById("favoritesContainer")) loadFavorites();
}
