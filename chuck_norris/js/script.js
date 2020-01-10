//! XHR METHOD
//? Button for random facts
var random_button = document.getElementById("random-button");
random_button.addEventListener("click", function() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var response = JSON.parse(xhr.responseText);
    var facts = document.getElementById("facts-div");
    facts.innerText = "";

    var fact = document.createElement("p");
    facts.appendChild(fact);
    fact.innerHTML = response[0].fact;
  };
  xhr.open(
    "GET",
    "http://jihane.fr/ajax/chucknorris.php/get?data=tri:alea;type:txt;nb:1"
  );
  xhr.send();
});

//! FETCH METHOD
//? Button for top 10 facts
var top10_button = document.getElementById("top10-button");
var page = 1;
top10_button.addEventListener("click", function() {
  top10_function();
});

function top10_function() {
  fetch(
    "http://jihane.fr/ajax/chucknorris.php/get?data=tri:top;type:txt;nb:10;page:" +
      page
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var facts = document.getElementById("facts-div");
      facts.innerText = "";
      for (i = 0; i < 10; i++) {
        var top10_fact = document.createElement("p");
        facts.appendChild(top10_fact);
        document.getElementById("facts-div").innerHTML += data[i].fact;
      }
      //? Buttons for Next and Previous
      var previous_button = document.getElementById("previous-button");
      document.getElementById("next-button").className = "visible";
      page == 1
        ? (previous_button.className = "invisible")
        : (previous_button.className = "visible");
    });
}

var next_button = document.getElementById("next-button");
next_button.addEventListener("click", function() {
  page++;
  top10_function();
});

var previous_button = document.getElementById("previous-button");
previous_button.addEventListener("click", function() {
  page--;
  top10_function();
});

//? Button for top 20 facts
var top20_button = document.getElementById("top20-button");
top20_button.addEventListener("click", function() {
  fetch(
    "http://jihane.fr/ajax/chucknorris.php/get?data=tri:last;type:txt;nb:20"
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var facts = document.getElementById("facts-div");
      facts.innerText = "";
      for (i = 0; i < 20; i++) {
        var top_fact = document.createElement("p");
        facts.appendChild(top_fact);
        document.getElementById("facts-div").innerHTML += data[i].fact;
      }
    });
});
