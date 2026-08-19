/* === NAVBAR INSERTION === */
const navbarElement = document.getElementById('navbar-placeholder');
if (navbarElement) {
  fetch('/assets/sections/navbar.html')
    .then(response => response.text())
    .then(data => {
      navbarElement.innerHTML = data;
    })
    .catch(error => {
      console.error('Failed to load navbar:', error);
  });
}

/* === FOOTER INSERTION === */

const footerElement = document.getElementById('footer-placeholder');
if (footerElement) {
  fetch('/assets/sections/footer.html')
    .then(response => response.text())
    .then(data => {
        // Add footer
        footerElement.innerHTML = data;
        // In case we are already on the updates page, remove footer-div-updates
        const divUpdates = document.getElementById("footer-div-updates");
        if (divUpdates && window.location.href.includes("/updates")) {
            divUpdates.outerHTML = "";
        }
    })
    .catch(error => {
        console.error('Failed to load footer:', error);
    });
}


/* === QUALTRICS-IFRAME AND RESIZING === */

// Auto-resize Qualtrics iframe
const iframeElement = document.getElementById('qualtrics-iframe');
if (iframeElement) {
  // Also listen for messages from Qualtrics (better method)
  window.addEventListener('message', function(event) {
      if (event.origin.includes('qualtrics.com') && event?.data?.height) {
      iframeElement.style.height = event.data.height + 'px';
      }
  });
}
