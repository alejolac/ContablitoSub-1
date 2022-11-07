let productsArray = {};
const url = "js/db.json";
const URL = "https://63680c58d1d09a8fa61fe503.mockapi.io/";

async function getJSON(url) {
  response = await fetch(url);
  result = await response.json();
  return result;
}

document.addEventListener("DOMContentLoaded", () => {
  getJSON(url)
    .then((result) => {
      actualResult = result;
      return actualResult;
    })
    .then((actualResult) => {
      if (localStorage.getItem("productsArray") == undefined) {
        localStorage.setItem("productsArray", JSON.stringify(actualResult));
      }
    });
  productsArray = JSON.parse(localStorage.getItem("productsArray"));
});

async function getDATA(endpoint, id = "") {
  const response = await fetch(URL + endpoint + "/" + id);
  const data = response.json();

  return data;
}

async function postDATA(endpoint, object) {
  const response = await fetch(URL + "/" + endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(object),
  });
}

async function putDATA(endpoint, id, object) {
  const response = await fetch(URL + endpoint + "/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(object),
  });
}
