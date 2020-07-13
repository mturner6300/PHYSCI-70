function getUserName() {
    var nameField = document.getElementById('answer').value;

    if (nameField.length < 3) {
        alert('Username must contain at least 3 characters');
    } else {
        alert(nameField);
    }
};