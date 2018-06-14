var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=dea6e98ec0784133bc9ab4077a1a549d';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
      var myJSON = req ;
      var myObj = JSON.parse(myJSON);
      document.getElementById("demo").innerHTML = myObj.name;

        //var x = document.getElementById('articles').innerHTML = response.articles[0];
      //var y = document.getElementById('news-title').innerHTML =
    })
// axios.get(url)
// .then(function(response)){
//   this.dataRecieved = response;
//   console.log(this.dataRecieved);
//   return this.dataRecieved;
// })
//     fetch(req)
//         .then(function(response) {
//             console.log(response.json());
//             //var x = document.getElementById('articles').innerHTML = response.articles[0];
//           //var y = document.getElementById('news-title').innerHTML =
//         })
