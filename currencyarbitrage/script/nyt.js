var url = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json"
url += '?api-key=41ed1365ea3f414caba5c75ec05b4f3b'
url += '&publisher=dell'
url += '&title=i give you my body'

axios.get(url)
  .then(function (response) {
    console.log(response)
    //var x = document.getElementById('title').innerHTML = response.data.results[0].title;
    //var y = document.getElementById('author').innerHTML = response.data.results [0].reviews;
  })
