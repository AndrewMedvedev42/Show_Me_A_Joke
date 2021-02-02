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

// function genereteJoke(){
//     const config = {
//         headers:{
//             "Accept":"application/json"
//     }
// }
//     fetch("https://icanhazdadjoke.com", config)
//         .then((res) => res.json())
//         .then((data) => {jokeElem.innerHTML = data.joke})
// }