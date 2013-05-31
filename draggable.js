'use strict';

angular.module('juli.draggable', [])
  .directive('juliDraggable', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.draggable();
      }
    };
  });
