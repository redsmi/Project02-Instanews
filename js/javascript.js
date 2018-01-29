
console.log('333')

$('.loading').hide();
        
$('select').on('change', function(event) {
    event.preventDefault();
    // var storiesList = $('#story-item')
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
            console.log(value);
                
        var img = '<img src="' + data.results[index].multimedia[1].url + '">';

        $('.news-grid').append(img);
        })
    })

    .fail(function(err) {
        $('.loading-gif').hide();
        $('.news-grid').append('<h1>No ___ news available...</h1>')
    });
});