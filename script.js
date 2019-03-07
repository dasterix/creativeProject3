/* let d = document.getElementById("weatherSubmit");
d.addEventListener();

const click = function(event){

}
 */

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function hide() {
  var x = document.getElementById("fDropDowns");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


/* 1st param in addEventListener is "click" which is the eventType, the second is the inner function
written and given right off the bat like in my CS 240 app */
document.getElementById("pokeSubmit").addEventListener("click", function(event) 
{
    event.preventDefault();
    const pokeName = document.getElementById("pokeInput").value;
    if (pokeName === "")
      return;
    console.log(pokeName);
   
    const url = "https://pokeapi.co/api/v2/pokemon/" + pokeName + "/"; 
    fetch(url)
      .then(function(response) 
      {
        if (response.ok === false)
        {
          let results = '<font color="white">';
          results += '<h2> 404 Pokemon Not Found </h2>';
          document.getElementById("pokeResults").innerHTML = results;  
          return;
        }
        return response.json();

      }).then(function(json) 
      {	
        console.log(json);


        let results = '<font color="white">';
        results += '<h2>' + capitalizeFirstLetter(json.name) + ' #' + json.id + "</h2>";
        results += '<img src="' + json.sprites.front_default + '"/>';
        results += '<img src="' + json.sprites.back_default + '"/>';
        
        if (json.types.length > 1)
        {
          results += '<h5>Types: ' + capitalizeFirstLetter(json.types[0].type.name) + " " + capitalizeFirstLetter(json.types[1].type.name) + '</h5>';
        }
        else
          results += '<h5>Type: ' + capitalizeFirstLetter(json.types[0].type.name) + '</h5>';

        let hey = json.height / 10;
        

        results += '<h5>Height: ' + hey + ' m ';
        results += ' Weight: ' + json.weight + ' lbs</h5>';
        
        document.getElementById("pokeResults").innerHTML = results;     
      });
      
    // here we get the forecast 
   
 /*  EXAMPLE OF JAVASCRIPT OBJECT similar to Json

    var pet = {
      type: "cat",
      name: "MOrris",
      hungry: true,
      sleeping: false,
      feed: function() {
          this.hungry = false;
      } 
   } */ 
});