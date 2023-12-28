let fetchingJokes = async()=>{
    let url = "https://api.chucknorris.io/jokes/random"
   return await fetch(url)
}


function title() {
    document.getElementById("one").innerHTML = "Today Jokes"
    console.log("title")
}

function footer() {
    document.getElementById("footer").innerHTML = "Thanks"
    console.log("footer")
}

let Waiter = async ()=>{
title();

        let jokes = await fetchingJokes()
            .then((res)=>{
                if (res.ok === false){
                    return res.json()
                }
            })
            .then((data)=>{
                return data.value
            }).catch((error)=>{
            return "Problem with url"+ error.name
        })
    console.log(jokes)
    document.getElementById("jokes").innerHTML = `${jokes}`

    footer();
}

Waiter()

