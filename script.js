const jokeElem = document.getElementById("joke")
const jokeBtn = document.getElementById("jokebtn")

jokeBtn.addEventListener("click", genereteJoke)
genereteJoke()

async function genereteJoke(){
    const config = {
        headers:{
            "Accept":"application/json"
    }
}
    const res = await fetch("https://icanhazdadjoke.com", config)
        
    const data = await res.json()

    jokeElem.innerHTML = data.joke
}
