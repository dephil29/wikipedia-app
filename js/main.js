$(document).ready(function() {

    function getArticles(searchTerm) {
        $.ajax({
            url: "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=" + searchTerm,
            dataType: "jsonp",
            method: 'get'
        }).done(function(response) {
            console.log(response);

          $('#articlesContainer').empty('');
            // use the articleMaker function here and then

            response.query.search.forEach(function(result) {

              var article = articleMaker(result.title, result.snippet);
              $('#articlesContainer').append(article);
            });




        });
    }



    function articleMaker(title, snippet) {
        var article = '';
        article += '<a class="article" target="_blank" rel="noopener" href="https://en.wikipedia.org/wiki/' + title +'">';
        article +=      '<h3>' + title + '</h3>';
        article +=      '<p>' + snippet + '</p>';
        article += '</a>';

        // IMPORTANT: make sure each article can be clicked on and takes you to the
        // wikipedia page of that article. Hint: use an anchor element.

        return article;
    }

    // When click on "search" button, run the getArticles function and pass in
    // the value of the search box as the "searchTerm" parameter to the getArticles function
    $('#searchButton').click(function() {
        getArticles($('#searchBox').val());
    });


    // Extra Credit: do the same thing as clicking on the "search" button, but when the user hits the "enter" key
    $("#searchBox").on("keypress", function(event) {
        if(event.keyCode === 13) {
          getArticles($('#searchBox').val());
        }
    });

});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 11 || document.documentElement.scrollTop > 11) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

// random typing
