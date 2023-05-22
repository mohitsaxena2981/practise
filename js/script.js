// document.getElementById("firstname-error").innerHTML = "Please enter a valid name";
// document.getElementById("firstname-error").style.visibility = 'hidden';

// document.getElementById("lastname-error").innerHTML = "Please enter a valid name";
// document.getElementById("lastname-error").style.visibility = 'hidden';


// document.getElementById("email-error").innerHTML = "Please enter a valid email";
// document.getElementById("email-error").style.visibility = 'hidden';

// document.getElementById("phone-error").innerHTML = "Please enter a valid Phone";
// document.getElementById("phone-error").style.visibility = 'hidden';

// document.getElementById("match-error").innerHTML = "Password does not match";
// document.getElementById("match-error").style.visibility = 'hidden';

// document.getElementById("password-error").innerHTML = "Password length should be greater than 8";
// document.getElementById("password-error").style.visibility = 'hidden';

// document.getElementById("gender-error").innerHTML = "Please select your gender";
// document.getElementById("gender-error").style.visibility='hidden';

// document.getElementById("answer-error").innerHTML = "Please give your answer";
// document.getElementById("answer-error").style.visibility='hidden';

// document.getElementById("question-error").innerHTML = "Please select a security question";
// document.getElementById("question-error").style.visibility='hidden';

let inputgender;
let parsedObject;
let retrievedObject;
let myJSON;
const Validation = () => {

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
  if(!nameRegex.test(lastname)|| lastname==='')
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
    

  // for password validation

  const password=document.getElementById('password').value;
  if(password==='' || password.length<=8)
  {
    document.getElementById("password-error").style.visibility = 'visible';
    return 1;
  }
  else
  {
    document.getElementById("password-error").style.visibility = 'hidden';
  }

  // for confirm password validation
  var passValue = document.getElementById("password").value;
  var confpassValue = document.getElementById("confirmPassword").value;
  if ((password.length>8) && (passValue !== confpassValue)) {
    document.getElementById("match-error").style.visibility = 'visible';
    return 1;
  }
  else
  {
    document.getElementById("match-error").style.visibility = 'hidden';
  }
  // for question validation

  const question=document.getElementById('question').value;
  if(question==='')
  {
    document.getElementById('question-error').style.visibility='visible';
    return 1;
  }
  else
  {
    document.getElementById('question-error').style.visibility='hidden';
  }
    
  // for answer validation

  const answer=document.getElementById('inputAnswer').value;
  if(answer==='')
  {
    document.getElementById('answer-error').style.visibility='visible';
    return 1;

  }
  else
  {
    document.getElementById('answer-error').style.visibility='hidden';
  }
  // for gender validation

  const male=document.getElementById('male');
  const female=document.getElementById('female');
  // console.log(male.checked);
  if(male.checked==true)
  {
    document.getElementById("gender-error").style.visibility="hidden";
    inputgender='male';
  }
  else if(female.checked==true)
  {
    document.getElementById("gender-error").style.visibility="hidden";
    inputgender='female';
  }
  else
  {
    document.getElementById("gender-error").style.visibility='visible';
    // console.log('not checked')
    return 1;
  } 
}
  
const validateForm=(evt)=> {
    res = Validation();
    // console.log(res);
    if (res) {
      // window.alert(res);
      return false;
    }

    // retrieving data

    const myObj = {
       fname: document.getElementById('firstName').value,
       lname: document.getElementById('lastName').value,
       email: document.getElementById('email').value,
       phone: document.getElementById('inputPhone').value,
       gender: inputgender,
       password: document.getElementById('password').value,
       question: document.getElementById('question').value,
       answer: document.getElementById('inputAnswer').value

      };

      myJSON = JSON.stringify(myObj);
      localStorage.setItem("storedData", myJSON);
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

    // retrieving data

    // READ STRING FROM LOCAL STORAGE
    retrievedObject = localStorage.getItem("storedData");
    // CONVERT STRING TO REGULAR JS OBJECT
    parsedObject = JSON.parse(retrievedObject);
    // console.log(parsedObject);
    // console.log(parsedObject.fname);
    var tbody=document.getElementById('tbody');
    // var trow=document.createElement("tr");
    // for (var i= 0; i< tabledata.length; i++) {
    //   var element=table[i];
    //   for (var key in element) {
    //       var td=document.createElement("td");
    //       td.appendChild(document.createTextNode(element[key]));
    //       trow.appendChild(td);
    //   }
    //   tbody.innerHTML=trow;
    // }
    // var trow=document.createElement('tr');
    var tdata=document.createElement('td');
    // tdata.appendChild(parsedObject.fname);
    // trow.appendChild(tdata);
    // tbody.innerHTML+=trow;
    var getfname=tdata.innerHTML=parsedObject.fname;
    tbody.innerHTML+=getfname;
    window.onload=()=>{
      var getfname=tdata.innerHTML=parsedObject.fname;
      tbody.innerHTML+=getfname;
    }
    // tbody.innerHTML+='hiiiiiiiiiii';
    return false;
  
}

// READ STRING FROM LOCAL STORAGE
retrievedObject = localStorage.getItem("storedData");

const names=['fname','lname','phone','email','gender','password','question','answer'];
// console.log(names[0]);
if(retrievedObject!=null)
{
  // READ STRING FROM LOCAL STORAGE
  retrievedObject = localStorage.getItem("storedData");
  // console.log(retrievedObject);
  // CONVERT STRING TO REGULAR JS OBJECT
  parsedObject = JSON.parse(retrievedObject);
  // console.log(parsedObject.fname);
  let keys=Object.values(parsedObject);
  console.log(keys);
  document.getElementById('td1').innerHTML=keys[0];
  document.getElementById('td2').innerHTML=keys[1];
  document.getElementById('td3').innerHTML=keys[2];
  document.getElementById('td4').innerHTML=keys[3];
  document.getElementById('td5').innerHTML=keys[4];
  document.getElementById('td6').innerHTML=keys[5];
  document.getElementById('td7').innerHTML=keys[6];
  document.getElementById('td8').innerHTML=keys[7];
  console.log(parsedObject);
  
  // console.log('hii');
}

