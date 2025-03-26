# SVG Logo Maker 🎨
Demo Video
🎥 [Click here to watch the walkthrough video](https://drive.google.com/file/d/1v8HeXCkRNglnZ7nQOD1vLV1oZ_kdj6En/view?usp=drive_link)
## Description

This is a Node.js command-line application that allows users to generate a simple SVG logo by selecting a shape, providing custom colors, and entering up to three characters of text. The application demonstrates object-oriented programming principles, using shape classes and inheritance, and collects user input using the Inquirer package.

It was created as part of an Object-Oriented Programming Challenge in the Full-Stack Web Development Bootcamp.

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Demo Video](#demo-video)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [File Structure](#file-structure)
- [Example Output](#example-output)
- [License](#license)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/liz0612/SVG-Logo-Maker.git
   cd SVG-Logo-Maker

Install dependencies:
npm install
Usage

To run the application:
node index.js
You will be prompted to:
	•	Enter up to 3 characters for your logo text
	•	Select a text color (name or hex code)
	•	Choose a shape (Circle, Triangle, Square)
	•	Enter a shape color (name or hex code)

The logo will be generated and saved as logo.svg in the /examples folder.
 


 Technologies Used
	•	Node.js
	•	Inquirer
	•	Jest for testing
	•	SVG for vector graphics

⸻
Testing

The application includes unit tests for the shape classes using Jest.

To run the tests: 
npm test
Each shape class has a render() method that returns a properly formatted SVG string. 
Example Output

Here’s an example logo created with:
	•	Text: SVG
	•	Text Color: white
	•	Shape: Circle
	•	Shape Color: green