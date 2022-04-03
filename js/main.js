$.fn.isInViewport = function () {
    var elementTop = $(this).offset().left;
    var elementBottom = elementTop + $(this).outerWidth();
    var viewportTop = $(window).scrollLeft();
    var viewportBottom = viewportTop + $(window).width();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

var total = 0;
var currentScene;
var nextScene;
var previousScene;

$(window).on('resize scroll', function(){
  $('.scenes').each(function() {

    if ($(this).isInViewport()) {
      currentScene = $(this).attr('id');
      nextScene = $(this).next(".scenes").attr('id');
      previousScene = $(this).prev(".scenes").attr('id');

      $("#next").attr('href', "#" + nextScene);
      $("#back").attr('href', "#" + previousScene);
    }
  });
});

var geld = 0;
var energie = 0;

var keuzeNummer;

$("a").on('click', function(event) {
  
  if (this.hash !== "") {

    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
      scrollLeft: $(hash).offset().left
    }, 800, function(){
   
      window.location.hash = hash;
    });
  }
});

$("body").on('click', '.keuzes', function() {
  keuzeNummer = $(this).attr("alt");
  $(this).css('border', 'black 3px solid');
  $(this).css('color', 'black');
  $(this).css('background', 'white');
  $.ajax({
    url:'template-parts/keuze'+ keuzeNummer +'.php',
    beforeSend: function(){
      $('#keuze'+ keuzeNummer).attr('alt', '');
    },
    success: function(data){
      $('#wrapper').append(data);
      $(".scenes").each(function(index){
        total = index + 1;
    });
    $('.scenes').each(function() {

      if ($(this).isInViewport()) {
        currentScene = $(this).attr('id');
        nextScene = $(this).next(".scenes").attr('id');
        previousScene = $(this).prev(".scenes").attr('id');

        $("#next").attr('href', "#" + nextScene);
        $("#back").attr('href', "#" + previousScene);
      }
    });
    }
  });
});

$("body").one('click', '#keuze9', function() {
  $(this).attr('disabled', true);
});

$("body").on('click', '#start', function() { 
  $("#cover").fadeOut(1200); 
});

$("body").one('click', '#keuze10', function() {
  $('#keuze11').attr('disabled', true);
  $('#keuze12').attr('disabled', true);
  $('#progress').css({"background-image": "url(img/progress4.png)"});
});
$("body").one('click', '#keuze11', function() {
  $('#keuze10').attr('disabled', true);
  $('#keuze12').attr('disabled', true);
  $('#progress').css({"background-image": "url(img/progress4.png)"});
});
$("body").one('click', '#keuze12', function() {
  $('#keuze10').attr('disabled', true);
  $('#keuze11').attr('disabled', true);
  $('#progress').css({"background-image": "url(img/progress4.png)"});
});

$("body").one('click', '#keuze3', function() {
  $('#keuze8').attr('disabled', true);
  $('#progress').css({"background-image": "url(img/progress1.png)"});
});
$("body").one('click', '#keuze8', function() {
  $('#keuze3').attr('disabled', true);
  $('#progress').css({"background-image": "url(img/progress1.png)"});
});
$("body").one('click', '#keuze9', function() {
  $('#progress').css({"background-image": "url(img/progress2.png)"});
});
$("body").one('click', '#value17', function() {
  $('#value8').attr('disabled', true);
  $('#progress').css({"background-image": "url(img/progress5.png)"});
});
$("body").one('click', '#value18', function() {
  $('#value17').attr('disabled', true);
  $('#progress').css({"background-image": "url(img/progress5.png)"});
});
$("body").one('click', '#value23', function() {
  $('#value24').attr('disabled', true);
  $('#progress').css({"background-image": "url(img/progress6.png)"});
});
$("body").one('click', '#value24', function() {
  $('#value23').attr('disabled', true);
  $('#progress').css({"background-image": "url(img/progress6.png)"});
});
$("body").one('click', '#value37', function() {
  $('#value38').attr('disabled', true);
  $('#progress').css({"background-image": "url(img/progress9.png)"});
});
$("body").one('click', '#value38', function() {
  $('#value37').attr('disabled', true);
  $('#progress').css({"background-image": "url(img/progress9.png)"});
});

//adding values

var valueGeld;
var valueEnergy;
var morningGeld;
var afternoonGeld;
var eveningGeld;
var morningEnergy;
var afternoonEnergy;
var eveningEnergy;

$("body").on('click', '.valueKeuzesGoed', function() {
  valueGeld = $(this).attr("data-geld");
  valueEnergy = $(this).attr("data-energy");
  geld = geld + +valueGeld;
  energie = energie + +valueEnergy;
  $.ajax({
    url:'template-parts/geldGoed.php',
    beforeSend: function(){
      $('.icons').empty();
    },
    success: function(data){
      $('.icons').append(data);
      $(this).css('border', 'black 3px solid');
      $(this).css('color', 'black');
      $(this).css('background', 'white');
      console.log(geld);
    }
  });
});

$("body").one('click', '#keuze1', function() {
  geld = geld + 5.25;
  energie = energie + 21.9;
  $('#keuze2').attr('disabled', true);
  $.ajax({
    url:'template-parts/geldGoed.php',
    beforeSend: function(){
      $('.icons').empty();
    },
    success: function(data){
      $('.icons').append(data);
    }
  });
});
$("body").one('click', '#keuze13', function() {
  geld = geld + 84;
  energie = energie + 350;
  $('#keuze14').attr('disabled', true);
  $('#keuze15').attr('disabled', true);
  $('#progress').css({"background-image": "url(img/progress8.png)"});
  $.ajax({
    url:'template-parts/geldGoed.php',
    beforeSend: function(){
      $('.icons').empty();
    },
    success: function(data){
      $('.icons').append(data);
    }
  });
});
$("body").one('click', '#keuze15', function() {
  geld = geld + 84;
  energie = energie + 350;
  $('#keuze13').attr('disabled', true);
  $('#keuze14').attr('disabled', true);
  $('#progress').css({"background-image": "url(img/progress8.png)"});
  $.ajax({
    url:'template-parts/geldGoed.php',
    beforeSend: function(){
      $('.icons').empty();
    },
    success: function(data){
      $('.icons').append(data);
    }
  });
});

// take away values

$("body").on('click', '.valueKeuzesSlecht', function() {
  valueGeld = $(this).attr("data-geld");
  valueEnergy = $(this).attr("data-energy");
  geld = geld - +valueGeld;
  energie = energie - +valueEnergy;
  $(this).css('border', 'black 3px solid');
  $(this).css('color', 'black');
  $(this).css('background', 'white');
  $.ajax({
    url:'template-parts/geldSlecht.php',
    beforeSend: function(){
      $('.icons').empty();
    },
    success: function(data){
      $('.icons').append(data);
      console.log(geld)
    }
  });
});

$("body").one('click', '#keuze2', function() {
  geld = geld - 84;
  energie = energie - 350;
  $('#keuze1').attr('disabled', true);
  $.ajax({
    url:'template-parts/geldSlecht.php',
    beforeSend: function(){
      $('.icons').empty();
    },
    success: function(data){
      $('.icons').append(data);
    }
  });
});
$("body").one('click', '#keuze14', function() {
  geld = geld - 5.25;
  energie = energie - 21.9;
  $('#keuze13').attr('disabled', true);
  $('#keuze15').attr('disabled', true);
  $('#progress').css({"background-image": "url(img/progress8.png)"});
  $.ajax({
    url:'template-parts/geldSlecht.php',
    beforeSend: function(){
      $('.icons').empty();
    },
    success: function(data){
      $('.icons').append(data);
    }
  });
});

// ends

$("body").on('click', '#endDay', function() {
  morningGeld = geld;
  morningEnergy = energie;
  $(this).css('border', 'black 3px solid');
  $(this).css('color', 'black');
  $(this).css('background', 'white');
  $('#progress').css({"background-image": "url(img/progress3.png)"});
  $.ajax({
    url:'template-parts/startMiddag.php',
    success: function(data){
      $('#wrapper').append(data);
      $("#next").attr('href', "#scene13");
      $('#scene12 #geld').append(Math.round(geld));
      $('#scene12 #stroom').append(Math.round(energie));
      $("#menu h3").text("Hoofdstuk 2: De Middag");
    }
  });
});

$("body").on('click', '#endMidday', function() {
  afternoonGeld = geld - morningGeld;
  afternoonEnergy = energie - morningEnergy;
  $(this).css('border', 'black 3px solid');
  $(this).css('color', 'black');
  $(this).css('background', 'white');
  $('#progress').css({"background-image": "url(img/progress7.png)"});
  $.ajax({
    url:'template-parts/startAvond.php',
    success: function(data){
      $('#wrapper').append(data);
      $("#next").attr('href', "#scene14");
      $('#middagscene8 #geld').append(Math.round(geld));
      $('#middagscene8 #stroom').append(Math.round(energie));
      $("#menu h3").text("Hoofdstuk 3: De Avond");
    }
  });
});

$("body").on('click', '#endEvening', function() {
  eveningGeld = geld - morningGeld - afternoonGeld;
  eveningEnergy = energie - morningEnergy - afternoonEnergy;
  $(this).css('border', 'black 3px solid');
  $(this).css('color', 'black');
  $(this).css('background', 'white');
  $('#progress').css({"background-image": "url(img/progress10.png)"});
  $.ajax({
    url:'template-parts/endscene.php',
    success: function(data){
      $('#wrapper').append(data);
      $('#endscene .textBlock').append("<h3>Verdiend geld <span class='category'>ochtend</span>: €"+ Math.round(morningGeld) + " per jaar</h3>");
      $('#endscene .textBlock').append("<h3>Bespaarde energie <span class='category'>ochtend</span>: "+ Math.round(morningEnergy) + " kwh per jaar</h3>");
      $('#endscene .textBlock').append("<h3>Verdiend geld <span class='category'>middag</span>: €"+ Math.round(afternoonGeld) + " per jaar</h3>");
      $('#endscene .textBlock').append("<h3>Bespaarde energie <span class='category'>middag</span>: "+ Math.round(afternoonEnergy) + " kwh per jaar</h3>");
      $('#endscene .textBlock').append("<h3>Verdiend geld <span class='category'>avond</span>: €"+ Math.round(eveningGeld) + " per jaar</h3>");
      $('#endscene .textBlock').append("<h3>Bespaarde energie <span class='category'>avond</span>: "+ Math.round(eveningEnergy) + " kwh per jaar</h3>");
      $('#endscene .textBlock').append("<h3>Verdiend geld <span class='category'>totaal</span>: €"+ Math.round(geld) + " per jaar</h3>");
      $('#endscene .textBlock').append("<h3>Bespaarde energie <span class='category'>totaal</span>: "+ Math.round(energie) + " kwh per jaar</h3>");
      $("#next").attr('href', "#endscene");
      $("#menu h3").text("Hoofdstuk 4: De Uitslag");
    }
  });
});