/**
 * Created by joseaugustodemelo on 21/01/17.
 */
angular.module('pdCurso')
    .controller('IndexController', IndexController);

function IndexController ($scope, PdAlertService, $filter) {

    $scope.onClickBotao = onClickBotao;

    $scope.entidade = {};

    $scope.listEntidade = [];

    $scope.limpar = limpar;
    $scope.salvar = salvar;
    $scope.editar = editar;
    $scope.excluir = excluir;

    function salvar () {
        if($scope.formEntidade.$invalid){

            angular.forEach($scope.formEntidade.$error, function (errorField) {
                var teste = errorField;

                for (var i = 0; i < errorField.length; i++){
                    errorField[i].$setTouched();
                }
            });

            /*angular.forEach($scope.entidade, function (valorCampo, nomeCampo) {
                var teste = '';
            });*/

            //alert("Verifique os campos inválidos");
            PdAlertService.showError('Verifique os campos inválidos!');
            return;
        }

        var dataFormatadda = $filter('data')($scope.entidade.nascimento, 'dd/MM/yyyyy');
        $scope.listEntidade.push($scope.entidade);
        limpar();

        //toastr.success('Salvo com sucesso!', 'Ok!');
        PdAlertService.showSuccess('Salvo com sucesso!');
    }

    function limpar () {
        $scope.entidade = {};

        angular.element('#itNome').focus();

        $scope.formEntidade.$setUntouched();
    }

    function editar (entidade) {
        //$scope.entidade = entidade;
        $scope.entidade = angular.copy(entidade);// caso queira copiar um objeto, assim separa o bind
    }

    function excluir (index) {
        $scope.listEntidade.splice(index, 1);

        //toastr.success('Excluído com sucesso!', 'Ok!');

        PdAlertService.showSuccess('Excluído com sucesso!');
        limpar();
    }

    function excluirEntidade (entidade) {

        var index = $scope.listEntidade.indexOf(entidade);

        excluir(index);

    }
    function  onClickBotao() {
        alert('Teste');

        console.log('Fechou o alert!');
    }
}