document.addEventListener("DOMContentLoaded", () => {

  const button = document.querySelector("button");
  const quote = document.querySelector(".quote");
  const auth = document.querySelector(".auth");

  async function resetQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
      quote.textContent = `"${data.content}"`;
      auth.textContent = `-${data.author}`;
    } else {
      quote.textContent = "An error occured";
      console.log(data);
    }
  }
  button.addEventListener("click", resetQuote);
  resetQuote();
});