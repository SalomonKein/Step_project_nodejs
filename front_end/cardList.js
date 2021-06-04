let card = document.getElementById("card");
let link = document.querySelectorAll(".note");

card.onclick = function (event) {
  if (![...link].includes(event.target)) {
    return;
  }

  let id = event.target.id;
  sendRequest("/cardlist", "POST", {id})
    .then((data) => (window.location = data))
    .catch((err) => console.log(err));
};

async function sendRequest(url, method, data = null) {
  try {
    const headers = {};
    let body;

    if (data) {
      (headers["Content-Type"] = "application/json"),
        (body = JSON.stringify(data));
    }
    const response = await fetch(url, {
      method,
      headers,
      body,
    });
    return await response.json();
  } catch (e) {
    console.warn("Error:", e.message);
  }
}
