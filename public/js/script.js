const myButton = document.getElementById('btn');
myButton.onclick = function () {
    const name = prompt('Enter your full name');
    document.getElementById('name').innerText = name;
}

//  Variables
const pi = 3.142;
let name = 'Esther Crentsil';
let age = 219;
let present = false;
console.log(name);

// Objects
const car = {
    numberPlates: 'GR-345-24',
    model: 'Bentley',
    color: 'red',
    weight: 50,
    weightUnit: 'kg',
    owner: {
        name: 'Esther Crentsil',
        driver: {
            name: 'Fiifi',
        }
    }
}

console.log('car.numberPlate')
console.log(car.owner.driver.name)
console.log(car)

// changing drivers name
car.owner.driver.name= 'Elizabeth';
console.log(car.owner.driver.name)


// Arrays
const tweet1 = {
    test: 'I am learning js today.',
    likes: 1000,
    shares: 100,
    retweets: 500
  }
  const tweet2 = {
    test: 'I am learning arrays today.',
    likes:8000,
    shares: 500,
    retweets: 500
  }
  const tweets = [];
  tweets.push(tweet1);
  tweets.push(tweet2);
  tweets.length;
  tweets[0];
  
  // Dates
  const today = new Date ();
  today.toString();
  today.toLocaleDateString();
  today.getHours();
  
  // If/Else
  if (today.getHours() >= 9) {
    console.log('Class has ended');
  } else {
    console.log('Class is in session');
    
  }

  // Functions
// Defining functions
function login(username, password) {
  if (username == 'encrentsil' && password == '1234'){
  return 'User is logged in!';
} else if (username != 'encrentsil') {
  return 'invalid username!';
} else if (password != '1234') {
  return 'Invalid password!';
}
  else {
  return 'Invalid username or password';
}
}

// Invoking functions
login('encrentsil', '1234');
// Basic Arithmethic
12 + 34;
45 -16;
7 * 12;
78 / 4;
78 % 4

 //Comparison operators
2 == 2;
3 !== 2
3 !== 3
3 !== '3'

//Built in math functions
Math.round(37/24);
Math.floor(37/24);
Math.ceil (37/24);
Math.random();
Math.max(78,12,98,14,89);
Math.ceil(Math.random()* 1000000);

//Order of operations
1 * 2 + 3 -4 / 2 + 2**2

//Handling user input
1200 + '250'
1200 + Number('250')
1200+Number('delete')
  
  // For loop
  for (let i = 0; i<=9; i++) {
    console.log('Notify friends!',i);
  }
  
  // String concatenation
const firstname = 'Esther';
const lastname = 'Crentsil';
firstname.trim() + ' ' + lastname.trim();
// put space inside the single quote to create a space 
// Using the trim method prevent multiplespace/any additional space in strings

//Template literal
`${firstname.trim()} ${lastname.trim()}`;
//preferred one to use

//String methods
firstname.length;
lastname.length;
`${firstname.trim()} ${lastname.trim()}`.length;
(firstname.trim() + ' ' + lastname.trim()).length;
firstname.toUpperCase();
lastname.charAt(0);
//space is also a position in strings
firstname.trim().charAt(0) + '' + lastname.trim().charAt(0);

//String Conversion
String(2014);

//Write a function that will add a partipant to our google classroom
const participants = [];

function addParticipant(email){
 //Check if email was provided
  if (!email) {
    return 'Email not provided';
  }
  //Check if email is valid
  if (!email.includes('@')){
    return 'Invalid email provided';
  }
   //Add email to the participant  
  participants.push(email);
  //Check if email is valid
  //Notify them via email
  //return response
return 'Participant added!';
}
addParticipant('mickeymonday@yahoo.com');
//Arrays In Javacsript
const alphabets = ['A', 'B','C', 'D'];
alphabets.join(' ');
alphabets.join('').split('')

// Write a function that will take a user with first name,last name and return full name
const user = {
  firstname: 'Joe',
  lastname: 'Garner'
}
function fullname(user){
  return {
    ...user,
      fullname:`${user.firstname} ${user.lastname}`
  }
// ... is used for spreading
}
fullname(user); {
  
}

// Array Map
const users = [
              {firstname: 'Linda',lastname: 'Parker'},
              {firstname: 'Mark', lastname: 'Twaine'},
              {firstname: 'Oliver',lastname: 'Queen'},
              {firstname: 'Stephen', lastname: 'Grider'},
              {firstname: 'Elon', lastname: 'Musk'}
              ]
users.map(fullname);

//Map and return squares of numbers 
function square (number) {
  return number ** 2;
}
const numbers = [0,1,2,3,4,5]
numbers.map(square);

//Filter and return even numbers
function even(number) {
  return number % 2 === 0;
}
numbers.filter(even);            
  
//Objects In JavaScript
//Write a function that takes a user with name and dateOfbirth and returns true if their birthday is today else false
// const user = {
//   name:'Martin King',
//   dateOfBirth: '1990-06-12'
// }
function isBirthday(user) {
  const today = new Date();
  const birthDate = new Date(user.dateOfBirth);
  console.log(birthDate.getMonth(),today.getMonth());
  console.log(birthDate.getDate(),today.getDate());
  if (today.getMonth() === birthDate.getMonth() && today.getDate() === birthDate.getDate()) {return true;
} else {
  return false;
}
return true;
}

isBirthday(user);
           
//Write a function that takes a user with name and dateOfBirth and returns birthday with their name if their bithday is today else return not your day

function birthdayGreeting(user) { 
  if (isBirthday(user)){
    return `Happy birthday, ${user.name}`;
    }else {
      return 'not Yet!';
    }
}
birthdayGreeting(user);

//Bottle Class
class Bottle {
  constructor (color,shape,volume) {
    this.color = color;
    this.shape = shape;
    this.volume = volume;
    
  }

  getInfo() {
    return `This a ${this.color} ${this.shape} bottle with a capacity of ${this.volume}ml;`
  }
}
  

const bottle1= new Bottle ('black', 'circle', 300);
bottle1.getInfo();
const bottle2 = new Bottle ('yellow','square',100);
bottle2.getInfo();




//Object method
const bottle = {
  color: 'red',
  shape: 'square',
  volume: 100,
  getInfo: function() {
    return `This is a ${this.color} ${this.shape} bottle with a capacity of ${this.volume}ml;`
  }
}

bottle.color;
bottle.getInfo();