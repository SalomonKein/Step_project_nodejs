let createBtn = document.getElementById('create');



createBtn.onclick = function(event) {
    // event.preventDefault();
    let name = document.getElementById('exampleFormControlInput1').value;
    let value = document.getElementById('exampleFormControlTextarea1').value;
    const notes = {name, value};
//     sendRequest('/api/url', 'GET' )
//   .then(url => window.location = url )
//   .catch(err => console.log(err))
    // sendRequest('POST', '/cardList', notes)
    // .then(data => console.log(data))
    // .catch(err => console.log(err))
    // console.log(notes);
    

}


async function sendRequest(url, method, data = null) {
    try {
      const headers = {}
      let body
  
      if (data) {
        headers['Content-Type'] = 'application/json'
        body = JSON.stringify(data)
      }
  
      const response = await fetch(url, {
        method,
        headers,
        body
      })
      return await response.json()
    } catch (e) {
      console.warn('Error:', e.message)
    }
  }

// async function sendRequest(method, url, body = null) {
//     const headers = {
//       'Content-Type': 'application/json'
//     }
  
//     return fetch(url, {
//       method: method,
//       body: JSON.stringify(body),
//       headers: headers
//     }).then(response => {
//       if (response.ok) {
//         return response.json()
//       }
  
//       return response.json().then(error => {
//         const e = new Error('Что-то пошло не так')
//         e.data = error
//         throw e
//       })
//     })
//   }