function signup(){
     var title = document.getElementById('title');
     var input = document.getElementById('name');
     var a = document.getElementById('a');
     title.innerHTML ="SIGN UP";;
     btn.innerHTML = "sign up";
     input.style.display = "block";
     a.innerHTML = "Already have account ?";
     var log=document.getElementById('log');
     log.style.display = "block";
     var sig=document.getElementById('sig');
     sig.style.display = "none";
}
function login(){
    var title = document.getElementById('title');
    var input = document.getElementById('name');
    var a = document.getElementById('a');
    title.innerHTML ="LOGIN";
    btn.innerHTML = "Login";
    input.style.display = "none";
    a.innerHTML = "forgot your password ?";
    var log=document.getElementById('log');
    log.style.display = "none";
    var sig=document.getElementById('sig');
    sig.style.display = "block";   
}

// ========>  validation email

function validate(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if ( email == "tesla@gmail.com" && password == "tesla1234"){
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Login successfully',
        showConfirmButton: false,
        timer: 1500
      })
    window.location = "index2.html"; // Redirecting to other page.
    return false;
    }
    else{
        if ( email == "" && password == ""){
            Swal.fire({
                icon: 'info',
                title: 'Oops...',
                text: 'The information is empty',
                footer: '<a href="">Tesla Ma </a>'
              })
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid email or password',
                footer: '<a href="">Tesla Ma </a>'
              })
        }
    }
}

// ========> Sending email

function Sending(){
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Send and them successfuly',
        showConfirmButton: false,
        timer: 1500
      })
}

