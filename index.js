const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes");

function generateSVG(text, textColor, shape, shapeColor) {
  let shapeInstance;

  switch (shape) {
    case "Circle":
      shapeInstance = new Circle();
      break;
    case "Triangle":
      shapeInstance = new Triangle();
      break;
    case "Square":
      shapeInstance = new Square();
      break;
  }

  shapeInstance.setColor(shapeColor);

  return `
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${shapeInstance.render()}
    <text x="150" y="110" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>`;
}

function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "text",
        message: "Enter up to 3 characters for the logo text:",
        validate: (input) => input.length <= 3 || "Must be 3 characters or less",
      },
      {
        type: "input",
        name: "textColor",
        message: "Enter a text color (keyword or hex code):",
      },
      {
        type: "list",
        name: "shape",
        message: "Choose a shape:",
        choices: ["Circle", "Triangle", "Square"],
      },
      {
        type: "input",
        name: "shapeColor",
        message: "Enter a shape color (keyword or hex code):",
      },
    ])
    .then((answers) => {
      const svgContent = generateSVG(
        answers.text,
        answers.textColor,
        answers.shape,
        answers.shapeColor
      );

      fs.writeFileSync("examples/logo.svg", svgContent);
      console.log("✅ Generated logo.svg");
    })
    .catch((err) => console.error(err));
}

promptUser();