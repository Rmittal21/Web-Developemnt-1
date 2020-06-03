// technique to get Last Modified date found at https://www.w3schools.com/jsref/prop_doc_lastmodified.asp
// date and time the current document was last modified
var lastMod = new Date(document.lastModified);
var lastModDate = lastMod.getDate();
var lastModMonth = lastMod.getMonth();
var lastModYear = lastMod.getFullYear();
var modification = "Last Updated: " + lastModMonth + "/" + lastModDate + "/" + lastModYear;

var author = "| Designed by Ian Sifton |";

// current date and time
var curr =  new Date();
var currDate = curr.getDate();
var currMonth = curr.getMonth();
var currYear = curr.getFullYear();
var today = "Current Date: " + currMonth + "/" + currDate + "/" + currYear;

var foot = [modification, author, today];

document.getElementById("lastMod").innerHTML = foot[0];
document.getElementById("author").innerHTML = foot[1];
document.getElementById("currDate").innerHTML = foot[2];


// technique to use Javascript for form validation https://www.w3schools.com/js/js_validation.asp
// Form Validation
function validateForm() {
    var a = document.forms["myForm"]["firstName"].value;
    if (a == "") {
        alert("First name must be filled out");
        return false;
    }

    var b = document.forms["myForm"]["lastName"].value;
    if (b == "") {
        alert("Last name must be filled out");
        return false;
    }

    var c = document.forms["myForm"]["emailAddress"].value;
    if (c == "") {
        alert("Email field must be filled out");
        return false;
    }

    var d = document.forms["myForm"]["subject"].value;
    if (d == "--") {
      alert("Please select a subject heading");
      return false;
   }
    var e = document.forms["myForm"]["message"].value;
    if (e == "") {
        alert("Please include a message for your email.");
        return false;
    }
}

// technique to enable/disable video autoplay upon page load https://www.w3schools.com/TAgs/av_prop_autoplay.asp
var vid = document.getElementById("videoFile");
vid.autoplay = false;
vid.load();
