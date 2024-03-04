## Important Notes:

### Js Explaination:-
- const SELECTIONS = [...]
- This creates an array named SELECTIONS containing objects representing different possible selections (rock, paper, and scissor), each object having properties like name, emoji, and beats.

Let's walk through an instance to understand how the JavaScript functionality operates in a game of rock-paper-scissors.
* Choosing Rock (✊):
    * Suppose the user chooses "rock" as their selection.
* Adding Event Listeners:
    * The following line of code iterates over each selection button available in the HTML NodeList:selectionButton.forEach(selectionButton => {...});   
    * For each selection button, it adds an event listener that listens for a click event. Upon clicking, it triggers the makeSelection function with the appropriate selection object.
* Generating Computer's Choice:
    * Inside the makeSelection(selection) function, the computer's selection (pcSelection) is determined by invoking the randomS() function, which selects a random index from the predefined SELECTIONS array. Let's assume it chooses "scissor" (✌️) as its selection.
* Determining Winner:
    * The isWinner(selection, opponentSelection) function is called twice to determine the winner of the round:
        * const yWinner = isWinner(selection, pcSelection);
        * Checks if the user's selection beats the computer's selection.
        * If yWinner is true, the user wins the round.(In this instance)
        * const pcWinner = isWinner(pcSelection, selection);
        * Checks if the computer's selection beats the user's selection.
        * If pcWinner is true, the computer wins the round.
    * By evaluating both scenarios separately, the program accurately determines the winner of each round, accounting for all possible outcomes.
* Displaying Result:
    * Based on the outcome, the appropriate line of code is executed to display the result:selectionResult(selection, yWinner) and selectionResult(pcSelection, pcWinner) respectively. These lines are called within the makeSelection() function after determining the winners of each round and these lines are also responsible for printing the user-selected emoji and the computer-generated emoji.
        * This line displays the result of the user's selection.
        * It creates a div element representing the selection result, setting its inner text to the corresponding emoji.
        * CSS classes are added for styling, and the div is appended to the HTML document.
* Incrementing Score:
    * If there's a winner, their score is incremented accordingly:if (yWinner) incrementScore(yScore);   
        * Checks if the user won the round (yWinner is true).
        * If so, the incrementScore() function is called with the user's score element (yScore) as an argument.
        * This updates the displayed score on the UI, incrementing the user's score by 1.




