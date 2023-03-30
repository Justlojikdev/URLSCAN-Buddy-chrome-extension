chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'scanUrl') {
    const headers = {
      'API-Key': '780d8ed7-be26-44b2-9e9e-5ffbf2389411',
      'Content-Type': 'application/json'
    };

    const data = {
      url: request.url,
      visibility: 'public'
    };

    fetch('https://urlscan.io/api/v1/scan/', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => {
      setTimeout(function() {
        sendResponse(json);
      }, 7500); // delay of 5 seconds
    })
    .catch(error => console.error(error));

    return true; // return true to indicate that a response will be sent asynchronously
  }
});
