document.getElementById("firstname-error").innerHTML = "Please enter a valid name";
document.getElementById("firstname-error").style.visibility = 'hidden';

document.getElementById("lastname-error").innerHTML = "Please enter a valid name";
document.getElementById("lastname-error").style.visibility = 'hidden';


document.getElementById("email-error").innerHTML = "Please enter a valid email";
document.getElementById("email-error").style.visibility = 'hidden';

document.getElementById("phone-error").innerHTML = "Please enter a valid Phone";
document.getElementById("phone-error").style.visibility = 'hidden';

const Validation = () => {
    // for password validation
    var passValue = document.getElementById("password").value;
    var confpassValue = document.getElementById("confirmPassword").value;
    if (passValue !== confpassValue) {
      return "Passwords does not match";
    }
  
    // for mobile validation
    const inputphone = document.getElementById("inputPhone").value;
    const phoneNumberRegex = /^\d{10}$/;
    // console.log(phoneNumberRegex.test(inputphone));
    if (inputphone!=='' && !phoneNumberRegex.test(inputphone)) {
      document.getElementById("phone-error").style.visibility = 'visible';
      return 1;
    }
    
    else
    {
      document.getElementById("phone-error").style.visibility = 'hidden';
    }
    // for name validation
    const firstname=document.getElementById("firstName").value;
    console.log(firstname)
    const lastname=document.getElementById("lastName").value;
    const nameRegex=/^[a-zA-Z\s]+$/;
    if(!nameRegex.test(firstname) || firstname==='')
    {
      
      document.getElementById("firstname-error").style.visibility = 'visible';
      return 1;
    }
    else
    {
      document.getElementById("firstname-error").style.visibility = 'hidden';
    }
    if(!nameRegex.test(lastname))
    {
      document.getElementById("lastname-error").style.visibility = 'visible';
      return 1;
    }
    else
    {
      document.getElementById("lastname-error").style.visibility = 'hidden';
    }

    // for email validation

    const email=document.getElementById('email').value;
    const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(email)|| email==='')
    {
      document.getElementById("email-error").style.visibility='visible';
      return 1;
    }
    else
    {
      document.getElementById("email-error").style.visibility='hidden';
    }

  }
  const validateForm=(evt)=> {
    res = Validation();
    console.log(res);
    if (res) {
      // window.alert(res);
      return false;
    }

    // retrieving data

    const myObj = {
       fname: document.getElementById('firstName').value,
       lname: document.getElementById('lastName').value,
       email: document.getElementById('email').value,
       password: document.getElementById('password').value,
       question: document.getElementById('question').value,
       answer: document.getElementById('inputAnswer').value
      };

      const myJSON = JSON.stringify(myObj);
      localStorage.setItem("testJSON", myJSON);
    // var fname=document.getElementById('firstName').value;
    // var lname=document.getElementById('lastName').value;
    // var email=document.getElementById('email').value;
    // var password=document.getElementById('password').value;
    // var question=document.getElementById('question').value;
    // var answer=document.getElementById('inputAnswer').value;

    // storing data

    // var frontName=localStorage.setItem('fname',fname);
    // var lastName=localStorage.setItem('lname',lname);
    // var emailId=localStorage.setItem('email',email);
    // var inputPassword=localStorage.setItem('password',password);
    // var securityQuestion=localStorage.setItem('question',question);
    // var securityAnswer=localStorage.setItem('Answer',answer);


    alert('Data inserted successfully');
    return true;
  }