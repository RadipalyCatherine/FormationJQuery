/*-----------------------------------------
            LE CHAINAGE DE METHODES
  ----------------------------------------*/

  $(function() { // Je m'assure que JQ soit chargé avant de l'utiliser.

      // JQuery is ready!

      //-- Je souhaite cacher toutes les div de ma page HTML?
      $('div').hide('slow', function(){
          alert('Fin du Hide');
          //NB : La fonction s'executera pour chaque élément du selecteur.

          // On joue un peu avec le css
          $('div').css('background-color';'yellow');
          $('div').css ('color', 'red');

          // On fait réapparaitre les div
          $('div').show('slow');

      });
    
});

/**
 * En utilisant le chainage de méthode,vous
 * pouvez faire s'enchainer plusieurs fonctions
 * les unes après les autres.
 * --------------------------------
 * Toujours en partant d'un sélecteur JQ $('...')
 */

 $('p')
 .hide(2000)
 .css('color', 'blue')
 .css('font-size','20px')
 .delay(2000)
 .show(500);

 le css peut être fusionné
 
 $('p')
 .hide(2000)
 .css({'color': 'blue','font-size':'20px'})
 .delay(2000)
 .show(500);

});
