import { getFish } from './database.js'
export const FishList =() => {
        // Invoke the function that you imported from the database module
    const fishes = getFish()

        // Start building a string filled with HTML syntax
    const htmlString = `<section class ="fishList">`;  // check index.html for the actual language used

    for (const fish of fishes){
        //build the htmlString like it is in index.html but substituting in variable imported from database.js
        htmlString += `<div class="fishlist--item">
        <img class="fishlist--pic" src="${fish.image}" alt="${fish.petName} the ${fish.commonName}">
        
        <div class="fishlist--specs">
            <div class="fishlist--specs-name">${fish.petName} (${fish.commonName})
                <div class="fishlist--specs-name-species">${fish.latinName}</div>
            </div>
            
            <div class="fishlist--specs-site">${fish.harvestSite}
                <div class="fishlist--specs-site-comment">${fish.harvestComment}</div>
            </div>
            
            <div class="fishlist--specs-site">${fish.diet}
                <div class="fishlist--specs-site-comment">${fish.size}cm</div>
            </div>
        </div>    
        </div>`;

    }
    htmlString += `</section>`;

    return htmlString;

}