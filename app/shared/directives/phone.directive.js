// phone number handling directive function
// used in app.js
module.exports =  function () {
  return {
    restrict: 'A',
    scope: {
      phone: '=phone'
    },
    link: function ( scope ) {
      // function to create human readable number,
      // could/ should be parted out in some way
      var numberFormat  = function( number ) {
        if ( !number || number.length !== 10 ) {
          return;
        }
        // this looks gross but it's buidling a readable phone number
        return '(' + number.substring( 0, 3 ) + ') ' +
          number.substring( 3, 6 ) + '-' + number.substring( 6 );
      };

      scope.phone = numberFormat( scope.phone );
    }
  };
};
