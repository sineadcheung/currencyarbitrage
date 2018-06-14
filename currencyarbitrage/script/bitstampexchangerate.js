var HttpClient2 = function() {
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

var client2 = new HttpClient2();
client2.get('https://www.bitstamp.net/api/v2/ticker/{currency_pair}/', function(response2) {
    console.log(response2);
      // var myJSON2 = response2;
      // var myObj = JSON.parse(myJSON);
      // document.getElementById("exchangerate").innerHTML = myObj.data.rates["BTC"];
      // var usd2btc = parseFloat(myObj.data.rates["BTC"]);
      // var btc2usd = 1 * (1/usd2btc);
      // document.getElementById("btc2usd").innerHTML = btc2usd;
});
