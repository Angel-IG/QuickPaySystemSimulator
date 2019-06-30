# QuickPaySystemSimulator
## Introduction
This project is made with HTML5, CSS3 and JavaScript. It simulates a supermarket paying system. 
This system works with rows, each enumerated with an ID number. Each row is a cashier that will recieve the client's money. 
## How it works
There is in the supermarket a machine that tells the user what row have to choose. Each client spends some time paying and then the row is ready to be used by another client. 
The machine that chooses what row will the user pay on selects the row with the lowest ID number that is clear. 
### Example
There are five rows in this example. 
- A user come, and he goes to the first row. 
- Another user come, and he goes to the second row.
- The user of the first row finishes.
- Another user come, and he goes to the first row.
- The user of the second row finishes.
- The user of the first row finishes.
- Five users come.
- Another user come, and he goes to the first row (now he waits for the other user to finish). 
- The five previous users finish.
- The user from the first row finishes.
## Implementation
When the user presses the SPACE bar, the program prints out the row number asigned to the client i.e. each time the user press the SPACE bar is a client that wants to pay. 
The JavaScript program will check the time the clients spend paying and the empty rows. 
