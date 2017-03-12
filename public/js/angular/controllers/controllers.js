myApp.controller('homeController', function($scope) {
    $scope.produtos = produtos;

    //Método para deletar os produtos
    $scope.deletar = function(index) {
        var indexOf = $scope.produtos.indexOf(index);
        $scope.produtos.splice(indexOf, 1);
    }

    /*include no controller
    $scope.header = '/public/template/header.html';
    * */

    $scope.menu = 'public/template/menu.html';
});

myApp.controller('contatoController', function($scope) {

});