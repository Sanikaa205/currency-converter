const amountField = document.querySelector("#amount");
const fromCurrency = document.querySelector("#fromCurrency");
const toCurrency = document.querySelector("#toCurrency");
const result = document.querySelector("#result");
const convertBtn = document.querySelector("#convertBtn");

function loadCurrencies() {
  fetch("https://api.exchangerate-api.com/v4/latest/USD")
    .then(res => res.json())
    .then(data => {
      const rates = data.rates;
      for (let currency in rates) {
        const option1 = document.createElement("option");
        const option2 = document.createElement("option");
        option1.value = option2.value = currency;
        option1.textContent = option2.textContent = currency;
        fromCurrency.appendChild(option1);
        toCurrency.appendChild(option2);
      }
      fromCurrency.value = "USD";
      toCurrency.value = "INR";
    });
}

loadCurrencies();

convertBtn.addEventListener("click", () => {
  const amount = parseFloat(amountField.value);
  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount");
    return;
  }

  fetch("https://api.exchangerate-api.com/v4/latest/" + from)
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[to];
      const total = (rate * amount).toFixed(2);
      result.textContent = `${amount} ${from} = ${total} ${to}`;
    })
    .catch(err => {
      console.error("Error fetching rate:", err);
      result.textContent = "Error retrieving data.";
    });
});

function swapCurrencies() {
  const temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
}

window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
});
