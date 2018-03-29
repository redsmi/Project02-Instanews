$(document).ready(function() {
    $('.loading').hide();
            
    $('select').on('change', function(event) {
        event.preventDefault();
        $('.loading').show();
        $('.top-news').empty();

        $('header').addClass("smaller-header");
        $('footer').addClass("smaller-footer");
        
        var url = "https://api.nytimes.com/svc/topstories/v2/";
        url += $(this).val();
        url += '.json';
        url += '?' + $.param({
        'api-key': "9ef02a0589784f0db09a4dd1cbaea8ab"
        });

        $.ajax({
        url: url,
        method: 'GET',

        }).done(function(data) {

            if(data.results.length !== 0){

            var filteredResults = data.results.filter(function(index) {
                return index.multimedia.length > 4;
            }).slice(0,12);        

            $.each(filteredResults, function(index, value){
            var imglink = value.multimedia[4].url;
            var urllink = value.url;
            var caption = value.abstract;
            
            var divnews = '<div class="story-box">'
                divnews += '<a href="'+ urllink + '" target="_blank">'
                divnews += '<div class="inner-story-box"'
                divnews += ' style="background-image: url(' + imglink + ')">';
                        divnews += '<div class="caption-box">'
                            divnews += '<p>' + caption + '</p>'
                divnews += '</div></div></a></div>'

            $('.loading').hide();
            $('.top-news').append(divnews);
            })
        }
        })

        .fail(function(err) {
            $('.loading-gif').hide();
            $('.news-grid').append('<h1>No news available...</h1>')
        });
    });
});