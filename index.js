
let homescore = document.getElementById("score-home")
let guestscore = document.getElementById("score-guest")

let home = 0
let guest = 0

function increment(points, team) {

    if (team == 'home') {
        home += points
        homescore.textContent = home
    } else if (team == 'guest') {
        guest += points
        guestscore.textContent = guest
    }

    leader()
}

function reset () {

    home = 0
    homescore.textContent = home
    guest = 0
    guestscore.textContent = guest

    leader()
}


function leader () {

    homescore.classList.remove("leader")
    guestscore.classList.remove("leader")
    
    if(home > guest) {
        homescore.classList.add("leader")
    } else if (guest > home) {
        guestscore.classList.add("leader")
    } else if (home == guest) {
        homescore.classList.add("leader")
        guestscore.classList.add("leader")
    }
}
