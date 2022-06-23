//size is length in centimeters.
const database={
fish: [
    {
        petName: "Lump",
        commonName: "Warty Frogfish",
        latinName:"Antennarius maculatus",
        harvestSite: "Solomon Islands",
        diet: "live feeder guppies",
        size: 7,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/KumadoriIUOose.jpg/240px-KumadoriIUOose.jpg",
        harvestComment: "Found this little guy struggling for life on the reef."
    },
    {
        petName: "Tiny Tim",
        commonName: "Clown Fish",
        latinName:"Amphiprion percula",
        harvestSite: "Solomon Islands",
        diet: "brine shrimp, Omega One: Marine Flakes",
        size: 4.6,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Amphiprion_clarkii_Gratwicke.jpg/320px-Amphiprion_clarkii_Gratwicke.jpg",
        harvestComment: "Found this little guy struggling for life on the reef."
    },
    {
        petName: "Cruella",
        commonName: "Gold Spotted Spinefoot",
        latinName:"Siganus punctatus",
        harvestSite: "Western Caroline Islands",
        diet: "Ocean Nutrition: Green Marine Algae",
        size: 13,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Goldspotted_spinefoot_Saltwater_Fish_3008px.jpg/320px-Goldspotted_spinefoot_Saltwater_Fish_3008px.jpg",
        harvestComment: "Found this little guy struggling for life on the reef."
    }
]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}