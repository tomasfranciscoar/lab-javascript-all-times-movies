/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(array) {

  function durationMinuts(duration){
   return duration.split(" ").reduce((acc,time)=>{
                if(time.indexOf("h") !== -1){
                   return time.replace("h", "") * 60 +acc;
                  }
                  return Number(time.replace("min", ""))+ acc;
            },0)
  }
  //let realDuration = movies.split("h")
return array.map((item,i)=>{

      //["2h","22m"]
      //horas = replace("h",'') * 60
      //replace("min",'') + hora
      //reduce
      item = Object.assign({},item)
     
      item.duration = durationMinuts(item.duration)
      return item
});
}

// Get the average of all rates with 2 decimals

function ratesAverage(array) {
  var totalRates = array.reduce(function(sum, movie){
      return sum + parseFloat(movie.rate)
  }, 0)
  return totalRates / array.length
}


// Get the average of Drama Movies

function dramaMoviesRate(array){
      var dramaMovies = array.filter(function(movie){
            return movie.genre.includes('Drama');
      })
      if(dramaMovies == '') return undefined;
      var dramaRates = dramaMovies.reduce(function(sum, movie){
            return sum + parseFloat(movie.rate)
      }, 0)
      return dramaRates / dramaMovies.length;
}


// Order by time duration, in growing order

function orderByDuration(array){
      function compare(a,b) {
            if (a.duration < b.duration)
              return -1;
            if (a.duration > b.duration)
              return 1;
            if (a.duration == b.duration){
                  if(a.title < b.title) return -1;
                  if(a.title > b.title) return 1;
                  return 0
            }
          }
      return array.sort(compare)
}


// How many movies did STEVEN SPIELBERG

function howManyMovies(array){
      var drama = array.filter(function(movie){
            return movie.genre.includes('Drama')
      })
      var steven = drama.filter(function(movie){
            return movie.director.includes('Steven Spielberg')
      })
      if(steven == '') return undefined;
      return 'Steven Spielberg directed ' + steven.length + ' drama movies!'
}


// Order by title and print the first 20 titles

function orderAlphabetically(array){
      var titles = [];
      for(var i=0; i<array.length; i++){
            titles.push(array[i].title);
      }
      titles.sort()
    return titles.slice(0, 20);
}

// Best yearly rate average
