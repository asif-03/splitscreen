var storedData = [];

function submitClickHandler() {
  createPerson();
  resetForm();
  displayRecords();
}

// TODO: implement this using javascript class
function createPerson() {
  let obj = {};
  obj.name = document.getElementById("yourname").value;
  obj.age = document.getElementById("age").value;
  obj.contactNo = document.getElementById("phone").value;
  storedData.push(obj)
}

function resetForm() {
  document.getElementById("myform").reset();
}

function displayRecords() {
  let innerHtmlData = "";
  storedData.map((data) => {
    innerHtmlData = innerHtmlData + `Name: ${data.name} <br/> age: ${data.age} <br/> phone: ${data.contactNo} <br/><br/><br/>`

  })
  document.getElementById("saved").innerHTML = innerHtmlData;

}

// TODO: should get called on page load
// fetch previously saved records 
function retrieveRecords() {

}

// function for deleting records
function deleteRecords() {

}

// function to save records
function saveRecords() {

}



