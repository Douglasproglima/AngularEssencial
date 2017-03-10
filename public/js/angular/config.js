var $=jQuery;
var myApp = angular.module('myApp',['ngRoute']);

var produtos=[
    {descricao: 'mouse', preco: '15.50', data: '1488580813117'},
    {descricao: 'leitor de DVD', preco: '15.50', data: '1488880813117'},
    {descricao: 'gabinente Gamer', preco: '365.32', data: '1488980813117'},
    {descricao: 'teclado', preco: '98.59', data: '1489080813117'},
    {descricao: 'monitor', preco: '1500.55', data: '1489280813117'},
];

 myApp.config(function($routeProvider){
    $routeProvider
        .when('/',{templateUrl: 'app/views/home.html', controller: 'homeController'})
        .when('/contato', {templateUrl: '/app/views/contato.html', controller: 'contatoController'});
 });

 myApp.filter('capitalize', function () {
    return function (input) {
        input = input.toLowerCase();
        return input.substr(0,1).toUpperCase()+input.substr(1);
    }
 });