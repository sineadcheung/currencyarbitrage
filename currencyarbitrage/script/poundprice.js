function GBP(){


    // HTTP Request
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

    // Requesting Coinbase's Exchange Rate
    var client = new HttpClient();
    client.get('https://api.coinbase.com/v2/exchange-rates', function(response) {
        console.log(response);
        // Parsing the JSON response
          var myJSON = response;
          var myObj = JSON.parse(myJSON);
        // Moving the JSON into HTML
          document.getElementById("poundrate").innerHTML = myObj.data.rates["GBP"];
      //  Changing the response from 'string' into a integer
          var poundnumber = parseFloat(myObj.data.rates["GBP"]);
      //  1 pound to BTC
          var pound2btc = (1 * (1 / poundnumber)) * (myObj.data.rates["BTC"])
      // BTC to 1 Pound
          var btc2pound = 1 * (1 /pound2btc)
      // Move to html

      // remove usd
          document.getElementById("btc2pound").innerHTML = "£ " + btc2pound;
          document.getElementById("exchangerate").innerHTML = " ";
          document.getElementById("bitfinex").innerHTML = '';
          document.getElementById("btc3usd3").innerHTML = '';
          document.getElementById("btc2usd2").innerHTML = '';
          document.getElementById("bitstamp").innerHTML = '';
          document.getElementById("coindesk").innerHTML = '';
          document.getElementById("exchangerate").innerHTML = '';
          document.getElementById("btc2usd").innerHTML = '';

    });

}
