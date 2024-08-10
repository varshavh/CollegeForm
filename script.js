document.getElementById('admissionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form data
    const formData = new FormData(event.target);
    const details = {};
    formData.forEach((value, key) => {
        details[key] = value;
    });

    // Save the details to localStorage
    localStorage.setItem('admissionDetails', JSON.stringify(details));

    // Redirect to the details page
    window.location.href = 'details.html';
});
