# angular-draggable
Droppable directive for AngularJS. Depends on jQuery UI's droppable.

## Live example!
Check it out in http://jsfiddle.net/JulianMayorga/XMTqe/

## Install
1.  Include 'droppable.js' into your app
2.  Add 'juli.droppable' as a module dependency to your app.
    e.g.
    ```js
      angular.module('YourApp', ['juli.droppable'])
    ```
3.  Add juli-droppable atribute to any tag you want. You can add a function to be called when the drop event fires using the drop attribute.
    ```html
      <div droppable drop="inform()" class="droppable">Drop here</div>
    ```

## Example
See 'example.html'

## License
MIT
