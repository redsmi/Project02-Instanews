
console.log('asdfasdfa')

$('.loading').hide();
        
$('select').on('change', function(event) {
    event.preventDefault();
    // $('.loading').show();

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
        console.log(data.results);

        var filteredResults = data.results.filter(function(el) {
            return el.multimedia.length > 0;
        }).slice(0,12)
        console.log(filteredResults);            

        $.each(filteredResults, function(index, value){
        // console.log(value); 
        var imglink = data.results[index].multimedia[4].url;
        var urllink = data.results[index].url;
        var caption = data.results[index].abstract;
        
        var divnews = '<div class="story-box"'
            divnews += ' style="background-image: url(' + imglink + ')">';
                divnews += '<a href="'+ urllink + '" target="_blank">'
                    divnews += '<div class="caption-box">'
                        divnews += '<p>' + caption + '</p>'
            divnews += '</div></a></div>'

        $('.top-news').append(divnews);
        })
    })

    .fail(function(err) {
        $('.loading-gif').hide();
        $('.news-grid').append('<h1>No ___ news available...</h1>')
    });
});