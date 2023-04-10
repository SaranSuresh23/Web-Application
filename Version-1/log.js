const emailid = document.getElementById("email");
const password = document.getElementById("password");
// const loginForm = document.getElementById("login-form");
// const loginButton = document.getElementById("login-form-submit");
// const loginErrorMsg = document.getElementById("login-error-msg");

form.addEventListener("submit", e => {
    e.preventDefault();
    checkinput();
});
    function checkinput(){
    const emailvalue= emailid.value.trim();
    const passwordvalue = password.value.trim();
    const valid = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      var array = JSON.parse(localStorage.getItem("userData")); // Stored SignUp Details
      var key = 0;
   
      var n = array.length;

    if (emailvalue === "") {
      setError(emailid,"E-mail Id cannot be blank")
        // alert("You have successfully logged in.");
        // location.reload();
    } else {
        setSuccess(emailid,"")
          }   
        if(passwordvalue==""){
          setError(password,"Password cannot be blank");
        }
        else{
          setSuccess(password,"");

    array.forEach(function(el){
        if(el.email == emailid && el.password == password){
            flag = true
            localStorage.setItem('flag',true)
            let logged = {
                firstName: el.username,
                surname: el.lastname
               }
               console.log(logged)
               localStorage.setItem('loggedPerson',JSON.stringify(logged))
               window.location.href = 'index.html'
        }
           })


        for (var i = 0; i < n; i++) {
                  if (emailvalue == array[i].email) {
  
                      key = 1;
                      if (passwordvalue == array[i].password) {
                          setSuccess(password, "");
                          alert("Login Successful");
                          window.location.assign("index.html");
                          break;
                      } else {
                          setError(password, "Password Incorrect");
                      }
                    }
                   else if (emailvalue == array[i].email) {
                        key = 1;
                        if (passwordvalue == array[i].password) {
                            alert("Login Successful");
                            window.location.assign("index.html");
                            
                            break;
                        } else {
                            setError(password, "Passsword Incorrect");
                        }
                  } 
                  }
                  if (key == 0) {
                    setError(emailid, "Invalid mail id")
                }
                else {
                    setSuccess(emailid, "")
                }
              }
            }
document.querySelector('#profile').addEventListener('click',goToLogin)

function goToLogin(){
    if(flag){
        window.location.href = 'account.html'
    }else{
        window.location.href = 'login.html'
    }
   
}
          
        function setError(input, message) {
          const formhead = input.parentElement;
          const paragraph = formhead.querySelector("small");
          formhead.className = "form-control error";
          paragraph.innerText = message;
      }
  
      function setSuccess(input, message) {
          const formhead = input.parentElement;
          const paragraph = formhead.querySelector("small");
          formhead.className = "form-control success"; 
          paragraph.innerText = message;
      }
    