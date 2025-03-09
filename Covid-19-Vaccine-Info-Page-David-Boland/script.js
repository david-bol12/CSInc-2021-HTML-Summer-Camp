var name = '';
var birthdate = '';
var gender = '';
var health_conditions = false;
var health_worker = false;
var birthyear = '';
var currentdate = new Date();
var currentyear = currentdate.getFullYear
var birthyear = 0;
var vaccinemonth = '';
var vaccinetype = '';

function hey() {document.getElementById('resultspara').innerHTML = 'hey';}
hey();

function getInputs() {
  name = document.getElementById("namebox").value;
  birthdate = new Date(document.getElementById("dobbox").value);
  birthyear = birthdate.getFullYear();
  gender = document.getElementById('gender').value;
  if (document.querySelector('#healthconditions:checked')) {
    health_conditions = true; 
  }
  if (document.querySelector('#healthworker:checked')) {
    health_worker = true; 
  }
}
function showInvalidInput(id) {
  document.getElementById(id).style.display = "block";
}
function hideInvalidInput(id) {
  document.getElementById(id).style.display = "none";
}
function getResults() {
  getInputs();
  if (name == '') {
    showInvalidInput('namelabel')
  }
  if (1880 > parseInt(birthyear)) {
    alert(birthyear);
    showInvalidInput('datelabel');
  }
  if (gender == 'No Input') {
    showInvalidInput('genderlabel')
  }
  else {
    
    var age = parseInt(currentyear) - parseInt(birthyear);
    alert(age);
    if (age > 50) {
      vaccinemonth = 'Now'
      if (gender == 'Male') {
        vaccinetype = 'AstraZeneca'
      } else {
        vaccinetype = 'Pfizer'
      }
    } else if (age > 40) {
      if (currentdate.getMonth >= 5) {
        vaccinemonth = 'Now'
      } else {vaccinemonth = 'June'} }
      else if (age > 30) {
        if (currentdate.getMonth >= 6) {
          vaccinemonth = 'Now'
        } else {vaccinemonth = 'July'}
    } else if (age > 20) {
        if (currentdate.getMonth >= 7) {
          vaccinemonth = 'Now'
      } else {vaccinemonth = 'August'}
    } else {
      if (currentdate.getMonth >= 8) {
        vaccinemonth = 'Now'
      } else {vaccinemonth = 'September'}
    if (age > 35 && age < 50)
      if(gender == 'male') {
        vaccinetype = 'AstraZeneca'
      }
    }
    document.getElementById("formdiv").style.display = 'none';
    document.getElementById("resultsdiv").style.display = 'block';
    document.getElementById("timeresult").innerHTML = vaccinemonth;
  }
}
