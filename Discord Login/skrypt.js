chrome.runtime.onMessage.addListener(function(request) {
    if(request == "null") return alert("U have to input token.")
    setInterval(() => {
        document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${request}"`
      }, 50);
      setTimeout(() => {
        location.reload();
      }, 2500);
})