const tmdb = 'http://api.themoviedb.org/3/',
      key = 'api_key=83b296315507b7ea0ccdcc536a5ab745';

var session = {};
session.movies = [];
session.unseenMovies = [];
session.likedMovies = [];
session.dislikedMovies = [];
session.similarMovies = [];

var popularMoviesPage = 1; // Temporary: What page should the function get movies from // TODO: This does not work across sessions.

var settings = {
    likedMoviesBeforeSuggestion: 10, // Movies liked before suggestions start appearing
    minimumRating: 6.5
}

function getData(url, callback){
    var data = $.ajax({
                type: 'GET',
                url: url
            }).done(callback).error(function(){
                console.warn('AJAX: Oops...something went wrong');
                console.log("url: ", url);
            });
    return data;
};

$('.genre').on('click', 'li', function () {    
    
    abortRecommendation();
    
    // Move view to movies
    moveView($('.movies'));
    
    var genreId = $(this).data('genre-id');
    
    $('.movies').data('genre-id', genreId);
    
    var mode = 'discover/movie?',
        page = 1,
//        query = "&with_genres=18&primary_release_year=2014",
    //    query = "&primary_release_year=2010&sort_by=vote_average.desc&vote_count.gte=50", // Best average with over 50 ratings
        query = '&sort_by=popularity.desc', // Most popular
        genre = '&with_genres=' + genreId;
    var url = tmdb + mode + '&' + key + '&page=' + page + genre + query;
    
    // get 3 pages of movies to start with, that should eaqual to 60 movies
    getData(url, function(data) {
        
        // Add the results to the array of movies loaded
        $.merge(session.movies, data.results);
        
        url = tmdb + mode + key + '&page=' + (page + 1) + genre + query;
        
        getData(url, function(data) {
            
            // Add the results to the array of movies loaded
            $.merge(session.movies, data.results);
            
            url = tmdb + mode + key + '&page=' + (page + 2) + genre + query;
            
            getData(url, function(data) {
                
                // Add the results to the array of movies loaded
                $.merge(session.movies, data.results);
                
                // Show what movies are loaded
//                console.log('session.movies: ', session.movies.length, session.movies);

                // Get x random movies
                getMovie();
            });
        });
    });
});

$('.movies').on('click', '.movie__opinion__button', function () {
    
    // If session.movies has <= 10 movies left, get a new page (20 movies) of movies
    if (session.movies.length <= 10) {
        
        // Get genre ID
        var genreId = $('.movies').data('genre-id');
        var mode = 'discover/movie?',
            query = '&sort_by=popularity.desc', // Most popular
            genre = '&with_genres=' + genreId;
        popularMoviesPage += 1;
        var url = tmdb + mode + '&' + key + '&page=' + popularMoviesPage + genre + query;

        console.log('Get a new page of popular movies. Page: ', popularMoviesPage);
        
        getData(url, function(data) {

            // Add the results to the array of movies loaded
            $.merge(session.movies, data.results); // TODO: This merges both arrays, even if some movies from the results have already been rated. Rated movies should not be added to session.movies or session.similarMovies

            // Show what movies are loaded
            console.log('session.movies: ', session.movies.length, session.movies);
        });
    }

    var movieId = $(this).parents('.movie').data('movie-id'), // Get the movie ID
        opinion = Number($(this).data('value'));// Get the users opinion
    
    registerOpinion(movieId, opinion);
    
    // If enough empirical evidence has been gathered, suggest a movie
    if (session.likedMovies.length >= settings.likedMoviesBeforeSuggestion) { // TODO: This should be: is there more than 9 movies IN THIS GENRE! Maybe it should ask if there is more than X movies in session.similarMovies instead of session.likedMovies.
        
        var genreId = $('.movies').data('genre-id');
        suggestMovie(genreId);
//        getMovie(); // TODO: It is not currently using session.similarMovies. Also, how do I choose what genre to get movies from?
        
        // Stop the function
        return;
    }

    getMovie();
});

function getMovie() {
//    console.log("Get random movie");
    
    // If (there is more than X in this genre in session.similarMovies)
//    var movies = session.similarMovies; // TODO: Should filter by the current genre
    // else (use session.movies)
    var movies = session.movies;
    
    var randomNumber = Math.floor(Math.random() * movies.length);

    // Choose a random movie
    var chosenMovie = session.movies[randomNumber];
//    console.log("Chosen movie: ", chosenMovie.title);
    
    // Write movies to DOM
    $('.movies').html(writeMoviesToDom(chosenMovie));

}

function registerOpinion(movieId, opinion) {

    // Get the movie with the data-movie-id from session.movies
    var movie = $.grep(session.movies, function(i){return i.id === movieId});
    movie = movie[0];
    
    // If the movie is undefined, that means that the movie was taken from session.similarMovies
    if (!movie) {
        // Get the movie with the data-movie-id from session.similarMovies
        movie = $.grep(session.similarMovies, function(i){return i.id === movieId});
        movie = movie[0];
    }
    
    removeMovieFromArray(session.movies, movieId);
    removeMovieFromArray(session.similarMovies, movieId);
    
    if (opinion === 1) {
        // User liked the movie
        
        // Add movie to session.likedMovies
        session.likedMovies.push(movie);
        console.log("Liked movies (" + session.likedMovies.length + "): ", session.likedMovies);
        
        // Get similar movies
        var mode = 'movie/',
            query = '/similar?',
            page = 1;
        var url = tmdb + mode + movieId + query + key + '&page=' + page; // TODO: Only get movies with rating higher than X (6.5) [var = minimumRating]

        // Get similar movies
        getData(url, function(data) {
            
            // Trim array to 10 movies (remove 10 movies after the 10th movie)
            data.results.splice(10, 10);
//            console.log("similarMovies (first 10): ", data.results.map(function(a) {return a.id;}));
            
            var validatedSimilarMovies = [];
            
            // Map data.results to IDs
            for (var item in data.results.map(function(a) {return a.id;})) {
                
                // Current movie ID in the loop
                var similarMovieId = data.results[item].id;
                
                // If the movie is already in session.likedMovies
                if (movieIsInArray(session.likedMovies, similarMovieId)) {
//                    console.log(data.results[item].title + " (" + similarMovieId + ") has already been added to session.likedMovies");
                    
                // If the movie is already in session.dislikedMovies
                } else if (movieIsInArray(session.dislikedMovies, similarMovieId)) {
//                    console.log(data.results[item].title + " (" + similarMovieId + ") has already been added to session.dislikedMovies");
                    
                // If the movie is already in session.similarMovies
                } else if (movieIsInArray(session.similarMovies, similarMovieId)) {
//                    console.log(data.results[item].title + " (" + similarMovieId + ") has already been added to session.similarMovies, " + session.similarMovies[session.similarMovies.map(function(a) {return a.id;}).indexOf(similarMovieId)].count + " times");
                    var movieIndex = session.similarMovies.map(function(a) {return a.id;}).indexOf(similarMovieId);
                    
                    // If the movie already has "count" object
                    if (session.similarMovies[movieIndex].count) { // TODO: Should I call it someting else than "count"+
//                        console.log("count exists: ", session.similarMovies[movieIndex].count);
                        
                        // Add 1 to "count" object
                        session.similarMovies[movieIndex].count++;
                        
                    // If the movie does not have "count" object
                    } else {
                        console.log("count does not exist: ", session.similarMovies[movieIndex].count);
                        
                        // Add "count" object and set it to 1
                        session.similarMovies[movieIndex].count = 2;
                    }
                    
                // If the movie is not already in session.likedMovies, session.dislikedMovies or session.similarMovies
                } else {
                    // Add movie to session.similarMovies
                    validatedSimilarMovies.push(data.results[item]);
                }
            }
            
            // Merge validatedSimilarMovies into session.similarMovies
            $.merge(session.similarMovies, validatedSimilarMovies);
            
            // Sort the updated session.similarMovies
            session.similarMovies.sort( function(objA, objB) {
                // If objA.count is undefined
                if (!objA.count) {
                    // Set objA.count to 1
                    objA.count = 1;
                }
                // If objB.count is undefined
                if (!objB.count) {
                    // Set objB.count to 1
                    objB.count = 1;
                }

                return objB.count - objA.count;
            });
            
            console.log("session.similarMovies (" + session.similarMovies.length + "): ", session.similarMovies);
        });


    } else if (opinion === -1) {
        // User disliked the movie

        // Add movie to session.likedMovies
        session.dislikedMovies.push(movie);
        
    } else if (opinion === 0) {
        // User have not seen the movie

        // Add movie to session.likedMovies
        session.unseenMovies.push(movie);
    }
}

function movieIsInArray(movieArray, movieId) {
    // If the movie (movieId) is in movieArray
    return movieArray.map(function(a) {return a.id;}).indexOf(movieId) > -1;
}

function removeMovieFromArray(movieArray, movieId) {
    // If the movie (movieId) is in movieArray
    if (movieArray.map(function(a) {return a.id;}).indexOf(movieId) > -1) {
//        console.log("Removing " + movie.title + " from session.movies:", session.movies.map(function(a) {return a.id;}).indexOf(movieId));
        movieArray.splice(movieArray.map(function(a) {return a.id;}).indexOf(movieId), 1);
    }
}

function writeMoviesToDom(chosenMovie) {
    
    if (!chosenMovie) {
        console.warn('writeMoviesToDom(): Excuse me sir, it seems that no movie was chosen');
        return
    }
    

    // Handlebars
    var source = $("#movie-template").html();
    var template = Handlebars.compile(source);
    
    var context = {movieTitle: chosenMovie.title,
                   movieYear: chosenMovie.release_date.split("-")[0], // Remove everything after the first dash (-). The format received is YYYY-MM-DD
                   movieId: chosenMovie.id,
                   movieImage: 'https://image.tmdb.org/t/p/w500' + chosenMovie.poster_path
                  };
    
    // TODO: Fallback for if picture does not exist
    
//    console.log(chosenMovie.release_date); // TODO: algoritme der udregner hvad man skal se
//    console.log(chosenMovie.genre_ids); // TODO: algoritme der udregner hvad man skal se
//    console.log(chosenMovie.original_language); // TODO: algoritme der udregner hvad man skal se
    var html = template(context);
    
//    $('.movies').html(html);    
//        $('.movies').append(content);

    return html;
    
}

function suggestMovie(genreId) {
    
//    console.log("########## Suggest movie ##########");
    
//    // Move view to suggestion
//    moveView($('.suggestion'));
    
    // Similar movies
    var similarMovies = session.similarMovies;

    // Filter session.similarMovies by current genre
    var similarMoviesFiltedByGenre = session.similarMovies.filter(function(a) {
        return a.genre_ids.indexOf(genreId) !== -1;
    });
    
//    console.log("session.similarMovies: ", session.similarMovies.length , session.similarMovies);
//    console.log("similarMoviesFiltedByGenre: ", similarMoviesFiltedByGenre.length, similarMoviesFiltedByGenre);
    
    var similarMoviesLength = similarMoviesFiltedByGenre.length;

    // Random numbers generated
//    var randomNumber = Math.floor(Math.random() * similarMoviesLength);
    
    // Choose a random movie from the list of movies
    var chosenMovie = similarMoviesFiltedByGenre[0];
    
    // Write movies to DOM
    $('.movies').html(writeMoviesToDom(chosenMovie));
}

function abortRecommendation() {
    
    // Move view to genre
    moveView($('.genre'));
    
    // Empty session.movies list
    session.movies = [];
    // TODO: Should this also empty other arrays?
    
    // Clear templates
    $('.movies').html('');
    $('.suggestion').html('');
}

function moveView(activeView) {
    $('.genre, .movies, .suggestion').removeClass('active');
    activeView.addClass('active');
//    console.log(activeView);
}

$('.movies').on('click', '.close', function () {
    abortRecommendation();
});

//$('.suggestion').on('click', '.close', function () {
//    abortRecommendation();
//});

//$('.movies').on('click', '.movie__open-in-imdb', function () {
//    var title = $(this).siblings(".movie__title").data(title).title;
//    window.location.href = "http://www.imdb.com/find?s=all&q=" + title;
//});

//TEMP: Automatically opens drama category
//$('ul li[data-genre-id="18"]').click();

// TODO: Sometimes a movies is shown twice. It should not be.
// TODO: Hvis man liker en film som allerede findes i session.similarMovies, skal den fjernes fra session.similarMovies
// TODO: Make sure that if session.similarMovies run out of movies, the app will go back to getting popular movies, or should it go back to showing high rated movies?
// TODO: Make it a web app (app icon, load screen, no address bar).

// FUTURE: Save data to local storage
// FUTURE: Swipe right to like, left to dislike, up to unsee, down to unsee (or down to add to watch list)
// FUTURE: Make the app load X (5) movies ahead, so that it has time to load the picture, before it has to be shown.
// FUTURE: Optimere anbefalings algoritme: Tag top X (10)% og abefal en film fra disse.
// FUTURE: Optimere anbefalings algoritme: Når en film anbefales skal den have et timestamp, og hvis den ender i session.unseenMovies skal den ikke vises igen i X(7) dage.
// FUTURE: Optimere anbefalings algoritme: Film der anbefales (tilføjes til session.SimilarMovies) skal have en rating over X (6.5).
// FUTURE: Når session.similarMovies er skal en ny side hentes ind i session.movies.