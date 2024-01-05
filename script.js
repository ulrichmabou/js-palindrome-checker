const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

let inputValue = '';



const getTextInput = () => {
  if (textInput.value === '') {
    alert("Please input a value")
  } else {
    inputValue = textInput.value;
    textInput.value = '';

    const response = checkPalindrome(inputValue) ? "is" : "is not";

    const existingResult = result.querySelector('p');

    if (existingResult) {
      existingResult.innerHTML = `<strong>${inputValue}</strong> ${response} a palindrome.`;
    } else {
      const resultElement = document.createElement('p');

      resultElement.innerHTML = `<strong>${inputValue}</strong> ${response} a palindrome.`;

      result.appendChild(resultElement);
    }
  }
};

checkButton.addEventListener("click", getTextInput);

const checkPalindrome = (input) => {
  const nonAlphanumericRegex = /[\W_]/g;

  const cleanStr = input.replace(nonAlphanumericRegex, '').toLowerCase();

let start = 0;
let end = cleanStr.length - 1;

while (start < end) {
  if (cleanStr[start] !== cleanStr[end]) {
    return false;
  }
  start++;
  end--;
}
return true;
};



