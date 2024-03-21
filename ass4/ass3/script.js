function saveData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const Password2 = document.getElementById('Password2').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return false;
    }

    // Save data to localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    
    href = 'ass3/donecreatingacc.html';

    return false; // Prevent form submission
}
