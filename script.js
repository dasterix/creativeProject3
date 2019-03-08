/* let d = document.getElementById("weatherSubmit");
d.addEventListener();

const click = function(event){

}
 */

Vue.component('star-rating', VueStarRating.default);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

 let app = new Vue({
   el: '#app',
   data: {
     current: {
       height: '',
       id: '',
       name: '',
       order: '',
       weight: '',
       types: [],
       sprites: {}
     },

     loading: false,
     addedName: '1',
     addedComment: '',
     comments: {},
     ratings: {},
     average: 0,
     },

     computed: {
      avgRating() {
        if (this.ratings[this.number] === undefined)
            return 0;
        else { 
            this.average = this.ratings[this.number].sum / this.ratings[this.number].total;
        }
        return (Math.round(this.average * 100)  / 100);
        },
     },
   
    created() {
      this.getPokemon();
    },

    methods: {
      getPokemon(){
        axios.get('https://pokeapi.co/api/v2/pokemon/' + this.addedName + '/')
        .then(response => {
          this.loading = true;
          this.current = response.data;
          
          if (this.types.length > 1)
          {
            this.types =  capitalizeFirstLetter(this.types[0].type.name) + " " + capitalizeFirstLetter(this.types[1].type.name);
          }
          else
            this.types = capitalizeFirstLetter(this.types[0].type.name);

          this.current.name = capitalizeFirstLetter(this.current.name);
          Vue.set(app.name);
          this.loading = false;
          return true;
        })
        .catch(error => {
          this.loading = false;
          console.log(error)
        })
      },

      pokeSubmit(){
        console.log("WE ENTERED THE LISTENER")
        let pokeName = document.getElementById("pokeInput").value;
        if (pokeName === "")
          return;
        this.addedName = pokeName;
        Vue.set(this.addedName);
        console.log(pokeName); 
        getPokemon();
      },

      setRating(rating){
        // Handle the rating
        if (!(this.number in this.ratings))
        Vue.set(this.ratings, this.number, {
          sum: 0,
          total: 0
        });
        this.ratings[this.number].sum += rating;
        this.ratings[this.number].total += 1;
      },
    }

 });

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