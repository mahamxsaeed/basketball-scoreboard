
let homescore = document.getElementById("score-home")
let guestscore = document.getElementById("score-guest")

// load scores from local storage if they exist else start at 0
let home = parseInt(localStorage.getItem("homeScore")) || 0
let guest = parseInt(localStorage.getItem("guestScore")) || 0

// show initial score s
homescore.textContent = home
guestscore.textContent = guest

leader()

function increment(points, team) {

    if (team == 'home') {
        home += points
        homescore.textContent = home
        //save home score to local storage
        localStorage.setItem("homeScore", home)
    } else if (team == 'guest') {
        guest += points
        guestscore.textContent = guest
        ////save home score to local storage
        localStorage.setItem("guestScore", guest)
    }

    leader()
}

function reset () {

    home = 0
    homescore.textContent = home
    guest = 0
    guestscore.textContent = guest

    // reset localstorage too
    localStorage.setItem("homeScore", home)
    localStorage.setItem("guestScore", guest)

    leader()
}


function leader () {

    homescore.classList.remove("leader")
    guestscore.classList.remove("leader")
    
    if(home > guest) {
        homescore.classList.add("leader")
    } else if (guest > home) {
        guestscore.classList.add("leader")
    } else if (home == guest && home!= 0) {
        homescore.classList.add("leader")
        guestscore.classList.add("leader")
    }
}
