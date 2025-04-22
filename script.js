document.addEventListener("DOMContentLoaded", () => {
  const screen = document.getElementById("screen");
  const buttons = document.querySelectorAll("button");
  let expression = "";

  // Function to safely evaluate the expression
  const calculateResult = () => {
    try {
      // Use eval with caution; can be replaced with a math parser for safety
      const result = eval(expression);
      screen.value = result;
    } catch (error) {
      screen.value = "Error";
    }
  };

  // Add event listeners to all buttons
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const buttonText = e.target.innerText.trim();

      switch (buttonText) {
        case "C":
          expression = "";
          screen.value = "";
          break;

        case "=":
          calculateResult();
          break;

        case "X":
          expression += "*";
          screen.value = expression;
          break;

        case "÷":
          expression += "/";
          screen.value = expression;
          break;

        default:
          expression += buttonText;
          screen.value = expression;
          break;
      }
    });
  });
});
