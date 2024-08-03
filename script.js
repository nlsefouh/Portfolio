document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Bedankt voor uw bericht, ' + document.getElementById('name').value + '!');
    this.reset();
});
