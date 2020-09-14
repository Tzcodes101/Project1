$(document).ready(function(){

//IMAGE CONTAINER

var apiKey = '2XOC8Ho3yFg21bZa4yEJsklnaWbW1mg0';
var queryUrl = 'http://wallhaven.cc/api/v1/search?apikey=' + apiKey;

$('button').click(function(){
    $.ajax({
        url: queryUrl,
        type: 'GET',
        success: function(data){
          var imgEl =  $('<img>').attr('src', queryUrl);
          $('#image').append(imgEl);
        }
    })
})



//MUSIC CONTAINER 



//RANDOM INSPIRATIONAL QUOTES CONTAINER
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