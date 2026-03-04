let quotes = [
  {"quote": "Be yourself; everyone else is already take.", "source": "Oscar Wilde", "year": "1905", "tags": "Inspirational"},
  {"quote": "In the middle of difficulty lies opportunity.", "source": "Albert Einstein", "citation": "NY Times Magazine", "year": "1940", "tags": "Motivational"},
  {"quote": "The only thing we have to fear is fear itself.", "source": "Franklin D. Roosevelt", "year": "1933", "tags": "Courage"},
  {"quote": "That's one small step for man, one giant leap for mankind", "source": "Neil Armstrong", "citation": "Apollo 11 Moon Landing", "year": "1969", "tags": "Historic Moment"},
  {"quote": "Not all those who wander are lost.", "source": "J. R. R. Tolkien", "year": "1969", "tags": "Wisdom"}
]

// Gets a random number and returns an object containing quotes, citations, etc.
function getRandomQuote() {
  let randomNumber = Math.floor( Math.random() * 5);
  return quotes[randomNumber]
}

function printQuote() {
  // Define random values for the backgroundColor
  let r1 = Math.floor( Math.random() * 255 )
  let r2 = Math.floor( Math.random() * 255 )
  let r3 = Math.floor( Math.random() * 255 )

  randQuote = getRandomQuote();

  let html = `<p class="quote">${randQuote.quote}</p>`;
  html += `<p class="source">${randQuote.source}`

  // Checks if optional informaton exists and adds it to the page
  if (randQuote.citation) {
    html += `<span class="citation">${randQuote.citation}</span>`
  }
  if (randQuote.year) {
    html += `<span class="year">${randQuote.year}</span>`
  }
  if (randQuote.tags) {
    html += `<span class="tags">${randQuote.tags}</span>`
  }

  // Ends the "source" paragraph after adding optional span objects
  html += `</p>`

  // Sets the changes to be displayed
  document.getElementById('quote-box').innerHTML = html;

  document.body.style.backgroundColor = `rgb(${r1}, ${r2}, ${r3})`
}

// Refreshes the quote every ~10 seconds by recalling the printQuote function
setInterval(printQuote, 10000)


document.getElementById('load-quote').addEventListener("click", printQuote, false);

