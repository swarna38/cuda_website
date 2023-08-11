  // init Isotope
  var $grid = $('.portfolio-main').isotope({
    // options
  });
  // filter items on button click
  $('.portfolio-button').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  // =====isotope end====
    // <!-- aos code===== -->
    AOS.init({
      offset: 300,
      duration:1800,
  }
  );
  // <!-- =====aos js end==== -->




 