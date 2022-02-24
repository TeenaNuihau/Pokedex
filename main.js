const app = Vue.createApp({
    data() {
        return {
            pokemons: [{}],
            version: 'silver',
            id: 0,
            infos: {},
            isChosen: false,
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

        choose() {
            this.isChosen = !this.isChosen
        },


        getInfos(url) {
            this.id = this.getIdByUrl(url)
            this.choose()
            fetch(url)
                .then(response => response.json())
                .then(data => (this.infos = data))
        },
        getForms(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => (this.infos.forms = data.forms))
        },
        getHeight(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => (this.infos.height = data.height))
        },
        getWeight(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => (this.infos.weight = data.weight))
        },
        getTypes(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => this.infos.types = data.types)
        },
        
    }
})
