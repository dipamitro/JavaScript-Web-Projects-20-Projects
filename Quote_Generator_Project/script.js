const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];
function loading(){
  loader.hidden = false;
  quoteContainer.hidden=true
}

function complete (){
  loader.hidden = true;
  quoteContainer.hidden=false;
}
// Show new Quote
function newQuotes() {
  loading();
  // Pick a random quote from apiQuotes Array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);

  // authorText.textContent= quote.author;
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.innerHTML = quote.author;
  }

  // Reduce the font size of long quotes
  quoteText.textContent = quote.text;
  complete();
  if (quote.Text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
  complete();
}
// Get quotes from API
// Asynchronous fetch request within a try catch statement
async function getQuotes() {
  loading();
  const apiURL = await fetch(
    "https://jacintodesign.github.io/quotes-api/data/quotes.json"
  );
  try {
    // const response = await fetch (apiURL);
    apiQuotes = await apiURL.json();
    console.log(apiQuotes);
    newQuotes();
  } catch (error) {}
}

// Tweet Quote
function tweetQuote(){
    const twitterUrl =`https://twitter.com/intent/tweet?text=${quoteText.textContent} ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}
// Event Listeners
newQuoteBtn.addEventListener('click', newQuotes);
twitterBtn.addEventListener('click', tweetQuote);
// on load
getQuotes();


// ==================Use Local array===========
// function newQuotes() {
//     // Pick a random quote from apiQuotes Array
//     const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
//     console.log(quote)

// }
// newQuotes()
// May You Always Be Surrounded by Radha Krishna'S Blessings, Which Will Bless Each and Every Day of Your Life..May Radha Rani Enter Your Hearts and Fill Them With Love and Care on Her Apperance Day,Wishing You "Happy Radha Ashtami"