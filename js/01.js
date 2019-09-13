/*-----------------------------------------------------------

                    LA DISPONIBILITE DU DOM

A partir du moment ou mon DOM, c'est-à-dire l'ensemble de l'arborescence de ma page HTML est complètement chargé;
 je peux commencer à utiliser jQuery.

Je vais mettre l'ensemble de mon code dans une fonction, qui sera appelée AUTOMATIQUEMENT par JQuery lorsque le DOM sera entièrement défini.

Il existe trois façons de le faire:

Méthode 1

jQuery(document).ready(function () {
    //-- Ici mon DOM est entièrement chargé;
    //-- Je peux écrire mon code 
    console.log( 'jQuery is ready to rock !);
});

Méthode 2:(Souvent utiliser)

$(document).ready(function () { 
    console.log( 'jQuery is ready to rock !);
});

Méthode 3:(méthode privilégiée)
$( function (){
    console.log( 'jQuery is ready to rock !');

});
.                                                                                                                                                                                                                                                          
Méthode 4: (méthode en ES6) (Pas recommandé)
$(()) => {
    alert( 'Bienvenue dans ce cours JQ !');
});


