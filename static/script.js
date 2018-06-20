$(function () {



    //ajax pour le traitement des infos retourné par la base de donnée et pouvoir les afficher sur la page html.
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


    $("#envoi").click(function () {
        //Je déclare des varible pour : grace à une methode jQuery vont recupèrer les valeurs entrée par l'utilisateur en ciblant sur l'id
        var LePrenom = $('#entreePrenom').val();
        var leGenre = $('#entreeGenre').val();
        //Une fois les variables déclarés je peut utiliser mon ajax
        $.ajax({
            // je creer un objet dans l'ajax pour entrer le traitement de la requette sur back dans la varaible nombre1 et 2


            url: 'http://localhost:3023/ajout',
            type: 'POST',
            data: {
                prenom: LePrenom,
                genre: leGenre
            },
            // une fois que l'ajax est "success" la fonction exécute la variable res recupérer du back et l'affiche dans p avec le methode jQuery.text.
            success: function (res) { // code_html contient le HTML renvoyé
                console.log(res);
                $('ul').text(res);
            }
        });


    });
});

