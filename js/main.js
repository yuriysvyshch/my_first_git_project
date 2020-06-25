var myNum = 10, myStr = 'строка', myBool = true, myArr = [1,2,3,4,5], myObj = {first: 'First Name', last: 'Last Name'}

console.log('myNum: ' + myNum)
console.log(`myStr: "${myStr}"`)
console.log(myArr)
console.log(myObj)

var decimal2 = myNum.toFixed(2)
console.log(decimal2)

var i = 0

i++
console.log(i) // 1
console.log(i++) // 1, a: 2
console.log(++i) // 3
console.log(i--) // 3, a: 2
console.log(--i) // 1

var myTest = 20

myTest += myNum 
console.log(myTest) // 30
myTest *= 2
console.log(myTest) // 60
myTest %= 3
console.log(myTest) // 0
myTest -= myNum
console.log(myTest) // -10
myTest /= myNum
console.log(myTest) // -1

var myPi = Math.PI
console.log(myPi)
var myRound = Math.round(89.279)
console.log(myRound)
var myRandom = Math.round(Math.random()*10) // 7.123124512
console.log(myRandom)
var myPow = Math.pow(3,5)
console.log(myPow)

var strObj = {str: "Мама мыла раму, рама мыла маму"}
strObj.length = strObj.str.length
console.log(strObj)

var isRamaPos = strObj.str.includes('рама')
console.log(isRamaPos)

var strReplace = strObj.str.replace('мыла', 'моет')
strReplace = strReplace.replace('рама мыла', 'Рама держит')
console.log(strReplace)

console.log(strReplace.toLowerCase())
console.log(strReplace.toUpperCase())