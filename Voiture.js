class voiture {
    constructor (marque, modele, couleur, annee) {
        this.marque = marque ; 
        this.modele = modele ; 
        this.couleur = couleur ; 
        this.annee = annee ; 
    }
    Details() {
        console.log("Bonjour la marque de votre voiture est "+marque+" le modele est "+modele+ " la couleur est "+couleur+ " et l'année de votre véhicule est "+annee)
    }
}

class garage {
    constructor (listvoiture){
        this.listvoiture = listvoiture ;
    } 
        searchannee(annee){
            if (voiture.annee === annee) {
                console.log(details);
        }
        searchmarque(marque){
            if (voiture.marque === marque) {
                console.log(details);
        }
        searchmarquefiltre(troislettres){
            for (let i = 0; i < voitures.length; i++) {
                if (voiture.marque.includes(troisLettres)) {
                    console.log(voiture.details);
            }
        }
        }
    }
}
}