let createBtn = document.getElementById("create");

createBtn.onclick = function (event) {
  let name = document.getElementById("exampleFormControlInput1").value;
  let value = document.getElementById("exampleFormControlTextarea1").value;
  const notes = {name, value};
};

async function sendRequest(url, method, data = null) {
  try {
    const headers = {};
    let body;

    if (data) {
      headers["Content-Type"] = "application/json";
      body = JSON.stringify(data);
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
