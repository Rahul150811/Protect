function openForm() {
    // Create a new div element to hold the form
    var formDiv = document.createElement('div');
    formDiv.style.position = 'fixed';
    formDiv.style.top = '50%';
    formDiv.style.left = '50%';
    formDiv.style.transform = 'translate(-50%, -50%)';
    formDiv.style.backgroundColor = '#fff';
    formDiv.style.padding = '40px';
    formDiv.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
    formDiv.style.zIndex = '9999';
    formDiv.style.width = '80%';
    formDiv.style.maxWidth = '600px';
    formDiv.style.height = '80%';
    formDiv.style.maxHeight = '600px';
    
    // Create an iframe element to load the form URL
    var formFrame = document.createElement('iframe');
    formFrame.src = 'form.html';
    formFrame.style.width = '100%';
    formFrame.style.height = '100%';
    formDiv.appendChild(formFrame);
    
    // Create a dark overlay to block the background
    var overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.6)';
    overlay.style.zIndex = '9998';
    
    // Add the form div and overlay to the document
    document.body.appendChild(overlay);
    document.body.appendChild(formDiv);
    
    // When the form is submitted or the popup is closed, remove the form and overlay
    function closeForm() {
      document.body.removeChild(overlay);
      document.body.removeChild(formDiv);
    }
    formFrame.addEventListener('load', function() {
      formFrame.contentWindow.addEventListener('submit', closeForm);
    });
    window.addEventListener('beforeunload', closeForm);
  }