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
  