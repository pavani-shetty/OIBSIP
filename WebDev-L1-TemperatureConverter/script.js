const ABSOLUTE_ZERO_C = -273.15;

const form = document.getElementById("converter-form");
const temperatureInput = document.getElementById("temperature");
const inputUnit = document.getElementById("input-unit");
const errorEl = document.getElementById("error");
const resultsEl = document.getElementById("results");
const celsiusResult = document.getElementById("celsius-result");
const fahrenheitResult = document.getElementById("fahrenheit-result");
const kelvinResult = document.getElementById("kelvin-result");

function toCelsius(value, unit) {
  if (unit === "celsius") return value;
  if (unit === "fahrenheit") return ((value - 32) * 5) / 9;
  return value - 273.15;
}

function fromCelsius(celsius) {
  return {
    celsius,
    fahrenheit: (celsius * 9) / 5 + 32,
    kelvin: celsius + 273.15,
  };
}

function showError(message) {
  errorEl.textContent = message;
  errorEl.hidden = false;
  resultsEl.hidden = true;
}

function clearError() {
  errorEl.hidden = true;
  errorEl.textContent = "";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearError();

  const rawValue = temperatureInput.value.trim();

  if (rawValue === "") {
    showError("Please enter a temperature value.");
    return;
  }

  if (Number.isNaN(Number(rawValue))) {
    showError("Please enter a valid numeric value.");
    return;
  }

  const value = Number(rawValue);
  const celsius = toCelsius(value, inputUnit.value);

  if (celsius < ABSOLUTE_ZERO_C) {
    showError("Temperature cannot be below absolute zero (−273.15°C).");
    return;
  }

  const converted = fromCelsius(celsius);

  celsiusResult.textContent = `Celsius: ${converted.celsius.toFixed(2)} °C`;
  fahrenheitResult.textContent = `Fahrenheit: ${converted.fahrenheit.toFixed(2)} °F`;
  kelvinResult.textContent = `Kelvin: ${converted.kelvin.toFixed(2)} K`;

  resultsEl.hidden = false;
});
