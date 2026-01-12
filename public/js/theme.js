const card = document.querySelector(".weather-card");

if (card) {
  const condition = card.dataset.condition.toLowerCase();
  const body = document.body;

  if (condition.includes("rain")) {
    body.style.background = "linear-gradient(to right, #667db6, #0082c8)";
  } else if (condition.includes("cloud")) {
    body.style.background = "linear-gradient(to right, #bdc3c7, #2c3e50)";
  } else if (condition.includes("clear")) {
    body.style.background = "linear-gradient(to right, #f7971e, #ffd200)";
  } else {
    body.style.background = "linear-gradient(to right, #74ebd5, #acb6e5)";
  }
}
