let voteA = 0;
let voteB = 0;

// HTML Elements
const countA = document.getElementById("voteA");
const countB = document.getElementById("voteB");
const winner = document.getElementById("winner");

// Vote for Candidate A
function voteCandidateA() {
    voteA++;
    countA.innerText = voteA;
    checkWinner();
}

// Vote for Candidate B
function voteCandidateB() {
    voteB++;
    countB.innerText = voteB;
    checkWinner();
}

// Check Winner
function checkWinner() {

    if (voteA > voteB) {
        winner.innerText = "🏆 Candidate A is Winning";
    }
    else if (voteB > voteA) {
        winner.innerText = "🏆 Candidate B is Winning";
    }
    else {
        winner.innerText = "🤝 It's a Tie";
    }

}

// Reset Election
function resetElection() {

    voteA = 0;
    voteB = 0;

    countA.innerText = 0;
    countB.innerText = 0;

    winner.innerText = "No Winner Yet";
}