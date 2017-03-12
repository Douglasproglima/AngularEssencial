myApp.controller('homeController', function($scope) {
    $scope.produtos = produtos;

    //Método para deletar os produtos
    $scope.deletar = function(index) {
        var indexOf = $scope.produtos.indexOf(index);
        produtos.splice(indexOf, 1);
    }

    //Método para salvar os produtos
    $scope.salvar = function () {
        //unshift: Método responsavel por add um elemento no início do array()
        $scope.produto.data = '1489284813117';
        produtos.unshift($scope.produto);
        console.log($scope.produto);
    }

    /*include no controller
    $scope.header = '/public/template/header.html';
    * */

    $scope.menu = 'public/template/menu.html';
});

myApp.controller('contatoController', function($scope) {

});