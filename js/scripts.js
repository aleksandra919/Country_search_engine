var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#searchBtn').click(searchCountries);

function createLabel(title, value) {
	return '<b>' + title + ': </b>' + value;
}

function searchCountries() {
    var countryName = $('#countryNameInput').val();
    if (!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
}

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {

        $('<li>').html(
        	[
        		['Country', item.name],
        		[' , Capital ', item.capital],
        	].map(function(arr) {
        		return createLabel(arr[0], arr[1])
        	})
        ).appendTo(countriesList)
    });
}