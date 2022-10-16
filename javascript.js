let chaptersObj = {

chapitre1 : {
    subtitle: "entre dans la vr",
    text: "bienvenue en vr!",
    img: "assets/img/entrer_vr.PNG",
    options: [
        
        {text:"continuer", action:"goToChapter('chapitre2')"}]},

chapitre2  : {
    subtitle: "prêt?",
    text: "êtes vous prêt?",
    img: "assets/img/bravo.png",
    options: [
                
        {text:"non", action:"goToChapter('chapitre1')"}, 
            
        {text:"oui", action:"goToChapter('chapitre3')"}]},

chapitre3  : {
    subtitle: "entrez jeu",
    text: "vous entrez dans le jeu",
    img: "assets/img/entrer_vr.PNG",
    options: [
                
        {text:"continuer", action:"goToChapter('chapitre4')"}]},
    
chapitre4  : {
    subtitle: "Choix de l'arme",
    text: "veuillez choisir une arme",
    img: "assets/img/choix_arme.png",
    options: [
                
        {text:"épée", action:"goToChapter('chapitre5')"}, 
            
        {text:"bouclier", action:"goToChapter('chapitre5')"}]},
        
chapitre5  : {
    subtitle: "entre dans village",
    text: "vous entrez dans un village",
    img: "assets/img/village1.jpg",
    options: [
                
        {text:"continuer", action:"goToChapter('chapitre6')"}]},

chapitre6  : {
    subtitle: "homme nouriture",
    text: "un homme demande pour de la nouriture",
    img: "assets/img/village_fermier.png",
    options: [
                
        {text:"lui donner une patate", action:"goToChapter('chapitre7')"}, 
            
        {text:"l'ignorer", action:"goToChapter('chapitre7')"}]},
        
chapitre7  : {
    subtitle: "aventure",
    text: "vous partez en aventure",
    img: "assets/img/aventure.jpg",
    options: [
                
        {text:"aller dans les plaines", action:"goToChapter('chapitre8')"}, 
            
        {text:"aller vers l'ocean", action:"goToChapter('chapitre16')"}]},
        
chapitre8  : {
    subtitle: "poulet",
    text: "un poulet vous affronte ",
    img: "assets/img/poulet_affronte.png",
    options: [
                
        {text:"vous avez l'épée", action:"goToChapter('chapitre9')"}, 
            
        {text:"vous avez le bouclier", action:"goToChapter('chapitre13')"}]},
        
chapitre9  : {
    subtitle: "poulet attaque épée",
    text: "quelle attaque voulez vous faire? ",
    img: "assets/img/poulet_epee.png",
    options: [
                
       {text:"tournez en rond avec l'épée", action:"goToChapter('chapitre10')"}, 
            
       {text:"attaquer avec un coup verticale", action:"goToChapter('chapitre11')"}]},
        
chapitre10  : {
    subtitle: "poulet vous tue épée",
    text: "vous êtes étourdit et le poulet vous tue ",
    img: "assets/img/poulet_vous_mort_epee.png",
    options: [
                
       {text:"retour à la case départ ", action:"goToChapter('chapitre2')"}]},
        
chapitre11  : {
    subtitle: "poulet battu",
    text: "vous avez battu le poulet ",
    img: "assets/img/poulet_mort.png",
    options: [
                
        {text:"continuer", action:"goToChapter('chapitre12')"}]},

chapitre13  : {
    subtitle: "poulet attaque bouclier",
    text: "quelle attaque voulez vous faire?",
    img: "assets/img/poulet_bouclier.png",
    options: [
                
        {text:"charger vers le poulet", action:"goToChapter('chapitre11')"}, 
            
        {text:"enfoncer le bouclier pour faire vibrer le sol", action:"goToChapter('chapitre14')"}]},

chapitre14  : {
    subtitle: "poulet vous tue bouclier",
    text: "rien ne se produit et le bouclier est prit dans le sol. Le poulet vous tue",
    img: "assets/img/poulet_vous_mort_bouclier.png",
    options: [
                
        {text:"retour à la case départ ", action:"goToChapter('chapitre2')"}]},

chapitre12  : {
    subtitle: "poulet poursuis",
    text: "le frère du poulet vous poursuis",
    img: "assets/img/poulet_frere.png",
    options: [
                
        {text:"l'affronter", action:"goToChapter('chapitre15')"}, 
            
        {text:"fuir", action:"goToChapter('chapitre24')"}]},

chapitre15  : {
    subtitle: "poulet poursuis mort",
    text: "le poulet est trop rapide, rénitialisation de votre progression",
    img: "assets/img/poulet_frere_vous_mort.png",
    options: [
                
        {text:"retour à la case départ", action:"goToChapter('chapitre2')"}]},

chapitre16  : {
    subtitle: "canard",
    text: "un canard vous affronte",
    img: "assets/img/canard.png",
    options: [
                
        {text:"vous avez l'épée", action:"goToChapter('chapitre17')"}, 
            
        {text:"vous avez le bouclier", action:"goToChapter('chapitre20')"}]},

chapitre17  : {
    subtitle: "canard attaque épée",
    text: "quelle attaque voulez vous faire?",
    img: "assets/img/canard_epee.png",
    options: [
                
        {text:"lancer l'épée dans l'eau pour faire des vagues", action:"goToChapter('chapitre18')"}, 
            
        {text:"atendre que le canard vienne à vous pour l'attaquer quand il ne le sait pas", action:"goToChapter('chapitre19')"}]},

chapitre18  : {
    subtitle: "poulet vous tue épée",
    text: "le canard flotte et vous tue",
    img: "assets/img/canard_vous_mort_epee.png",
    options: [
                
        {text:"retour à la case départ", action:"goToChapter('chapitre2')"}]},       

chapitre19  : {
    subtitle: "canard battu",
    text: "vous avez battu le canard",
    img: "assets/img/canard_mort.png",
    options: [
                
        {text:"continuer", action:"goToChapter('chapitre22')"}]},

chapitre20  : {
    subtitle: "canard attaque bouclier",
    text: "quelle attaque voulez vous faire?",
    img: "assets/img/canard_bouclier.png",
    options: [
                
        {text:"flotter sur le bouclier pour se rendre au canard", action:"goToChapter('chapitre19')"}, 
            
        {text:"lancer le bouclier comme un disque", action:"goToChapter('chapitre21')"}]},

chapitre21  : {
    subtitle: "canard vous tue",
    text: "le bouclier tombe dans l'eau et le canard vous tue",
    img: "assets/img/canard_vous_mort_bouclier.png",
    options: [
                
        {text:"retour à la case départ", action:"goToChapter('chapitre2')"}]},

chapitre22  : {
    subtitle: "brille eau",
    text: "vous voyez quleque chose briller au fond de l'eau",
    img: "assets/img/brille.png",
    options: [
                
        {text:"regarder de plus pres", action:"goToChapter('chapitre23')"}, 
            
        {text:"partir", action:"goToChapter('chapitre24')"}]},

chapitre23  : {
    subtitle: "poisson vous tue",
    text: "un poisson lanterne vous avale tout rond, rénitialisation de votre progression",
    img: "assets/img/poisson_mort.png",
    options: [
                
        {text:"retour à la case départ", action:"goToChapter('chapitre2')"}]},  

chapitre24  : {
    subtitle: "village explosion",
    text: "vous allez vers un village et une explosion se produit",
    img: "assets/img/village_explosion.png",
    options: [
                
        {text:"continuer", action:"goToChapter('chapitre25')"}]},

chapitre25  : {
    subtitle: "dragon",
    text: "un dragon vous intercepte",
    img: "assets/img/dragon.png",
    options: [
                
        {text:"vous avez l'épée", action:"goToChapter('chapitre26')"}, 
            
        {text:"vous avez le bouclier", action:"goToChapter('chapitre28')"}]},   

chapitre26  : {
    subtitle: "dragon action épée",
    text: "quelle action voulez vous faire?",
    img: "assets/img/dragon_epee.png",
    options: [
                
        {text:"faire des attaques sur les jambes du dragon", action:"goToChapter('chapitre29')"}, 
            
        {text:"fuir", action:"goToChapter('chapitre27')"}]}, 

chapitre27  : {
    subtitle: "dragon tue",
    text: "le dragon vous crache des flames au moment où vous tournez le dos",
    img: "assets/img/mort_dragon.png",
    options: [
                
        {text:"retour à la case départ", action:"goToChapter('chapitre2')"}]}, 

chapitre28  : {
    subtitle: "dragon action bouclier",
    text: "un dragon vous intercepte",
    img: "assets/img/dragon_bouclier.png",
    options: [
                
        {text:"fuir", action:"goToChapter('chapitre27')"}, 
            
        {text:"renvoyer le feu vers le dragon en vous protégeant", action:"goToChapter('chapitre29')"}]},  

chapitre29  : {
    subtitle: "dragon affaibli",
    text: "le dragon est affaibli. Un passant se raproche",
    img: "assets/img/dragon_affabli.png",
    options: [
                
        {text:"continuer", action:"goToChapter('chapitre30')"}]}, 

chapitre30  : {
    subtitle: "aidé homme du début",
    text: "avez vous aidé l'homme du début",
    img: "assets/img/dragon_avez_vous.png",
    options: [
                
        {text:"non", action:"goToChapter('chapitre31')"}, 
            
        {text:"oui", action:"goToChapter('chapitre32')"}]},  

chapitre31  : {
    subtitle: "dragon mange",
    text: "le dragon vous mange tout rond ",
    img: "assets/img/dragon_mange.png",
    options: [
                
        {text:"retour à la case départ", action:"goToChapter('chapitre2')"}]}, 

chapitre32  : {
    subtitle: "patate tue",
    text: "l'homme lance la patate dur le dragon et le tue",
    img: "assets/img/dragon_mort.png",
    options: [
                
        {text:"continuer", action:"goToChapter('chapitre33')"}]},  

chapitre33  : {
    subtitle: "fin",
    text: "bravo vous avez vaincu le dragon, le plus grand monstre du jeux !",
    img: "assets/img/bravo.png",
    options: [
                
        {text:"refaire l'aventure", action:"goToChapter('chapitre2')"}]},  

};



function goToChapter (chapterName) 
{
    
    document.querySelector("h1").innerHTML=chaptersObj[chapterName]["subtitle"];
    document.querySelector("h2").innerHTML=chaptersObj[chapterName]["text"];
    document.querySelector(".imgchange").innerHTML= `<img src="${chaptersObj[chapterName]["img"]}" class="image">`;
    document.getElementById("texte1").innerHTML=chaptersObj[chapterName]["options"][0]["text"];
    document.getElementById("texte2").innerHTML=chaptersObj[chapterName]["options"][1]["text"];
    document.getElementById("texte3").innerHTML=chaptersObj[chapterName]["options"][2]["text"];

    

console.log(chaptersObj[chapterName]["subtitle"]);
console.log(chaptersObj[chapterName]["text"]);
};