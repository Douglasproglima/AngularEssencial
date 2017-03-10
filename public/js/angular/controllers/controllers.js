myApp.controller('homeController', function($scope) {
    $scope.produtos = produtos;

    //Método para deletar os produtos
    $scope.deletar = function(index) {
        var indexOf = $scope.produtos.indexOf(index);
        $scope.produtos.splice(indexOf, 1);
    }
});

myApp.controller('contatoController', function($scope) {

});