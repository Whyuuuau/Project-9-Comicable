var databaseRef = firebase.database().ref('Users');

document.getElementById('submitForm').addEventListener('submit', function(event) {
    event.preventDefault();

    if (!email || !username || !password) {
        alert('Please fill in all the required fields.');
        return;
    }

    databaseRef.once('value').then(function(snapshot) {
        var data = snapshot.val();
        var emailExists = false;

        // Iterate through the users in the database
        for (var key in users) {
            if (users.hasOwnProperty(key)) {
                if (data.email === email) {
                    emailExists = true;
                    break;
                }
            }
        }

        if (emailExists) {
            alert('Email exists.');
        } else {
            var confirmed = confirm('Are you sure the data is correct?');

            if (confirmed) {
                lanjut();
            }
        }
    });
});

function lanjut() {
    if (isPanjang == false && isPendek == false && iskKecil == true && iskBesar == true && iskAngka == true) {
        save_user();
    }
}

function save_user() {
    let pass = document.getElementById("pass").value;
    let email = sessionStorage.getItem("email");

    var uid = firebase.database().ref().child('Users').push().key;

    var data = {
        email: email,
        pass: pass
    }

    var updates = {};
    updates['/User/' + uid] = data;
    firebase.database().ref().update(updates);
    window.location.href = "/web/unauth/login.html";
}