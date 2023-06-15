var dbRef = firebase.database().ref("Users");

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("mymail").value;
    let pass = document.getElementById("mypass").value;
    console.log(uname);
    console.log(pass);

    login(uname, pass);
});

function login(email, pass) {
    dbRef.orderByChild('email').equalTo(email).once('value', function(snapshot) {
        console.log("masuk fungsi login");
        let getData = false;
        snapshot.forEach(function(dataSnapshot) {
            let data = dataSnapshot.val();
            if (data.password == pass) {
                getData = true;

                let getEmail = data.email;

                sessionStorage.setItem('username', getEmail);
                sessionStorage.setItem('isLoggedIn', 'true');
                alert('Login successfully!');
                // location.assign("index.html");
            }
        });

        if (!getData) {
            console.log("gagal login");
            alert("Username or Password does not match");
        }
    });
};