const selectionButton = document.querySelectorAll('[data-selection]');
const finalColumn = document.querySelector('[data-final-column]');
const pcScore = document.querySelector('[data-pc-score]');
const yScore = document.querySelector('[data-y-score]'); 
// An array of different possible selections
const SELECTIONS = [
  {
    name: "rock",
    emoji: "✊",
    beats: "scissor",
  },
  {
    name: "paper",
    emoji: "✋",
    beats: "rock",
  },
  {
    name: "scissor",
    emoji: "✌️",
    beats: "paper",
  },
];

selectionButton.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection;
        const selection = SELECTIONS.find( selection => selection.name === selectionName) 
        makeSelection(selection);
    })
})

function makeSelection(selection) {
    const pcSelection = randomS();
    const yWinner = isWinner(selection, pcSelection);
    const pcWinner = isWinner(pcSelection, selection);
    selectionResult(pcSelection, pcWinner)
    selectionResult(selection, yWinner)

    if (yWinner) incrementScore(yScore)
    if (pcWinner) incrementScore(pcScore) 
}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function selectionResult(selection, winner) {
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('r-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
}

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}

function randomS() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomIndex];
}