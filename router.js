module.exports = (app) => {

    app.get('/', function (request, response) {
        response.send(
            `
            <html>
                <body>
                    Ultima School
                </body>
            </html>
                        `
        );
    });

    app.get('/alunos', function (request, response){
        response.send(
            `
            <!DOCTYPE html>
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width-device-width, initial-scale=1.0">
                <title>Ultima School</title>
            </head>
            <body>
                <h1>Listagem de Alunos</h1>

                <table>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Matriculas</td>
                            <td>Nome do Aluno</td>
                        </tr>
                    </thead>
                    <body>
                        <tr>
                            <td>1</td>
                            <td>01854229</td>
                            <td>Joao Rodrigo Brandao</td>
                        </tr>
                    </body>
                </table>
            </body>
            </html>
            `
        );
    });
}