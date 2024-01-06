function toggleUserFields() {
    var userType = document.getElementById('userType').value;
    var subjectField = document.getElementById('subjectField');

    if (userType === 'professor') {
        subjectField.style.display = 'block';
    } else {
        subjectField.style.display = 'none';
    }
}

function signup() {
    var userType = document.getElementById('userType').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;

    // Add your signup logic here
    // For demonstration, display the information in an alert
    var message = `User Type: ${userType}\nName: ${name}\nEmail: ${email}`;
    if (userType === 'professor') {
        message += `\nSubject Teaching: ${subject}`;
    }

    alert(message);
}
