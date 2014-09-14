module.exports =  function ( $scope, Branch ) {
  // get the selected branch information.
  $scope.branch = Branch.getInfo();
  $scope.days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
};
