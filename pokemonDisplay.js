app.component('pokemon-display', {
    template:
    /*html*/
    `
    <div class="pokemon-display">
        <!--<div> {{ truc }} </div>
        <div v-for="form in forms"> {{ form.name }} </div>
         On cherche l'id du Pokemon
        <div v-for="index in game_indices"> {{ index.game_index }} </div>
         On cherche l'image du Pokemon
        <div>{{ sprites.other }}</div>
         On cherche les types du Pokemon
        <div v-for="type in types"> {{ type.type }} </div>-->
    </div>        
    `,
    data() {
        return {
            forms: [{}],
            game_indices: [{}],
            sprites: {},
            types: [{}],
            num: 0,
        }
    },
    mounted() {
        /*Chercher comment remplacer par pokemon.url*/
        fetch(this.url)
            .then(response => response.json())
            .then(data => (this.forms = data.forms))
        fetch("https://pokeapi.co/api/v2/pokemon/ditto")
            .then(response => response.json())
            .then(data => (this.game_indices = data.game_indices))
        fetch("https://pokeapi.co/api/v2/pokemon/ditto")
            .then(response => response.json())
            .then(data => (this.sprites = data.sprites))
        fetch("https://pokeapi.co/api/v2/pokemon/ditto")
            .then(response => response.json())
            .then(data => (this.types = data.types))
    },
})