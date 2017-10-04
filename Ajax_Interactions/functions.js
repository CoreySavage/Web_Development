document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons() {
  document.getElementById('zipCodeSubmit').addEventListener('click', function(event) {
    var req = new XMLHttpRequest();
    var zipCodeIn = document.getElementById("weatherInfo").value;
    req.open("GET", "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCodeIn + ",us&units=imperial&appid=b61f5964753788c474542f5e8220c5fe", true);
    req.addEventListener('load', function() {
      if(req.status >= 200 && req.status < 400){
            var response = JSON.parse(req.responseText);
            document.getElementById('city').textContent = response.name;
            document.getElementById('temp').textContent = response.main.temp;
            document.getElementById('humidity').textContent = response.main.humidity;
            document.getElementById('windSpeed').textContent = response.wind.speed;
          } else {
            console.log("Error in network request: " + request.statusText);
          }});
    req.send(null);
    event.preventDefault();
  });
}

document.addEventListener('DOMContentLoaded', bindButtonsPost);

function bindButtonsPost() {
  document.getElementById('formSubmit').addEventListener('click', function(event) {
    var req = new XMLHttpRequest();
    var payload = {text:null};
    payload.text = document.getElementById("postForm").value;
    req.open("POST", "http://httpbin.org/post", true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.addEventListener('load', function() {
      if(req.status >= 200 && req.status < 400){
            var response = JSON.parse(req.responseText);
            document.getElementById('returnedData').textContent = response.json.text;
          } else {
            console.log("Error in network request: " + request.statusText);
          }});
    req.send(JSON.stringify(payload));
    event.preventDefault();
  });
}
