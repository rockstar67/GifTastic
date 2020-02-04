var starwarsArray = ["Princess Leia", "Greedo", "Chewbacca", "Hans Solo", "Darth Vader"];

$(document).ready(function() {
    for (var i = 0; i < starwarsArray.length; i++) {
        $("#starwars-buttons").append("<button type='button' onclick='searchGif(\"" + starwarsArray[i] + "\")' class='btn btn-primary' value=' " + starwarsArray[i] + "'> " + starwarsArray[i] + " </button>");
    }
});

function starwarsButtonClicked() {
    var userInput = $('#starwars-input').val();
    searchGif(userInput);
}

function submitButtonClicked() {
    var userInput = $('#starwars-input').val();

    if (userInput) {
        $('#starwars-buttons').append("<button type='button' onclick='searchGif(\"" + userInput + "\")' class='btn btn-primary' value=' " + userInput + "'> " + userInput + " </button>");
    }
}

function searchGif(gifName) {
    $.ajax({
            url: 'https://api.giphy.com/v1/gifs/search?q= ' + gifName + ' &api_key=Za3tDiQsz6eWtUMCG0ZRdWLzQRgZmpxj&limit=9',
            type: 'GET',
        })
        .done(function(response) {
            displayGif(response);
        })
}

function displayGif(response) {
    $('#starwars').empty();
    for (var i = 0; i < response.data.length; i++) {
        var rating = "<div class='ratings'> Rating:  " + (response.data[i].rating) + " </div>";
        var image = rating + '<img src= " ' + response.data[i].images.fixed_height_still.url +
            '" data-still=" ' + response.data[i].images.fixed_height_still.url +
            ' " data-animate=" ' + response.data[i].images.fixed_height.url + '" data-state="still" class="movImage" style= "width:250px; height:250px">';

        image = '<div class="col-md-4">' + image + "</div>";
        $('#starwars').append(image);
    }

    $('.movImage').on('click', function() {
        var state = $(this).attr('data-state');
        if (state == 'still') {
            $(this).attr('src', $(this).attr("data-animate"));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).attr("data-still"));
            $(this).attr('data-state', 'still');
        }

    });
}
