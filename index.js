
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({optionsSuccessStatus: 200}));  


// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


app.get("/api/:date?", (req, res) => {
  const dateParam = req.params.date;
  let date;

  
 if (/^\d+$/.test(dateParam)) {
  date = new Date(parseInt(dateParam));
} else {
   
     if (/^\d+$/.test(dateParam)) {
      date = new Date(timestamp);
    } else {
      date = new Date(dateParam);
    }
  }

  if (date.toString() === "Invalid Date") {
    res.json({ error: "Invalid Date" });
  } else {
    res.json({
      unix: date.getTime(),
      utc: date.toUTCString()
    });
  }
});



var listener = app.listen(process.env.PORT || 5000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
