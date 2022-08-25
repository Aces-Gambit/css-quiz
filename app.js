//declare variables for the elements with the data-type attribute
const stepOneQuestion = document.querySelector('[data-type="step-1"]');
const stepTwoQuestion = document.querySelector('[data-type="step-2"]');
const stepThreeQuestion = document.querySelector('[data-type="step-3"]');
const stepFourQuestion = document.querySelector('[data-type="step-4"]');
const loading = document.querySelector(".loading");
const stepOneProcessing = document.querySelectorAll('[data-step="1"]');
const stepTwoProcessing = document.querySelectorAll('[data-step="2"]');
const stepThreeProcessing = document.querySelectorAll('[data-step="3"]');
const stepFourProcessing = document.querySelectorAll('[data-step="4"]');
const stepFiveProcessing = document.querySelectorAll('[data-step="5"]');
const congratulations = document.querySelector("#congratsBox");
const form = document.querySelector("#form");

//function which appends the class active to an element
function addClass(element, className) {
  element.classList.add(className);
}
//function which removes the class active from an element
function removeClass(element, className) {
  element.classList.remove(className);
}
//for loop which adds a class to every element of the array
function addClassToArray(array, className) {
  for (let i = 0; i < array.length; i++) {
    addClass(array[i], className);
  }
}
//for loop which removes a class to every element of the array
function removeClassFromArray(array, className) {
  for (let i = 0; i < array.length; i++) {
    removeClass(array[i], className);
  }
}

//function stepOne which adds the class fade-out to the variable element
function stepOne() {
  //fadeout current question
  addClass(stepOneQuestion, "fade-out");
  //allow opacity transition to finish
  setTimeout(() => {
    //remove previous question
    addClass(stepOneQuestion, "hidden");
    //give next question baseline opacity and transition
    addClass(stepTwoQuestion, "fade-in");
    //resize the window to fit the new question
    removeClass(stepTwoQuestion, "hidden");
  }, 300);

  setTimeout(() => {
    //clean up the previous question class list
    removeClass(stepOneQuestion, "fade-out");
    //adjust the opacity of the next question to visible
    addClass(stepTwoQuestion, "show");
  }, 500);
}

//function stepTwo which adds the class fade-out to the variable element
function stepTwo() {
  //fadeout current question
  addClass(stepTwoQuestion, "fade-out");
  //allow opacity transition to finish
  setTimeout(() => {
    //remove previous question
    addClass(stepTwoQuestion, "hidden");
    //give next question baseline opacity and transition
    addClass(stepThreeQuestion, "fade-in");
    //resize the window to fit the new question
    removeClass(stepThreeQuestion, "hidden");
  }, 300);

  setTimeout(() => {
    //clean up the previous question class list
    removeClass(stepTwoQuestion, "fade-out");
    removeClass(stepTwoQuestion, "fade-in");
    removeClass(stepTwoQuestion, "show");
    //adjust the opacity of the next question to visible
    addClass(stepThreeQuestion, "show");
  }, 500);
}

//function stepThree which adds the class fade-out to the variable element
function stepThree() {
  //fadeout current question
  addClass(stepThreeQuestion, "fade-out");
  //allow opacity transition to finish
  setTimeout(() => {
    //remove previous question
    addClass(stepThreeQuestion, "hidden");
    //give next question baseline opacity and transition
    addClass(stepFourQuestion, "fade-in");
    //resize the window to fit the new question
    removeClass(stepFourQuestion, "hidden");
  }, 300);

  setTimeout(() => {
    //clean up the previous question class list
    removeClass(stepThreeQuestion, "fade-out");
    removeClass(stepThreeQuestion, "fade-in");
    removeClass(stepThreeQuestion, "show");
    //adjust the opacity of the next question to visible
    addClass(stepFourQuestion, "show");
  }, 500);
}

//function stepFour which adds the class fade-out to the variable element
function stepFour() {
  //fadeout current question
  addClass(stepFourQuestion, "fade-out");
  //allow opacity transition to finish
  setTimeout(() => {
    //remove previous question
    addClass(stepFourQuestion, "hidden");
    removeClass(loading, "hidden");
    //give processing elements baseline opacity and transition
    addClassToArray(stepOneProcessing, "fade-in");
    //resize the window to fit the processing elements
    removeClassFromArray(stepOneProcessing, "hidden");
  }, 300);

  setTimeout(() => {
    //clean up the previous question class list
    removeClass(stepFourQuestion, "fade-out");
    removeClass(stepFourQuestion, "fade-in");
    removeClass(stepFourQuestion, "show");
    //adjust the opacity of processing elements to visible
    addClassToArray(stepOneProcessing, "show");
  }, 500);

  setTimeout(() => {
    //fadeout existing processing elements
    addClassToArray(stepOneProcessing, "fade-out");
    //allow opacity transition to finish
    setTimeout(() => {
      //remove previous question
      addClassToArray(stepOneProcessing, "hidden");
      //give processing elements baseline opacity and transition
      addClassToArray(stepTwoProcessing, "fade-in");
      //resize the window to fit the processing elements
      removeClassFromArray(stepTwoProcessing, "hidden");
    }, 300);
    setTimeout(() => {
      //clean up the previous processing elements class list
      removeClassFromArray(stepOneProcessing, "fade-out");
      removeClassFromArray(stepOneProcessing, "fade-in");
      removeClassFromArray(stepOneProcessing, "show");
      //adjust the opacity of processing elements to visible
      addClassToArray(stepTwoProcessing, "show");
    }, 500);
  }, 2000);
  setTimeout(() => {
    //fadeout existing processing elements
    addClassToArray(stepTwoProcessing, "fade-out");
    //allow opacity transition to finish
    setTimeout(() => {
      //remove previous question
      addClassToArray(stepTwoProcessing, "hidden");
      //give processing elements baseline opacity and transition
      addClassToArray(stepThreeProcessing, "fade-in");
      //resize the window to fit the processing elements
      removeClassFromArray(stepThreeProcessing, "hidden");
    }, 300);
    setTimeout(() => {
      //clean up the previous processing elements class list
      removeClassFromArray(stepTwoProcessing, "fade-out");
      removeClassFromArray(stepTwoProcessing, "fade-in");
      removeClassFromArray(stepTwoProcessing, "show");
      //adjust the opacity of processing elements to visible
      addClassToArray(stepThreeProcessing, "show");
    }, 500);
  }, 4000);
  setTimeout(() => {
    //fadeout existing processing elements
    addClassToArray(stepThreeProcessing, "fade-out");
    //allow opacity transition to finish
    setTimeout(() => {
      //remove previous question
      addClassToArray(stepThreeProcessing, "hidden");
      //give processing elements baseline opacity and transition
      addClassToArray(stepFourProcessing, "fade-in");
      //resize the window to fit the processing elements
      removeClassFromArray(stepFourProcessing, "hidden");
    }, 300);
    setTimeout(() => {
      //clean up the previous processing elements class list
      removeClassFromArray(stepThreeProcessing, "fade-out");
      removeClassFromArray(stepThreeProcessing, "fade-in");
      removeClassFromArray(stepThreeProcessing, "show");
      //adjust the opacity of processing elements to visible
      addClassToArray(stepFourProcessing, "show");
    }, 500);
  }, 6000);
  setTimeout(() => {
    //fadeout existing processing elements
    addClassToArray(stepFourProcessing, "fade-out");
    //allow opacity transition to finish
    setTimeout(() => {
      //remove previous question
      addClassToArray(stepFourProcessing, "hidden");
      //give processing elements baseline opacity and transition
      addClassToArray(stepFiveProcessing, "fade-in");
      //resize the window to fit the processing elements
      removeClassFromArray(stepFiveProcessing, "hidden");
    }, 300);
    setTimeout(() => {
      //clean up the previous processing elements class list
      removeClassFromArray(stepFourProcessing, "fade-out");
      removeClassFromArray(stepFourProcessing, "fade-in");
      removeClassFromArray(stepFourProcessing, "show");
      //adjust the opacity of processing elements to visible
      addClassToArray(stepFiveProcessing, "show");
    }, 500);
  }, 8000);
  setTimeout(() => {
    //fadeout existing processing elements
    addClassToArray(stepFiveProcessing, "fade-out");
    //allow opacity transition to finish
    setTimeout(() => {
      //remove previous question
      addClassToArray(stepFiveProcessing, "hidden");
      //give processing elements baseline opacity and transition
      addClass(congratulations, "fade-in");
      //resize the window to fit the processing elements
      removeClass(congratulations, "hidden");
      //hide the loading animation
      addClass(loading, "hidden");
    }, 300);
    setTimeout(() => {
      //clean up the previous processing elements class list
      removeClassFromArray(stepFiveProcessing, "fade-out");
      removeClassFromArray(stepFiveProcessing, "fade-in");
      removeClassFromArray(stepFiveProcessing, "show");
      //adjust the opacity of processing elements to visible
      addClass(congratulations, "show");
    }, 500);
  }, 11000);
}
