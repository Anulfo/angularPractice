"use strict";

var app = angular.module("TodoApp", []);

app.controller("TodoCtrl", function($scope) {
    $scope.title = "Welcome to your task list";
    $scope.macaroni = "";

    $scope.todos = [
    {name: "mow the lawn", complete: "incomplete"},
    {name: "cut the grass", complete: "incomplete"},
    {name: "kill the ants", complete: "incomplete"},
    {name: "trimthe weeds", complete: "complete"},
    ];

    $scope.killTodo = function (currentTask) {
        var currentTaskIndex = $scope.todos.indexOf(currentTask);
        console.log(currentTaskIndex);
        if (currentTaskIndex >= 0) {
            $scope.todos.splice(currentTaskIndex, 1);
        }
    };
});

