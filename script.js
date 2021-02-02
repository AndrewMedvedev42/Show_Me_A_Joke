const jokeElem = document.getElementById("joke")
const jokeBtn = document.getElementById("jokebtn")

jokeBtn.addEventListener("click", genereteJoke)
genereteJoke()

function genereteJoke(){
    const config = {
        headers:{
            "Accept":"application/json"
    }
}
    fetch("https://icanhazdadjoke.com", config)
        .then((res) => res.json())
        .then((data) => {jokeElem.innerHTML = data.joke})
}

