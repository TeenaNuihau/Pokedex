const app = Vue.createApp({
    data() {
        return {
            pokemons: [{}],
            version: 'silver',
            forms: [{}],
            sprites: [{}],
            image: {},
            types: [{}],
            height: 0,
            weight: 0,
        }
    },
    mounted() {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=40&offset=0")
            .then(response => response.json())
            .then(data => (
                this.pokemons = data.results))
            
    },
    methods: {
        getIdByUrl(url) {
            const index = String(url).split('/')[6]
            return index
        },
        getImage(id) {
            const image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + id + ".png"
            return image
        },
        getInfos(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => (this.forms = data.forms)),
            fetch(url)
                .then(response => response.json())
                .then(data => (this.types = data.types))
            }
    }
})