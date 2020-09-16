  
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
            console.log(data);
            $('#image').empty();
            var imgLink = data.hits[4].largeImageURL;
            console.log(imgLink);
            var imgTag =  $('<img>').attr('src', imgLink).addClass('img-fluid');
            var imgDisplay = $('#image').append(imgTag);
            
        })
    
    });

        

//paperquotes, method as get or post not recognized
// $.ajax({
//     url: "https://cors-anywhere.herokuapp.com/https://api.paperquotes.com/apiv1/quotes/",
//     method = "POST",
//     type = "json",
// }).then(function(data) {
//     console.log(data);
// })
    

    console.log("hello");
    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0",
        data: {
            method: 'getQuote',
            lang: "en",
            format: "json"
        },
        success: function(response) {
            console.log(response.quoteText);

        }
    
    });

});