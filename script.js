const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

async function getQuote() {
    quoteEl.textContent = "Loading...";
    authorEl.textContent = "";
    try {
        const res = await fetch("https://zenquotes.io/api/random");
        const data = await res.json();
        quoteEl.textContent = `"${data[0].q}"`;
        authorEl.textContent = `— ${data[0].a}`;
    } catch (error) {
        quoteEl.textContent = "Oops! Could not fetch a quote.";
        authorEl.textContent = "";
    }
}
const backupQuotes = [
    { q: "Your limitation—it’s only your imagination.", a: "Unknown" },
    { q: "Push yourself, because no one else is going to do it for you.", a: "Unknown" },
    { q: "Great things never come from comfort zones.", a: "Unknown" },
];

async function getQuote() {
    quoteEl.textContent = "Loading...";
    authorEl.textContent = "";
    try {
        const res = await fetch("https://zenquotes.io/api/random");
        const data = await res.json();
        quoteEl.textContent = `"${data[0].q}"`;
        authorEl.textContent = `— ${data[0].a}`;
    } catch (error) {
        let random = backupQuotes[Math.floor(Math.random() * backupQuotes.length)];
        quoteEl.textContent = `"${random.q}"`;
        authorEl.textContent = `— ${random.a}`;
    }
}


newQuoteBtn.addEventListener("click", getQuote);

// Load first quote
getQuote();
