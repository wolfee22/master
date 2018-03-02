// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
url += '?' + $.param({
  'api-key': "f9bbfaf7c602444ab359c839a798d311"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {

  console.log(result);

console.log(JSON.stringify(result.status));
console.log(JSON.stringify(result.copyright));
console.log(JSON.stringify(result.last_updated));
console.log(JSON.stringify(result.num_results));

$('#copyright').text(result.copyright);

console.log(JSON.stringify(result.results[0].byline))

$('#maintitle').text(result.results[0].title);
$('#mainauthor').text(result.results[0].byline);
$('#maindate').text(result.results[0].created_date);

$('#wrapper').empty();

for(i = 1; i<result.results.length; i++) {

	console.log(JSON.stringify(result.results[i].byline));
	$('#wrapper').append(' \
	<div class="article"> \
	<a href="https://placeholder.com"><img src="http://via.placeholder.com/190x126"></a> \
	<h2>'+ result.results[i].title+'</h2> \
	<p class="author">'+ result.results[i].byline+'</p> \
	<p class="date>'+ result.results[i].created_date+'</p> \
	</div> \
	');

}

}).fail(function(err) {
  throw err;
});
