//1 D
function summation(N) {
  var total = 0;
    for(var i = 1; i <= N; i++){
      total += i;
    }
    return total;
}
summation(5)
  
  //2

function summationEven(n){
  let sum = 0;
  for (let i = 0; i <=n ; i++) {
    if (i % 2 === 0) {
    sum = sum +i;
    }
  }
  return sum;
}
summationEven(5)
 
//3 
function avg(n){
  let total = 0;
  for(var i in n) {
      total += n[i];
  
  }
  let avg = total / n.length;
  return avg }
  avg([8,2,2,4])

//4 
function reverse(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverse('caterpillar');

//5 
const elements = ['test1', 'test2', 'test3'];
function addDashes(elements){
return elements1.join('-');
}

addDashes(elements)
//6 *-*
const countUpAndDown=function(n)
{ 
let str =' ';
 for (let i=1 ; i<n ; i++) {
str+=i+ ' ';
}
for(let i=n ; i>=1 ; i--) {
str+=i+ ' ';
}
return str;
return  str + ' ' ;
}

 countUpAndDown(3)


//7 D
var myList = ['cat', 'rabbit', 'dog', 'frog'];

var str = 'a';

function wordsWhithA(myList) {
  str = str.split('');
  return myList.filter(function(myList) {
    return str.every(function(char) {
      return myList.includes(char);
    });
  });
}

const result = wordsWhithA(myList); 
console.log(result);

//8 -----D
var mylist = ['cat', 'rabbit', 'dog', 'frog'];

var s = 'g';

function wordWithLetter(s, mylist) {
  str = s.split('');
  return mylist.filter(function(mylist) {
    return str.every(function(char) {
      return mylist.includes(char);
    });
  });
}

const theResult1 = wordWithLetter(s,mylist ); 
console.log(theResult1);

//9
function longestWord(str) {
    const stringArray = str.split(" ");
    const longestWord = stringArray.reduce((a, b) => {
      if(b.length > a.length) {
        return b;
      } else {
        return a;
      }
    });
    return longestWord;
  }
  longestWord("The cat in the house");

//10 
function largestEvenNumber(arra) {

    arra.sort((x, y) => y - x);
  
    for (var i = 0; i < arra.length; i++) {
      if (arra[i] % 2 == 0)
        return arra[i];
      }
    }
  
  console.log(largestEvenNumber([1,2,3,10,4,7,0]));