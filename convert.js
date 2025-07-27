const amountField = document.querySelector("#amount");
const fromCurrency = document.querySelector("#fromCurrency");
const toCurrency = document.querySelector("#toCurrency");
const result = document.querySelector("#result");
const convertBtn = document.querySelector("#convertBtn");

const currencyMap = {
  
  "USD": "United States - USD",
  "AED": "United Arab Emirates - AED",
  "AFN": "Afghanistan - AFN",
  "ALL": "Albania - ALL",
  "AMD": "Armenia - AMD",
  "ANG": "Netherlands Antillean Guilder - ANG",
  "AOA": "Angola - AOA",
  "ARS": "Argentina - ARS",
  "AUD": "Australia - AUD",
  "AWG": "Aruba - AWG",
  "AZN": "Azerbaijan - AZN",
  "BAM": "Bosnia and Herzegovina - BAM",
  "BBD": "Barbados - BBD",
  "BDT": "Bangladesh - BDT",
  "BGN": "Bulgaria - BGN",
  "BHD": "Bahrain - BHD",
  "BIF": "Burundi - BIF",
  "BMD": "Bermuda - BMD",
  "BND": "Brunei - BND",
  "BOB": "Bolivia - BOB",
  "BRL": "Brazil - BRL",
  "BSD": "Bahamas - BSD",
  "BTN": "Bhutan - BTN",
  "BWP": "Botswana - BWP",
  "BYN": "Belarus - BYN",
  "BZD": "Belize - BZD",
  "CAD": "Canada - CAD",
  "CDF": "Democratic Republic of Congo - CDF",
  "CHF": "Switzerland - CHF",
  "CLP": "Chile - CLP",
  "CNY": "China - CNY",
  "COP": "Colombia - COP",
  "CRC": "Costa Rica - CRC",
  "CUP": "Cuba - CUP",
  "CVE": "Cape Verde - CVE",
  "CZK": "Czech Republic - CZK",
  "DJF": "Djibouti - DJF",
  "DKK": "Denmark - DKK",
  "DOP": "Dominican Republic - DOP",
  "DZD": "Algeria - DZD",
  "EGP": "Egypt - EGP",
  "ERN": "Eritrea - ERN",
  "ETB": "Ethiopia - ETB",
  "EUR": "European Union - EUR",
  "FJD": "Fiji - FJD",
  "FKP": "Falkland Islands - FKP",
  "FOK": "Faroe Islands - FOK",
  "GBP": "United Kingdom - GBP",
  "GEL": "Georgia - GEL",
  "GGP": "Guernsey - GGP",
  "GHS": "Ghana - GHS",
  "GIP": "Gibraltar - GIP",
  "GMD": "Gambia - GMD",
  "GNF": "Guinea - GNF",
  "GTQ": "Guatemala - GTQ",
  "GYD": "Guyana - GYD",
  "HKD": "Hong Kong - HKD",
  "HNL": "Honduras - HNL",
  "HRK": "Croatia - HRK",
  "HTG": "Haiti - HTG",
  "HUF": "Hungary - HUF",
  "IDR": "Indonesia - IDR",
  "ILS": "Israel - ILS",
  "IMP": "Isle of Man - IMP",
  "INR": "India - INR",
  "IQD": "Iraq - IQD",
  "IRR": "Iran - IRR",
  "ISK": "Iceland - ISK",
  "JEP": "Jersey - JEP",
  "JMD": "Jamaica - JMD",
  "JOD": "Jordan - JOD",
  "JPY": "Japan - JPY",
  "KES": "Kenya - KES",
  "KGS": "Kyrgyzstan - KGS",
  "KHR": "Cambodia - KHR",
  "KID": "Kiribati - KID",
  "KMF": "Comoros - KMF",
  "KRW": "South Korea - KRW",
  "KWD": "Kuwait - KWD",
  "KYD": "Cayman Islands - KYD",
  "KZT": "Kazakhstan - KZT",
  "LAK": "Laos - LAK",
  "LBP": "Lebanon - LBP",
  "LKR": "Sri Lanka - LKR",
  "LRD": "Liberia - LRD",
  "LSL": "Lesotho - LSL",
  "LYD": "Libya - LYD",
  "MAD": "Morocco - MAD",
  "MDL": "Moldova - MDL",
  "MGA": "Madagascar - MGA",
  "MKD": "North Macedonia - MKD",
  "MMK": "Myanmar - MMK",
  "MNT": "Mongolia - MNT",
  "MOP": "Macau - MOP",
  "MRU": "Mauritania - MRU",
  "MUR": "Mauritius - MUR",
  "MVR": "Maldives - MVR",
  "MWK": "Malawi - MWK",
  "MXN": "Mexico - MXN",
  "MYR": "Malaysia - MYR",
  "MZN": "Mozambique - MZN",
  "NAD": "Namibia - NAD",
  "NGN": "Nigeria - NGN",
  "NIO": "Nicaragua - NIO",
  "NOK": "Norway - NOK",
  "NPR": "Nepal - NPR",
  "NZD": "New Zealand - NZD",
  "OMR": "Oman - OMR",
  "PAB": "Panama - PAB",
  "PEN": "Peru - PEN",
  "PGK": "Papua New Guinea - PGK",
  "PHP": "Philippines - PHP",
  "PKR": "Pakistan - PKR",
  "PLN": "Poland - PLN",
  "PYG": "Paraguay - PYG",
  "QAR": "Qatar - QAR",
  "RON": "Romania - RON",
  "RSD": "Serbia - RSD",
  "RUB": "Russia - RUB",
  "RWF": "Rwanda - RWF",
  "SAR": "Saudi Arabia - SAR",
  "SBD": "Solomon Islands - SBD",
  "SCR": "Seychelles - SCR",
  "SDG": "Sudan - SDG",
  "SEK": "Sweden - SEK",
  "SGD": "Singapore - SGD",
  "SHP": "Saint Helena - SHP",
  "SLE": "Sierra Leone - SLE",
  "SLL": "Sierra Leone - SLL",
  "SOS": "Somalia - SOS",
  "SRD": "Suriname - SRD",
  "SSP": "South Sudan - SSP",
  "STN": "São Tomé and Príncipe - STN",
  "SYP": "Syria - SYP",
  "SZL": "Eswatini - SZL",
  "THB": "Thailand - THB",
  "TJS": "Tajikistan - TJS",
  "TMT": "Turkmenistan - TMT",
  "TND": "Tunisia - TND",
  "TOP": "Tonga - TOP",
  "TRY": "Turkey - TRY",
  "TTD": "Trinidad and Tobago - TTD",
  "TVD": "Tuvalu - TVD",
  "TWD": "Taiwan - TWD",
  "TZS": "Tanzania - TZS",
  "UAH": "Ukraine - UAH",
  "UGX": "Uganda - UGX",
  "UYU": "Uruguay - UYU",
  "UZS": "Uzbekistan - UZS",
  "VES": "Venezuela - VES",
  "VND": "Vietnam - VND",
  "VUV": "Vanuatu - VUV",
  "WST": "Samoa - WST",
  "XAF": "Central Africa (CEMAC) - XAF",
  "XCD": "Eastern Caribbean - XCD",
  "XCG": "Caribbean Gold - XCG",
  "XDR": "IMF Special Drawing Rights - XDR",
  "XOF": "West Africa (UEMOA) - XOF",
  "XPF": "French Pacific Territories - XPF",
  "YER": "Yemen - YER",
  "ZAR": "South Africa - ZAR",
  "ZMW": "Zambia - ZMW",
  "ZWL": "Zimbabwe - ZWL"

};

function loadCurrencies() {
  fetch("https://api.exchangerate-api.com/v4/latest/USD")
    .then(res => res.json())
    .then(data => {
      const rates = data.rates;
      for (let currency in rates) {
        const option1 = document.createElement("option");
        const option2 = document.createElement("option");

        const label = currencyMap[currency] || currency;

        option1.value = option2.value = currency;
        option1.textContent = option2.textContent = label;

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



