/*!
* Start Bootstrap - Resume v7.0.4 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
function initNavbar() {
  if (
    !$firstSection.is('.parallax-section, .dark-bg, .colored-bg') &&
    $homeSlider.length === 0
  ) {
    $navBar.addClass('stick');
  }

  if ($firstSection.is('.parallax-section.text-dark')) {
    $body.addClass('light-slide');
  }

  $navBar.find('.navigation-menu>li').slice(-2).addClass('last-elements');

  $('.menu-toggle, .toggle-nav').on('click', function(event) {
    event.preventDefault();
    if ($window.width() < 992) {
      $(this).find('.hamburger').toggleClass('is-active');

      $('#navigation').slideToggle(400);
      $navBar.find('.cart-open').removeClass('opened');
    }
  });

  $.merge($navBar, $asideNav).on('click', '.navigation-menu li.menu-item-has-children>a', function(e) {
    if ($window.width() < 992) {
      e.preventDefault();
      $(this).parent('li').toggleClass('opened').find('.submenu:first').slideToggle();
    }
  });

  $('#navigation .navigation-menu a[data-scroll="true"]').on('click', function() {
    if ($window.width() < 992) {
      $('.menu-toggle').trigger('click');
    }
  });

  $body.scrollspy({
    target: '#navigation',
  });

  $navBar.on('click', '.cart-open>a', function(event) {
    if ($window.width() < 992) {
      event.preventDefault();
      event.stopPropagation();

      if ($('#navigation').is(':visible')) {
        $('.menu-toggle').trigger('click');
      }

      $(this).parent('.cart-open').toggleClass('opened');
    }
  });
