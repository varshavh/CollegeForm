document.addEventListener('DOMContentLoaded', function() {
    const details = JSON.parse(localStorage.getItem('admissionDetails'));

    if (details) {
        const detailsDiv = document.getElementById('details');
        detailsDiv.innerHTML = `
            <p><strong>Full Name:</strong> ${details.name}</p>
            <p><strong>Email:</strong> ${details.email}</p>
            <p><strong>Date of Birth:</strong> ${details.dob}</p>
            <p><strong>Gender:</strong> ${details.gender}</p>
            <p><strong>Phone Number:</strong> ${details.phone}</p>
            <p><strong>Address:</strong> ${details.address}</p>
            <p><strong>Qualifications:</strong> ${details.qualifications}</p>
            <p><strong>Additional Comments:</strong> ${details.comments}</p>
        `;
    }
});
