let cities = []
let doneWithCities = false
let yesNo = ""

while (doneWithCities == false) {
  yesNo = prompt("Do you have more names? Yes or No")
  if (yesNo == "Yes") {
    doneWithCities = false
    newName = prompt("Enter the next name")
 } else {
    doneWithCities = true
  }
  
  