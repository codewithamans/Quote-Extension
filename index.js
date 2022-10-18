let getQuote = async () => {
  let res = await fetch("https://api.quotable.io/random");
  let data = await res.json();
  let quote = document.getElementById("quote");
  quote.innerHTML = data.content;
  console.log(quote);
};

window.addEventListener("load", () => {
  getQuote();
});
