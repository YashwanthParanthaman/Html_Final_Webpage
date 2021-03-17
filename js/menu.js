
//url to fetch all countries
const menuURL = "https://gist.githubusercontent.com/skd09/8d8a685ffbdae387ebe041f28384c13c/raw/26e97cec1e18243e3d88c90d78d2886535a4b3a6/menu.json";
const dataTag = document.querySelector('#data');
var menuList = []
var sortedArray = []
var dropdownName
callMenuAPI()


function callMenuAPI(){
  //fetch data from url
  let response = fetch(menuURL)
    .then(response => response.json())
    .then(data => {
     menuList = data
    //filteredArray  = menuList.sort((a, b) => parseFloat(a.Available) - parseFloat(b.Available));
      fetchMenuDetails(menuList)

    })
    .catch( (err) => {
      alert(err);
    });
}

// Convert number to stars
$.fn.stars = function() {
    return $(this).each(function() {
        // Get the value
        var val = parseFloat($(this).html());
        // Make sure that the value is in 0 - 5 range, multiply to get width
        var size = Math.max(0, (Math.min(5, val))) * 16;
        // Create stars holder
        var $span = $('<span />').width(size);
        // Replace the numerical value with stars
        $(this).html($span);
    });
}

$(function() {
    $('span.stars').stars();
});


// Sort by Title Ascending
$('#sortAlphabeticallyAsc').click(function(){

  dropdownName = $(this).text();
  $(".sortButtonName").text('Sort: ' +dropdownName+ '');

sortedArray = menuList.sort((a, b) => {
      let fa = a.Title.toLowerCase(),
          fb = b.Title.toLowerCase();

      if (fa < fb) {
          return -1;
      }
      if (fa > fb) {
          return 1;
      }
      return 0;
  });

  fetchMenuDetails(sortedArray);

});

// Sort by Title Descending
$('#sortAlphabeticallyDsc').click(function(){

  dropdownName = $(this).text();
  $(".sortButtonName").text('Sort: ' +dropdownName+ '');

sortedArray = menuList.sort((a, b) => {
      let fa = a.Title.toLowerCase(),
          fb = b.Title.toLowerCase();

      if (fa > fb) {
          return -1;
      }
      if (fa < fb) {
          return 1;
      }
      return 0;
  });

  fetchMenuDetails(sortedArray);

});

// Sort by price (Low to high)
$('#sortPriceAsc').click(function(){

dropdownName = $(this).text();
$(".sortButtonName").text('Sort: ' +dropdownName+ '');
  sortedArray  = menuList.sort((a, b) => parseFloat(a.Price) - parseFloat(b.Price));
  fetchMenuDetails(sortedArray);

});

// Sort by price (high to low)
$('#sortPriceDsc').click(function(){

  dropdownName = $(this).text();
  $(".sortButtonName").text('Sort: ' +dropdownName+ '');

  sortedArray  = menuList.sort((a, b) => parseFloat(b.Price) - parseFloat(a.Price));
  fetchMenuDetails(sortedArray);

});

// Sort by Rating (Highest)
$('#sortRating').click(function(){

  dropdownName = $(this).text();
  $(".sortButtonName").text('Sort: ' +dropdownName+ '');

  sortedArray  = menuList.sort((a, b) => parseFloat(b.Ratings) - parseFloat(a.Ratings));
  fetchMenuDetails(sortedArray);

});

// Sort by Availability
$('#sortAvailability').click(function(){

  dropdownName = $(this).text();
  $(".sortButtonName").text('Sort: ' +dropdownName+ '');

  sortedArray = menuList.filter(function (el) {
  return el.Available >= 1;
});

  sortedArray  = sortedArray.sort((a, b) => parseFloat(a.Available) - parseFloat(b.Available));
  fetchMenuDetails(sortedArray);

});


//Display data into html
function fetchMenuDetails(List){
  $('#data').empty()
  // $('#data').empty()
  for (i=0 ; i < List.length ; i++){
      const tag =
     //  '<div class="column">' +
      '<div class="column allMenus">' +
      ' <div class="card">' +
        ' <div class="card-image">' +
        '   <img src="' + List[i].Image + '" class="imglarge" >' +
          ' <span class="card-title"> '+ List[i].Title +' </span>' +
          ' <span class="card-subtitle"> '+ List[i].Category +' </span>' +
          ' <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>' +
        ' </div>' +
        ' <div class="card-content">' +
          ' <p class="card-price">$ '+List[i].Price +'</p>' +
          ' <span> Rating:'+List[i].Ratings +'</span>' +
          ' <p> Availability: '+List[i].Available +'</p>' +
        ' </div>' +
      ' </div>' +
    // ' </div>' +
  ' </div>'
      $('#data').append(tag)

}
}
