
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    value = $('#street').val()+", " + $('#city').val();

    $greeting.text("So you want to live at "+value+"?");
    imgurl = "https://maps.googleapis.com/maps/api/streetview?size=600x400&location= "+value;
    $('.bgimg').attr('src', imgurl);
    // YOUR CODE GOES HERE!
    searchURL = "http://api.nytimes.com/svc/search/v2/articlesearch.jsonp?q="+value+"&sort=oldest&api-key=58fa5aaeb6a69ba3ca9c96c2ee873bba:14:72763448X&response-format=.jsonp&callback=svc_search_v2_articlesearch'";
    $.getJSON(searchURL, function(data) {
        console.log(data);
    });
    return false;
};

$('#form-container').submit(loadData);
