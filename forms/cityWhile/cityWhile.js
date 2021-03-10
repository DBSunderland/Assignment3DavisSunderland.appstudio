let cities = []
let doneWithCities = false
let yesNo = ""

while (doneWithCities == false) {
  yesNo = prompt("Do you have more cities? Yes or No")
  if (yesNo == "Yes") {
    doneWithCities = false
    newCity = prompt("Enter the next city")
    cities.push(newCity)
 } else {
    doneWithCities = true
  }
}  

/*
console.log(cities)
*/

