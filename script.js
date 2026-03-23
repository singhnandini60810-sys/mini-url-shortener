function shortenURL() {

    const url = document.getElementById("url").value;

    if (!url) {
        alert("Enter URL");
        return;
    }

    const shortCode = Math.random().toString(36).substring(2, 7);
    const shortURL = "short.ly/" + shortCode;

    let data = JSON.parse(localStorage.getItem("urls")) || [];

    data.push({
        original: url,
        short: shortURL
    });

    localStorage.setItem("urls", JSON.stringify(data));

    document.getElementById("result").innerHTML =
        `<p>Short URL: ${shortURL}</p>`;

    loadHistory();
}

function loadHistory() {

    const history = document.getElementById("history");

    let data = JSON.parse(localStorage.getItem("urls")) || [];

    history.innerHTML = "";

    data.forEach(link => {

        history.innerHTML += `
        <div class="link">
            <p>${link.original}</p>
            <p>${link.short}</p>
        </div>
        `;
    });
}

loadHistory();
