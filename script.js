$(document).ready(function(){

//IMAGE CONTAINER

$('#get-image').click(function(){
    var userInput = $('#user-input').val();
    var apiKey = '18310078-72a2f7e072a362d9cdc81c6c9';
    var queryUrl = 'https://pixabay.com/api/?key=' + apiKey + '&q=' + userInput + '&image_type=photo';

    $.ajax({
        url: queryUrl,
        type: 'GET',
    }).then(function(data){
        var imgLink = data.hits[4].largeImageURL;
        var imgTag =  $('<img>').attr('src', imgLink).addClass('img-style');
        $('#image').append(imgTag);
    })
})



//MUSIC CONTAINER 

// https://binaryjazz.us/genrenator-api/
// https://developer.kkbox.com/
// https://www.mixcloud.com/developers/
// https://www.theaudiodb.com/api_guide.php



//RANDOM INSPIRATIONAL QUOTES CONTAINER

// maybe this one too : https://api.adviceslip.com/
// another one: https://favqs.com/api
//https://forismatic.com/en/api/
// https://quotesondesign.com/api/

//http://paperquotes.com/
// $.ajax({ 
//     type : "GET", 
//     url : "https://api.paperquotes.com/apiv1/quotes/", 
//     beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Token {token}');},
//     success : function(result) { 
//         $( "#quote-button" ).click(function() {
//             $('random-quote').text(result);
//           });
        
//     }, 
//     error : function(result) { 
//       //handle the error
//     } 
//   }); 


})