$(document).ready(function () {

  //IMAGE CONTAINER

  $('#get-image').click(function () {
    var userInput = $('#user-input').val();
    var apiKey = '18310078-72a2f7e072a362d9cdc81c6c9';
    var queryUrl = 'https://pixabay.com/api/?key=' + apiKey + '&q=' + userInput + '&image_type=photo';



    $.ajax({
      url: queryUrl,
      type: 'GET',
    }).then(function (data) {
      $('#image').empty();
      var imgLink = data.hits[4].largeImageURL;
      var imgTag = $('<img>').attr('src', imgLink).addClass('img-fluid');
      var imgDisplay = $('#image').append(imgTag);
    })

  })


// Local Storage

var userText = document.querySelector('#journal-text');

$('#save-entry').on('click', function(){
    localStorage.setItem('journal-text', userText.value)
})
    


  //MUSIC CONTAINER 

  // https://binaryjazz.us/genrenator-api/
  // https://developer.kkbox.com/
  // https://www.mixcloud.com/developers/
  // https://www.theaudiodb.com/api_guide.php



  //RANDOM INSPIRATIONAL QUOTES CONTAINER
  //add on-click event to get quote button id quote-button

  $("#quote-button").click(function () {

    $.ajax({
      url: "https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?",
      data: {
        method: 'getQuote',
        lang: "en",
        format: "json"
      },
      success: function (response) {
        $("#quote").empty();
        //grab quote text and author
        var quoteText = response.quoteText;
        var quoteAuthor = response.quoteAuthor;

        //create elements for vars
        var displayQuoteEl = $("<h5>").text(quoteText);
        var displayAuthorEl = $("<p>").text(quoteAuthor);

        //append to container
        $("#quote").append(displayQuoteEl).append(displayAuthorEl);

      }

    });
  });
});
