$(document).ready(function() {
    function fetchTranslation() {
        const languageCode = $('#language_code').val();
        const url = `https://www.fourtonfish.com/hellosalut/hello/?lang=${languageCode}`;

        $.get(url, function(data) {
            $('#hello').text(data.hello);
        });
    }

    $('#btn_translate').click(fetchTranslation);
    $('#language_code').keypress(function(event) {
        if (event.keyCode === 13) {
            fetchTranslation();
        }
    });
});

