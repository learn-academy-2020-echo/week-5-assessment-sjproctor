// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

const codedWord = (str) => {
  let strArray = str.split("")
  let newStr = strArray.map(value => {
    if(value === 'a'){
      return 4
    } else if(value === 'e'){
      return 3
    } else if(value === 'i'){
      return 1
    } else if(value === 'o'){
      return 0
    } else {
      return value
    }
  })
  return newStr.join("")
}
console.log(codedWord(secretCodeWord1))
console.log(codedWord(secretCodeWord2))


// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

const filterWords = (array) => {
  return array.filter(value => {
    return value.includes('a') || value.includes('A')
  })
}
console.log(filterWords(arrayOfWords))

const filterWords2 = (array) => {
  return array.filter(value => {
    return value.match(/a/i)
  })
}
console.log(filterWords2(arrayOfWords))


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false
var hand4 = [3, 5, 3, 5, 3]
// Expected output: true


// STRETCH:
var hand5 = ["K", 5, "K", 5, "K"]
// Expected output: true
var hand6 = ["A", "Q", "A", 5, 3]
// Expected output: false

const fullHouse = (array) => {
  let firstCardArray = []
  let secondCardArray = []
  let thirdCardArray = []
  let fourthCardArray = []
  array.map(value => {
    if(value === array[0]){
      return firstCardArray.push(value)
    } else if((value === array[1]) && (value !== array[0])){
      return secondCardArray.push(value)
    } else if(value === array[2] && value !== array[0]){
      return thirdCardArray.push(value)
    } else if(value === array[3] && value !== array[0]){
      return fourthCardArray.push(value)
    }
  })
  if((firstCardArray.length === 2 && secondCardArray.length === 3) || (firstCardArray.length === 3 && secondCardArray.length === 2) || (secondCardArray.length === 2 && thirdCardArray.length === 3) || (secondCardArray.length === 3 && thirdCardArray.length === 2) ||
  (thirdCardArray.length === 2 && fourthCardArray.length === 3) ||
  (thirdCardArray.length === 3 && fourthCardArray.length === 2) ||
  (firstCardArray.length === 2 && fourthCardArray.length === 3) ||
  (firstCardArray.length === 3 && fourthCardArray.length === 2) ||
  (firstCardArray.length === 2 && thirdCardArray.length === 3) ||
  (firstCardArray.length === 3 && thirdCardArray.length === 2)){
    return "You got a full house"
  } else {
    return "Not a full house"
  }
}
console.log(fullHouse(hand1))
console.log(fullHouse(hand2))
console.log(fullHouse(hand3))
console.log(fullHouse(hand4))
console.log(fullHouse(hand5))
console.log(fullHouse(hand6))



const fullHouse2 = (array) => {
  array = array.sort()
  let first = array[0]
  let array1 = array.filter(value => value === first)
  let array2 = array.filter(value => value !== first)
  let array3 = array2.filter(value => value === array2[0])
  return array3.length === 2 && array1.length === 3 ? true : array1.length === 2 && array3.length === 3 ? true : false
}

console.log(fullHouse2(hand1))
console.log(fullHouse2(hand2))
console.log(fullHouse2(hand3))
console.log(fullHouse2(hand4))
console.log(fullHouse2(hand5))
console.log(fullHouse2(hand6))
