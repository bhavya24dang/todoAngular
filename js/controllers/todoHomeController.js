angular.module('todoApp')
.controller('TodoHomeController', ['$rootscope', '$scope', function($rootscope, $scope){
	// $scope.myTemp = 50;
	$scope.todos = [
		{text:'Learn Gfg', done:false},
		{text:'Do InterviewBit', done:false}
	];

	$scope.getTotalTodos = function(){
		return $scope.todos.length;
	}
}]);