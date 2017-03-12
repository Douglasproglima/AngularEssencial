<?php include 'public/template/header.php'; ?>
    <body>
        <ng-include src="'public/template/menu.html'"></ng-include>
        <!-- includes através do Angular 1
           <div ng-include src="'/public/template/header.html'"></div>
           ou
           <ng-include src="'/public/template/header.html'"></ng-include>
           ou
           Incluir a variavel header no controller através do $scope, exemplo:
           <ng-include src="header"></ng-include>
        -->

        <div id="main" class="container-fluid" style="margin-top: 20px;">
            <h2>Projeto Angular</h2>
            <div ng-view></div>
        </div>

    </body>
<?php include 'public/template/footer.php'; ?>