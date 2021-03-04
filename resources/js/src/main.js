//
// Main JS
//
import HomeLib from '../libs/Home';

(function ($) {
  "use strict";

  $(document).ready(function ()
  {
    // Home
    new HomeLib().init();
  });

})(jQuery);
