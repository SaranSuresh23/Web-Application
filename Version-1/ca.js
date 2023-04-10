const username = document.getElementById("username");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const phoneno = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("confirmpassword");

var a=1;

form.addEventListener('submit' , e=>{
    e.preventDefault();
    checkinput();
});

function checkinput(){
    const usernamevalue = username.value.trim();
    const lastnamevalue = lastname.value.trim();
    const emailvalue = email.value.trim();
    const phonevalue = phoneno.value.trim();
    const passwordvalue = password.value.trim();
    const cpasswordvalue = cpassword.value.trim();

    var array = JSON.parse(localStorage.getItem("userData"));

    if(usernamevalue === ''){
        setError(username, 'Username cannot be blank');
    }

    else if(!namecheck(username)){
        setError(username,'Username should contain characters only');
    }
    
    else{
        setSuccess(username);
    }

    if(lastnamevalue === ''){
        setError(lastname, 'Lastname cannot be blank');
    }

    else if(!namecheck(lastname)){
        setError(lastname,'Lastname should contain characters only');
    }
    
    else{
        setSuccess(lastname);
    }

    
    if(emailvalue === ''){
        setError(email, 'Email cannot be blank');
    }
    else{
        setSuccess(email);
    }
    

    if(passwordvalue === ''){
        setError(password, 'Password cannot be blank');
    }
    else if(!passwordcheck(password))
    {
        setError(password, 'Password should contain uppercase,lowercase,number and special character');
    }
    else{
        setSuccess(password);
    }
    

    if(cpasswordvalue === ''){
        setError(cpassword, 'Password cannot be blank');
    }
    else if(passwordvalue !== cpasswordvalue)
    {
        setError(cpassword, 'Password does not match');
    }
    else{
        setSuccess(cpassword);
    }
    
    if(phonevalue === ''){
        setError(phoneno, 'Phone number cannot be blank');
    }
    if(phonevalue.length<10 || phonevalue.length> 10){
        setError(phoneno, 'Phone number should contain 10 digits');
    }
    else if(!phonecheck(phoneno)){
        setError(phoneno,'Phone number should contain numbers only');
    }
    else{
        setSuccess(phone);
        if (array == null) {
                        let array = [];
                        let obj = {
                            firstname:usernamevalue,
                            lastname:lastnamevalue,
                            email: emailvalue,
                            password: passwordvalue,
                            cpassword: cpasswordvalue,
                            phone: phonevalue
                        };
                        array.push(obj);
                        localStorage.setItem("userData", JSON.stringify(array));
                        window.location.href = 'login.html'
                        alert("Your account has been successfully created");
                    } else {
                        var n = array.length;
                        for (i = 0; i < n; i++) {
                            if (emailvalue === array[i].email ||  emailvalue === array[i].username) {
                                a = 0;
                                console.log(array[i].email);
                                console.log("1");
                                break
                            }
                        }
                        if (a == 1) {

                            let obj = {
                            firstname:usernamevalue,
                            lastname:lastnamevalue,
                            email: emailvalue,
                            password: passwordvalue,
                            cpassword: cpasswordvalue,
                            phone: phonevalue
                            };
                            array.push(obj)
                           
                            localStorage.setItem("userData", JSON.stringify(array));
                            alert("Your account has been successfully created");
                            console.log(array);
                            // window.location.assign("Front Webpage.html");
                        }
                        else {
                            alert("Email Id already exist");
                            console.log(array);
                            // window.location.assign("Front Webpage.html");
                        }
     
    }
}
}


    
    function setError(input, message){
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        small.innerText = message;
    }

    function setSuccess(input){
        const formControl = input.parentElement;
        formControl.className = 'form-control success';

    }

    function namecheck(){
        var namvalue=username.value.trim();
        var count5=0,count6=0;
        for( i=0;i<namvalue.length;i++){
            const nam=namvalue.charCodeAt(i);
            if(nam>=65 && nam<=90)
            {
                count5++;
            }
            else if(nam>=97 && nam<=122)
            {
                count6++;
            }
        }
        if(count5>0 || count6>0)
        {
            return true;
        }
        else {
            return false;
        }
    }
   
    function passwordcheck(){
        const passvalue=password.value.trim();
        var count=0,count1=0,count2=0,count3=0;
        for(i=0;i<passvalue.length;i++){
            const check=passvalue.charCodeAt(i);
            if(check>=65 && check<=90)
            {
                count++;
            }
            else if(check>=97 && check<=122)
            {
                count1++;
            }
            else if(check>=48 && check<=57) {
                count2++;
            }
            else if((check>=32 && check<=47) || (check>=58 && check<=64) || (check>=91 && check<=96) || (check>=123 && check<=126))
            {
                count3++;
            }
        }
        if(count>0 && count1>0 && count2>0 && count3>0)
        {
            return true;
        }
        else {
            return false;
        }
    }
    function phonecheck(){
        var phonevalue=phone.value.trim();
        var count4=0;
        for( i=0;i<phonevalue.length;i++)
{
    const first=phonevalue.charCodeAt(i);
    if(first>=48 && first<=57)
    {
        count4++;
    }
}
if(count4==10)
{
    return true;
}
else {
    return false;
}
    }

 document.querySelector('#profile').addEventListener('click',goToLogin)

function goToLogin(){
    window.location.href = 'login.html'
}