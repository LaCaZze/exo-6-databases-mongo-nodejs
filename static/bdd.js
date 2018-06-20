$(function () {

    $.ajax({
        url: 'http://localhost:3023/data', // La ressource ciblée
        type: 'GET', //type de requette. Ici un port n'a pas de sens on a rien a envoyer au sreveur
        //GET type par défaut, normalement pas besoin de le préciser

        success: function (data) {
            for (var id in data) {
                $('ul').append('<li>' + data[id].name + ' ' + data[id].genre + '</li>')
                // console.log(data[id].name.first + ' ' + data[id].name.last);
            }
        }
    });


});
