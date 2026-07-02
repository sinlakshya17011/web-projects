const URL = " https://v2.jokeapi.dev/joke";



const getFacts = async () => {
    console.log("getting data");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data[1]);

}