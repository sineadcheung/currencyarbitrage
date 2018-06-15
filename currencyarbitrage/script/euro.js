function EURO(){

  var currencies = {
    btc2pound: null,
    coindeskeuro: null,
    usd3btc3: null,
    bitfinexpound: null
  }

  var currencies2 = {
    usd2euro: null,
    euro2usd: null
  }


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
          // document.getElementById("poundrate").innerHTML = myObj.data.rates["GBP"];
      //  Changing the response from 'string' into a integer
          var poundnumber = parseFloat(myObj.data.rates["EUR"]);
      //  1 pound to BTC
          var pound2btc = (1 * (1 / poundnumber)) * (myObj.data.rates["BTC"]);
      // BTC to 1 Pound
          currencies.btc2pound = 1 * (1 /pound2btc);
      // Move to html
          document.getElementById("btc2pound").innerHTML = "€ " + currencies.btc2pound;
          onDataRecieve();
    });

      // Requesting Coindesk Exchange Rate (Bitcoin Price Index) -- Not an actual exchange
      var client2 = new HttpClient();
      client2.get('https://api.coindesk.com/v1/bpi/currentprice.json', function(response2) {
          console.log(response2);
            var myJSON2 = response2;
            var myObj2 = JSON.parse(myJSON2);
            document.getElementById("btc2pound2").innerHTML = "€ "  + myObj2.bpi.EUR.rate_float;
            var coindeskpound = parseFloat(myObj2.bpi.EUR.rate_float); //integer
            currencies.coindeskeuro = coindeskpound;
            var x = 1 / coindeskpound ; //integer
            // document.getElementById("btc2usd2").innerHTML = "$ " + x;
            // allvalues.push(id: "coindesk", value:usd2btc);
            onDataRecieve();
      });

      // var usd3btc3
      // Requesting Bitstamp API
      var client3 = new HttpClient();
      client3.get('https://www.bitstamp.net/api/v2/ticker/btceur', function(response3) {
          console.log(response3);
          var myJSON3 = response3;
          var myObj3 = JSON.parse(myJSON3);
          document.getElementById("bitstamppound").innerHTML = "€ " + myObj3.last;
          currencies.usd3btc3 = parseFloat(myObj3.last); //integer
          var bitstampus = 1 / currencies.usd3btc3;  //integer
          // document.getElementById("btc3usd3").innerHTML = "$ " + bitstampus;
          // allvalues.push(id:"Bitstamp", value:"usd3btc");
          onDataRecieve();
      });

      var client4 = new HttpClient();
      client4.get('https://api.bitfinex.com/v1/pubticker/btceur', function(response4) {
          console.log(response4);
          var myJSON4 = response4;
          var myObj4 = JSON.parse(myJSON4);
          currencies.bitfinexpound = parseFloat(myObj4.last_price); //integer
          document.getElementById("bitfinexpound").innerHTML = "€ " + currencies.bitfinexpound;
          // allvalues.push(id:"Bitfinex", value:"bitfinexusd");
          onDataRecieve();
      });

      var client5 = new HttpClient();
      client5.get('http://www.apilayer.net/api/live?access_key=7e3b59cbc5b8494c4b88db08bc104fe6&format=1', function(response5) {
          console.log(response5);
          var myJSON5 = response5;
          var myObj5 = JSON.parse(myJSON5);
          // currencies.bitfinexpound = parseFloat(myObj4.last_price); //integer
          document.getElementById("usd2euro").innerHTML = myObj5.quotes.USDEUR;

          currencies2.usd2euro = parseFloat(myObj5.quotes.USDEUR);

          currencies2.euro2usd = 1 * (1 / currencies2.usd2euro) ;

          document.getElementById("euro2usd").innerHTML = currencies2.euro2usd;
          // // allvalues.push(id:"Bitfinex", value:"bitfinexusd");
          onDataRecieve2();
      });

      var currencyNameMap2 = {
        'usd2euro': "EUR",
        'euro2usd': "USD"
      }


      var fiatcurrency = {};

        function onDataRecieve2 (data) {

        Object.assign(fiatcurrency, currencies2);

        // maxvalue
        var sellmax2 = Object.keys(fiatcurrency).reduce(function(a, b){ return fiatcurrency[a] > fiatcurrency[b] ? a : b });
        console.log(sellmax2);

        console.log(obj);

        //min value
        var buymin2 = Object.keys(fiatcurrency).reduce(function(a, b){ return fiatcurrency[a] < fiatcurrency[b] ? a : b });
        console.log(buymin2);

        document.getElementById("sellfiat").innerHTML =  currencyNameMap2[sellmax2];
        document.getElementById("buyfiat").innerHTML =  currencyNameMap2[buymin2];
      };



      // remove usd
          document.getElementById("exchangerate").innerHTML = " ";
          document.getElementById("bitfinex").innerHTML = '';
          document.getElementById("btc3usd3").innerHTML = '';
          document.getElementById("btc2usd2").innerHTML = '';
          document.getElementById("bitstamp").innerHTML = '';
          document.getElementById("coindesk").innerHTML = '';
          document.getElementById("exchangerate").innerHTML = '';
          document.getElementById("btc2usd").innerHTML = '';
          document.getElementById("sellmaxusd").innerHTML = '';
          document.getElementById("buyminusd").innerHTML = '';

          var currencyNameMap = {
            'btc2pound': "Coinbase",
            'coindeskeuro': "Coindesk",
            'usd3btc3': "Bitstamp",
            'bitfinexpound': "Bitfinex"
          }

          var obj = {};

            function onDataRecieve (data) {

            Object.assign(obj, currencies);

            //maxvalue
            var sellmax = Object.keys(obj).reduce(function(a, b){ return obj[a] > obj[b] ? a : b });
            console.log(sellmax);

            //min value
            var buymin = Object.keys(obj).reduce(function(a, b){ return obj[a] < obj[b] ? a : b });
            console.log(buymin);

            document.getElementById("sellmaxeuro").innerHTML =  currencyNameMap[sellmax];
            document.getElementById("buymineuro").innerHTML =  currencyNameMap[buymin];
          };



}
