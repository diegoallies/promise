let people = new Promise((resolve, reject) => {

fetch("https://randomuser.me/api/?results=100")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

let people = data.results;
/////////////////////////////////////////////////////////////////////////////////////////////////////////
let person = people.find((person) => {
    return (
      person.name.first == "Johnathan" ||
      person.name.first == "Tom" ||
      person.name.first == "Jack" ||
      person.name.first == "John" ||
      person.name.first == "Jake" ||
      person.name.first == "Mary"
    );
  });
///////////////////////////////////////////////////////////////////////////////////////////////
  if (person) {
      resolve(person.name);
  } else {
      reject({
        msg: "Person not found",
    });
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////
})
})
///////////////////////////////////////////////////////////////////
people.then((resd) => {
    console.log(resd)
    document.querySelector("#otp").innerHTML = `
    
    <h1> ${resd.first} ${resd.last} </h1>
    `
}).catch((err) => {
  console.log(err)
  alert(err.msg)
  location.reload()
});