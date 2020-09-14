//image container
var imgKey = 'xaS4dqp03gmssoN5IOx7k3uIxZP08AYm8E9ab86QY3c';
var queryURL = 'https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg&w=1080&fit=max';

function getImage(){
    $ajax({
        url: queryURL,
        type: 'GET',
        dataType: 'json',
        success: function(data){
           var imgTag =  $('<img>').attr('src', queryURL);
           $('image').append(imgTag);
        }
    })
}
getImage();








//music container 



//random quotes
//http://paperquotes.com/
$.ajax({ 
    type : "GET", 
    url : "https://api.paperquotes.com/apiv1/quotes/", 
    beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Token {token}');},
    success : function(result) { 
        $( "#quote-button" ).click(function() {
            $('random-quote').text(result);
          });
        
    }, 
    error : function(result) { 
      //handle the error
    } 
  }); 
