document.addEventListener("DOMContentLoaded", () => {
  const screen = document.getElementById("screen");
  const buttons = document.querySelectorAll("button");
  let expression = "";

  // Function to safely evaluate the expression using a math parser
  const calculateResult = () => {
    try {
      // Replace characters to ensure proper math operations
      const sanitizedExpression = expression
        .replace(/[^0-9+\-*/().]/g, "");  // Removes any invalid characters
      // Use the Function constructor for safer eval
      const result = new Function('return ' + sanitizedExpression)();
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

