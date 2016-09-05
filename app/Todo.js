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
    ]
});

