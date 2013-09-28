'use strict';

angular.module('palitobolitaApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
	  var todosInStore = localStorageService.get('todos');
		$scope.todos = todosInStore && todosInStore.split('\n') || [];
		
		$scope.$watch(function() {
			localStorageService.add('todos', $scope.todos.join('\n'));
		});
    
	  $scope.addTodo = function(){
			$scope.todos.push($scope.todo);
			$scope.todo = '';
    };
    
		$scope.removeTodo = function($index) {
			$scope.todos.splice($index, 1);
		};
		
  });
