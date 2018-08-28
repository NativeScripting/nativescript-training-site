"use strict";


// toggle menu for mobile
function mobileDropdown () {
  if($('#mega-menu-wrapper').length) {
    $('#mega-menu-wrapper .nav li.dropdown-holder').append(function () {
      return '<i class="fa fa-caret-down icon" aria-hidden="true"></i>';
    });
    $('#mega-menu-wrapper .nav li.dropdown-holder .icon').on('click', function () {
      $(this).parent('li').children('ul').slideToggle();
    });
  }
}

// DOM ready function
jQuery(document).on('ready', function() {
  mobileDropdown ();
});