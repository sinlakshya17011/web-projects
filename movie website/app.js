const searchForm = document.querySelector("form");
let movieContainer = document.querySelector(".movie-container");
const inputBox = document.querySelector(".search-input");

if (!movieContainer) {
    const main = document.querySelector("main");
    movieContainer = document.createElement("section");
    movieContainer.className = "movie-container nobg";
    movieContainer.innerHTML = "<h2>Search a movie to see details</h2>";
    main.prepend(movieContainer);
}

// FUNCTION TO FETCH MOVIE DETAIL BY OMDB API

const getMovieInfo = async (movie) => {
    try {
        const apiKey = "4e23dba";
        const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(movie)}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Unable to fetch movie")
        }

        const data = await response.json();

        if (data.Response === "False") {
            throw new Error(data.Error || "Movie not found");
        }

        showMovieData(data);
    }
    catch (error) {
        showErrorMessage(error.message || "No Movie Found!!")
    }
}

// FUNCTION TO SHOW DATA ON SCREEN

const showMovieData = (data) => {
    movieContainer.innerHTML = "";
    // movieContainer.classList.remove("nobg");


    // USING DECONSTRUCTING ASSINGNMET TO FETCH PROPERTIES FROM DATA OBJECT
    const { Title, imdbRating, Genre, Released, Actors, Runtime, Plot, Poster, Director } = data;
    const genres = Genre && Genre !== "N/A" ? Genre.split(",") : ["Genre unavailable"];

    // TITLE AND RATING

    const movieElement = document.createElement("div");
    movieElement.classList.add("movie-info");
    movieElement.innerHTML = `<h2>${Title}</h2>
                            <p><strong>Rating: &#11088;</strong>${imdbRating}</p>`;

    // GENRE 

    const movieGenreElement = document.createElement("div");
    movieGenreElement.classList.add("movie-genre")

    genres.forEach(element => {
        const p = document.createElement('p')
        p.innerText = element;
        movieGenreElement.appendChild(p);
    });

    movieElement.appendChild(movieGenreElement);

    // RELEASE PLOT ACTOR

    movieElement.innerHTML += ` <p><strong>Releaase Date: </strong>${Released}</p>
                               <p><strong>Duration: </strong>${Runtime}</p>
                               <p><strong>Cast: </strong>${Actors}</p>
                               <p><strong>Plot: </strong>${Plot}</p>
                               <p><strong>Directed By: </strong>${Director}</p>`


    //  MOVIE POSTER 
    const moviePoster = document.createElement("div");
    moviePoster.classList.add("movie-poster")

    if (Poster && Poster !== "N/A") {
        moviePoster.innerHTML = `<img src="${Poster}" alt="${Title} poster"/>`
    } else {
        moviePoster.innerHTML = `<div class="poster-fallback">No poster available</div>`
    }

    movieContainer.appendChild(moviePoster);
    movieContainer.appendChild(movieElement);
    movieContainer.scrollIntoView({ behavior: "smooth", block: "start" });

}

// FUNCTION TO DISPLAY ERROR MESSAGE
const showErrorMessage = (message) => {
    movieContainer.innerHTML = `<h2>${message}</h2>`;
    movieContainer.scrollIntoView({ behavior: "smooth", block: "start" });
}


// FUNCTION TO HANDLE FORM SUBMISSION
const handleFormSubmission = (e) => {
    e.preventDefault()
    const movieName = inputBox.value.trim();
    if (movieName !== '') {
       
        getMovieInfo(movieName);
    }
    else {
        showErrorMessage("Enter movie name to get information");
    }
}


// ADDING EVENTLISTENER TO SEARCHINPUT
searchForm.addEventListener("submit", handleFormSubmission);