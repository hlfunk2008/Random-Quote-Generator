let quotes = [
  {"quote": "one", "source": "t1", "citation": "Twitter", "year": "2011"},
  {"quote": "two", "source": "t2", "citation": "Youtube", "year": "2000"},
  {"quote": "three", "source": "t3", "citation": "Reddit", "year": "210 BCE"},
  {"quote": "four", "source": "t4", "citation": "Ancient Sumerian Tablet", "year": "2026"},
  {"quote": "five", "source": "t5", "citation": "Newspaper", "year": "2"}
]

// Gets a random number and returns an object containing quotes, citations, etc.
function getRandomQuote() {
  let randomNumber = Math.floor( Math.random() * 5);
  return quotes[randomNumber]
}


function printQuote() {
  let quote = `<p class="quote-">${getRandomQuote().quote}</p>`
  let source = `<p class="source">${getRandomQuote().source}`


  // detects 
  if (getRandomQuote().quote !== "") {
    document.getElementsByClassName('quote')[0].innerHTML = `${getRandomQuote().quote}`
  }
  if (getRandomQuote().citation !== "") {
    document.getElementsByClassName('source')[0].innerHTML = ` ${getRandomQuote().citation}`
  } if (getRandomQuote().year !== "") {
    document.getElementsByClassName('source')[0].innerHTML += ` ${getRandomQuote().year}`
  }
  updateBgColor()
}

function updateBgColor() {
  let r1 = Math.floor( Math.random() * 255);
  let r2 = Math.floor( Math.random() * 255);
  let r3 = Math.floor( Math.random() * 255);

  document.getElementById('body').setAttribute(b)
}

document.getElementById('load-quote').addEventListener("click", printQuote, false);