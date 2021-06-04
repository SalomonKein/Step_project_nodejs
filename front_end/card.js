let edit = document.querySelector(".edit");
let myDelete = document.querySelector(".delete");

let id = document.querySelector(".note").id;

myDelete.onclick = function (event) {
  event.preventDefault();
  sendRequest("/card", "DELETE", {id})
    .then((data) => (window.location = data))
    .catch((err) => console.log(err));
};

edit.onclick = function (event) {
  event.preventDefault();
  let myData = {
    id: id,
    title: document.getElementById("exampleFormControlInput1").value,
    content: document.getElementById("exampleFormControlTextarea1").value,
  };

  sendRequest("/card", "PUT", myData)
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
    console.log(headers);
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
