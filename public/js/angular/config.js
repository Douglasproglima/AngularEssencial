var $=jQuery;

var myApp = angular.module('myApp',[]);

var produtos=[
    {descricao: 'Mouse', preco: '15.50', data: '1488580813117'},
    {descricao: 'Leitor de DVD', preco: '15.50', data: '1488880813117'},
    {descricao: 'Gabinente Gamer', preco: '365.32', data: '1488980813117'},
    {descricao: 'Teclado', preco: '98.59', data: '1489080813117'},
    {descricao: 'Monitor', preco: '1500.55', data: '1489280813117'},
];

/*
 var $=jQuery;
 var produtos=[
 {descricao: 'Mouse', preco: '15.50', data: '1488580813117'},
 {descricao: 'Leitor de DVD', preco: '15.50', data: '1488880813117'},
 {descricao: 'Gabinente Gamer', preco: '365.32', data: '1488980813117'},
 {descricao: 'Teclado', preco: '98.59', data: '1489080813117'},
 {descricao: 'Monitor', preco: '1500.55', data: '1489280813117'},
 ];

 var myApp = angular.module('myApp',['ngRoute']);

 myApp.config(function($routeProvider){
 $routeProvider.when('/',{templateUrl: '/app/views/home.html', controller: 'homeController'}),
 $routeProvider.when('/contato',{templateUrl: '/app/views/contato.html', controller: 'contatoController'})
 });
 * */