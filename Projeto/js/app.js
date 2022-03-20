Vue.createApp({
  data() {
    return {
      pokemonList: [
        { name: "Charizard", number: "006" },
        { name: "Squirtle", number: "007" },
        { name: "Pikachu", number: "025" },
        { name: "Celebi", number: "251" },
        { name: "Lucario", number: "448" },
        { name: "Delphox", number: "655" },
      ],
    };
  },
}).mount("#app");
