# Password-Generator

- The #generate button triggers an event;

- Calls the function getInputs that prompts several pop-ups to get inputs from the user;

- The inputs are stores into global variables, so they are accessible to the next function;

- getInputs function checks that the inputs are valid (the number of characters should be a positive number, at at least one set of characters should be selected);

- As a last task getInputs calls writePassword functions;

- writePassword function declares an empty string that will contain the password;

- Starts a loop that generates a first random value to select a set of characters;

- Checks if the generated index is one of the selected sets;

- Generates a second random value within the set;

- Using the generated random numbers selects one character within the set and adds it to the password string;

- The loop executes until the length of password is equal to the number of characters selected;

- Writes the generated password in the page;

[Portfolio-Link](https://github.com/Gio86krt/Password-Generator)
[Password-Generator-Link](https://gio86krt.github.io/Password-Generator/)
