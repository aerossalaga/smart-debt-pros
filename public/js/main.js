$(function() {
  // Mobile side nav functionality
  $('.header-hamburger').on('click', function() {
    $('body').addClass('side-nav-open');
  });
  $('.side-nav-close, .side-nav-overlay').on('click', function() {
    $('body').removeClass('side-nav-open');
  });

  // Set progress percentage dynamically
  $('.progress-circle').each(function () {
    var $el = $(this);
    var percent = parseInt($el.data('percent'), 10);
    var $circle = $el.find('.progress');
    var radius = 40.5;
    var circumference = 2 * Math.PI * radius;
    var offset = circumference - (percent / 100) * circumference;

    $circle.css('stroke-dashoffset', offset);
    $el.find('.percent-text').text(percent + '%');
  });

  // Info popup functionality
  $(document).on('click', '.question-item-info', function(e) {
    e.preventDefault();
    var $parent = $(this).closest('.question-item');
    var $tips = $parent.find('.question-item-info-tips').first();
    if ($tips.length) {
      // Clone the tips content for popup
      var $popup = $('<div class="question-info-popup-overlay"></div>');
      var $tipsContent = $tips.find('.question-item-info-tips-content').clone();
      $popup.append($('<div class="question-info-popup"></div>').append($tipsContent));
      $('body').append($popup).addClass('no-scroll');

      // Close popup on overlay click or on 'Continue' button
      $popup.on('click', function(e) {
        if ($(e.target).is('.question-info-popup-overlay')) {
          $popup.remove();
          $('body').removeClass('no-scroll');
        }
      });
      $popup.find('.question-item-info-tips-link').on('click', function() {
        $popup.remove();
        $('body').removeClass('no-scroll');
      });
    }
  });

  $('select.js-question-select').on('change', function() {
    $(this).toggleClass('has-value', !!this.value);
  });

  $('.btn-next').on('click', function() {
    // get the parent element that has .frm-question
    var parent = $(this).closest('.question');
    // check to see if the parent element contains input fields
    // if it does, we need to validate them
    var validinputs = true;
    if (parent.find('input, select').length > 0) {
      // The container has at least one input element
      // loop through each of the inputs
      parent.find('input, select').each(function(index, elem) {
        if (!elem.value) {
          validinputs = false;
          elem.classList.add('is-invalid');
          elem.classList.remove('is-valid');
        } else {
          // logic to set the zip code on the address step to whatever what provided for the initial zip code step
          if (elem.type == 'select-one') {
            if (!elem.value) {
              elem.classList.add('is-invalid');
              elem.classList.remove('is-valid');
            } else {
              elem.classList.remove('is-invalid');
              elem.classList.add('is-valid');
            }
          }
        }
      });
    }
    if (validinputs == true) {
      // hide the parent element
      $('.question').hide();
      // get the value from the data-this attribute
      var current = parent.data().this;
      // gets the next element defined for the current 
      var next = parent.data().next;
      // displays the next question
      parent.next('[data-this="' + next + '"]').show();

      if (next == 'eligibility-check') {
        $('.progress-bar').css('width', '100%').attr('aria-valuenow', progress);
        var redirect = 'https://yahoo.com';
      } else {
        var progress = $('[data-this*="' + next + '"]').data('progress');
        var $el = $('.progress-circle');
        $el.data('percent', progress);

        var radius = 38;
        var circumference = 2 * Math.PI * radius;
        var offset = circumference - (progress / 100) * circumference;

        $el.find('.progress').css('stroke-dashoffset', offset);
        $el.find('.percent-text').text(progress + '%');
        // $('.progress-bar').css('width', progress+'%').attr('aria-valuenow', progress);
      }
      scroll();
    }
  });

  $('.btn-previous').on('click', function() {
    var parent = $(this).closest('.question');
    var current = parent.data().this;

    // Hide current
    $('.question').hide();

    // Show previous visible .question with data-this
    var $prev = parent.prevAll('.question').first();
    $prev.show();

    // Update progress circle based on previous step
    var progress = $prev.data('progress');
    var $el = $('.progress-circle');
    $el.data('percent', progress);

    var radius = 38;
    var circumference = 2 * Math.PI * radius;
    var offset = circumference - (progress / 100) * circumference;

    $el.find('.progress').css('stroke-dashoffset', offset);
    $el.find('.percent-text').text(progress + '%');

    scroll();
  });

  function scroll() {
    if ($('.progress-bar').length) {
      $('html, body').animate({
        scrollTop: $('.progress-bar').offset().top - 50
      }, 300);
    }
  }
});
