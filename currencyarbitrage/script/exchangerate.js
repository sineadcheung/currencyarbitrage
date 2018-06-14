// HTTP Request
function USD(){

    var allvalues = [];

    console.log("this is working")

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
          document.getElementById("exchangerate").innerHTML = myObj.data.rates["BTC"];
        // Changing the response from 'string' into a integer
          var usd2btc = parseFloat(myObj.data.rates["BTC"]); //integer
        // Formula for 1 BTC to USD
          var btc2usd = 1 * (1/usd2btc);  //integer
      // Moving the newly formulated BTC 2 USD into HTML
          document.getElementById("btc2usd").innerHTML = "$ " + btc2usd ;
          // allvalues.push(id:"coinbase", value:btc2usd);
    });

    // Requesting Coindesk Exchange Rate (Bitcoin Price Index) -- Not an actual exchange
    var client2 = new HttpClient();
    client2.get('https://api.coindesk.com/v1/bpi/currentprice.json', function(response2) {
        console.log(response2);
          var myJSON2 = response2;
          var myObj2 = JSON.parse(myJSON2);
          document.getElementById("coindesk").innerHTML = myObj2.bpi.USD.rate;
          var usd2btc2 = parseFloat(myObj2.bpi.USD.rate); //integer
          var x = 1 / usd2btc2 //integer
          document.getElementById("btc2usd2").innerHTML = x;
          // allvalues.push(id: "coindesk", value:usd2btc);
    });

    // Requesting Bitstamp API
    var client3 = new HttpClient();
    client3.get('https://www.bitstamp.net/api/v2/ticker/btcusd', function(response3) {
        console.log(response3);
        var myJSON3 = response3;
        var myObj3 = JSON.parse(myJSON3);
        document.getElementById("bitstamp").innerHTML = myObj3.last;
        var usd3btc3 = parseFloat(myObj3.last); //integer
        var bitstampus = 1 / usd3btc3  //integer
        document.getElementById("btc3usd3").innerHTML = bitstampus;
        // allvalues.push(id:"Bitstamp", value:"usd3btc");

    });

    var client4 = new HttpClient();
    client4.get('https://api.bitfinex.com/v1/pubticker/btcusd', function(response4) {
        console.log(response4);
        var myJSON4 = response4;
        var myObj4 = JSON.parse(myJSON4);
        var bitfinexusd = parseFloat(myObj4.last_price); //integer
        document.getElementById("bitfinex").innerHTML = myObj4.last_price;
        // allvalues.push(id:"Bitfinex", value:"bitfinexusd");
    });

    document.getElementById("poundrate").innerHTML = '';
    document.getElementById("btc2pound").innerHTML = '';

    console.log(allvalues);


}
