var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );
        anHttpRequest.send( null );
    }
}

var client = new HttpClient();
client.get('https://api.coinbase.com/v2/prices/:currency_pair/buy', function(response) {
    console.log(response);
      // var myJSON = response;
      // var myObj = JSON.parse(myJSON);
      // document.getElementById("exchangerate").innerHTML = myObj.data.rates["BTC"];
});
