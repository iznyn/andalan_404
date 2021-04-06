//
// Main JS
//
import RecipeLib from '../libs/Recipe';

(function ($) {
  "use strict";

  $(document).ready(function ()
  {
    // Recipe
    new RecipeLib().init();
  });

})(jQuery);
