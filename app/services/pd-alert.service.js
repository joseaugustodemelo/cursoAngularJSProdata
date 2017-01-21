/**
 * Created by joseaugustodemelo on 21/01/17.
 */
angular.module('pdCurso')
    .service('PdAlertService', PdAlertService);

function PdAlertService (toastr) {

    this.showSuccess = showSuccess;
    this.showError = showError;

    function showSuccess (mensagem, titulo) {

        titulo = titulo || 'Ok!';
        toastr.success(mensagem, titulo);

    }

    function showError (mensagem, titulo) {

        titulo = titulo || 'Erro!';
        toastr.error(mensagem, titulo);

    }
}