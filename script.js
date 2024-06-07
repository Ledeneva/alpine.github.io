
emailjs.init({
  publicKey: "596I7AbPEbmzA5OgD",
});

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // these IDs from the previous steps  
      emailjs.sendForm('service_x3sx4sk', 'template_6oul8tt', this).then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
        },
        function (err) {
          console.log('FAILED...', err);
        },
      );
  });
}