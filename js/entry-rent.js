$(document).ready(function() {
    $.get("data/cars.json", function(data) {
        var source = $('#cars-template').html();
        var template = Handlebars.compile(source);
        $('#cars-container').html(template(data));
    });
});