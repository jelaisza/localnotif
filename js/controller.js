var app = angular.module('starter', ['ionic', 'ngCordova'])
.controller('Search', function ($scope) {
  $scope.items = ['Closer', 'Shape of you', 'Brave', '7 years'];
})
.controller('TodoController', function($scope){
  $scope.saved = localStorage.getItem('musics');
  $scope.musics = (localStorage.getItem('musics')!=null)? JSON.parse($scope.saved):[{title:'Music',done:false}];

  localStorage.setItem('musics', JSON.stringify($scope.musics));

  $scope.addMusic = function(){
  var music = $scope.musicTitle;
    $scope.musics.push({
      title: $scope.musicTitle,
      done:false
    });
    $scope.musicTitle = 'Music';
    localStorage.setItem('musics', JSON.stringify($scope.musics));
  };

$scope.remove = function(index){
  $scope.musics.splice(index,1)
  localStorage.setItem('musics', JSON.stringify($scope.musics));
};
})

.controller('TodoControl', function($scope){
  $scope.saved = localStorage.getItem('signups');
  $scope.signups = (localStorage.getItem('signups')!=null)? JSON.parse($scope.saved):[{title:'Music',done:false}];

  localStorage.setItem('signups', JSON.stringify($scope.signups));

  $scope.doLogin = function(){
  var signup = $scope.loginData.username;
    $scope.musics.push({
      title: $scope.musicTitle,
      done:false
    });
    $scope.musicTitle = 'Music';
    localStorage.setItem('musics', JSON.stringify($scope.musics));
  };

$scope.remove = function(index){
  $scope.musics.splice(index,1)
  localStorage.setItem('musics', JSON.stringify($scope.musics));
};
})


.controller('DisplayList',function($scope) {

   $scope.saved=localStorage.getItem('lists');
   $scope.lists=(localStorage.getItem('lists')!==null)?JSON.parse($scope.saved):[{text:'First Task',done:'false'}];
   localStorage.setItem('lists',JSON.stringify($scope.lists));

   //$scope.lists=[{text:'First Task',done:false}];

   $scope.add=function () {
       if($scope.addedTask==='')
       {
           window.alert("Task cannot be empty");
       }
       else {
           $scope.lists.push({text: $scope.addedTask,done:false});

           $scope.addedTask='';
       }

       localStorage.setItem('lists',JSON.stringify($scope.lists));

   };

    $scope.left=function () {
        var count_left = 0;
        angular.forEach($scope.lists, function (todo) {
            if (todo.done) {
                count_left += 0;
            }
            else {
                count_left += 1;
            }
        });
        return count_left;
    }

    $scope.remove=function () {

        var oldList=$scope.lists;
        $scope.lists=[];
        angular.forEach(oldList,function (todo){
            if (!todo.done) {
                $scope.lists.push(todo);
            }
        });

        localStorage.setItem('lists',JSON.stringify($scope.lists));
        };




})


.controller('taskController', function($scope) {
    $scope.today = new Date();
    $scope.saved = localStorage.getItem('taskItems');
    $scope.taskItem = (localStorage.getItem('taskItems')!==null) ?
    JSON.parse($scope.saved) : [ {description: "Why not add a task?", date: $scope.today, complete: false}];
    localStorage.setItem('taskItems', JSON.stringify($scope.taskItem));

    $scope.newTask = null;
    $scope.newTaskDate = null;
    $scope.categories = [
        {name: 'Personal'},
        {name: 'Work'},
        {name: 'School'},
        {name: 'Cleaning'},
        {name: 'Other'}
    ];
    $scope.newTaskCategory = $scope.categories;
    $scope.addNew = function () {
        if ($scope.newTaskDate == null || $scope.newTaskDate == '') {
            $scope.taskItem.push({
                description: $scope.newTask,
                date: "No deadline",
                complete: false,
                category: $scope.newTaskCategory.name
            })
        } else {
            $scope.taskItem.push({
                description: $scope.newTask,
                date: $scope.newTaskDate,
                complete: false,
                category: $scope.newTaskCategory.name
            })
        };
        $scope.newTask = '';
        $scope.newTaskDate = '';
        $scope.newTaskCategory = $scope.categories;
        localStorage.setItem('taskItems', JSON.stringify($scope.taskItem));
    };
    $scope.deleteTask = function () {
        var completedTask = $scope.taskItem;
        $scope.taskItem = [];
        angular.forEach(completedTask, function (taskItem) {
            if (!taskItem.complete) {
                $scope.taskItem.push(taskItem);
            }
        });
        localStorage.setItem('taskItems', JSON.stringify($scope.taskItem));
    };

    $scope.save = function () {
        localStorage.setItem('taskItems', JSON.stringify($scope.taskItem));
    }
});
