'use strict';

angular.module('palitobolitaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.todos = ['Item 1', 'Item 2', 'Item 3'];
      
    $scope.addTodo = function(){
        $scope.todos.push($scope.todo);
        $scope.todo = '';
    }
      
  });
