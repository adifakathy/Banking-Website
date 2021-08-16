document.getElementById('login-submit').addEventListener
    ('click', function () {
        //get user email
        const emailField = document.getElementById('user-email');
        const userEmail = emailField.value;


        //get user Password
        const passField = document.getElementById('user-pass');
        const userPassword = passField.value;
        //console.log(userPassword);
        
        //check email and password
        if (userEmail == 'adifakathy@gmail.com' && userPassword == 'admin') {
            window.location.href = 'banking.html';
        }
        else {
            console.log('Envalid');
        }
    })

    