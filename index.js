const testimonials = [
    {
        name: "George",
        photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        text: "Just what I was looking for. Thanks for the great service. No matter where you go, restaurant is the coolest, most happening thing around!",
    },
    {
        name: "Ronica W",
        photoUrl: "https://img.freepik.com/free-photo/elegant-bare-young-african-american-female-studio_23-2148183336.jpg?w=996&t=st=1690837111~exp=1690837711~hmac=d8f1c929c50378842cafa7abbd93824dfa4b4e99d01c63bf5de5f44ad36c2e96",
        text: "Man, this thing is getting better and better as I learn more about it. Restaurant saved my business. Buy this now. It fits our needs perfectly.",
    },
    {
        name: "Sean",
        photoUrl: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=996&t=st=1690837920~exp=1690838520~hmac=3b133c2980d3f9c14a282b49853d37f6cb73813f58e0743a06fc438b0a8a8777",
        text: "I will recommend you to my colleagues. This is simply unbelievable!",
        
    }
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
    const {name, photoUrl, text} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerHTML = text;
    usernameEl.innerHTML = name;
    idx++
    if(idx === testimonials.length) {
        idx = 0;
    }
    setTimeout (() => {
        updateTestimonial();
    }, 6000);
}



const sumUp = (resultHandler, ...numbers) => {
    const validateNumber = (number) => {
      return isNaN(number) ? 0 : number;
    };
  
    let sum = 0;
    for (const num of numbers) {
      sum += validateNumber(num);
    }
    resultHandler(sum);
  };
  
  const subtractUp = function() {
    let sum = 0;
    for (const num of arguments) { // don't use that
      sum -= num;
    }
    return sum;
  };
  
  const showResult = (result) => {
    alert('The result after adding all numbers is: ' + result);
  };
  
  sumUp(showResult, 1, 5, 'fdsa', -3, 6, 10);
  sumUp(showResult, 1, 5, 10, -3, 6, 10, 25, 88);
  console.log(subtractUp(1, 10, 15, 20));