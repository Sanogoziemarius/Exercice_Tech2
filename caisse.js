//Déclaration des variables
const budget_client=20000
const prix_cahier=1500
const quantite_cahiers=4
const prix_stylo=500
const quantite_stylos=3
const prix_total_cahiers= prix_cahier * quantite_cahiers
const prix_total_stylos= prix_stylo * quantite_stylos 
//Calcul du montant des cahiers et stylos
console.log("====== CAISSE======")
console.log("Cahiers:", prix_total_cahiers, "FCFA")
console.log("Stylos:", prix_total_stylos, "FCFA")
//Calcul du montant total des achats et utilisation de la condition
console.log("Total:", prix_total_cahiers + prix_total_stylos, "FCFA")
const total=prix_total_cahiers + prix_total_stylos
if (total<= budget_client) {
            console.log("suffisant")
    }else{
            console.log("insufisant")}
            console.log(" ")
//mise en place de la boucle pour afficher les numéros
 for (let i=1; i<=5;i++){
        console.log("Achat numéro",+i)
 }