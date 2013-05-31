'use strict';

angular.module('juli.droppable', [])
  .directive('juliDroppable', function () {
    return {
      scope: {
        drop: '&' // Bind the drop function
      },
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var optionsObj = {};

        optionsObj.drop = function() {
          if (scope.drop) {
            scope.drop();
          }
        };
        element.droppable(optionsObj);
      }
    };
  });
