# Query Container
A Vanilla JS library to get a query media like over the item

Make it work:

Load the file in the bottom of the body through a CDN or locally stored.

    <script type="text/javascript" src="/assets/js/query-container.js"></script>
  
This script will search for "data-query-container" attribute in the DOM's elements and check the values. This attribute must be a list of objects, which of them have the attribute "value" as mandatory. Those optionals are "query", "class" and "and":

1. value: Integer representing the value in pixels to compare.
2. query: Query to check against. Default is "minw". All accepted values are:
    * "min-width" or "minw" for comparitions against the width of the element, using the value as mimimum to apply the class
    * "max-width" or "maxw" for comparitions against the width of the element, using the value as maximum to apply the class
    * "min-height" or "minh" for comparitions against the height of the element, using the value as mimimum to apply the class
    * "max-height" or "maxh" for comparitions against the height of the element, using the value as maximum to apply the class
3. class: Class or classes to apply.
4. and: Another list of pairs of "value" and "query" as previously noted to delimit the application of the defined class

The classes must be setted as ussual in CSS for this script work properly.

IE this is the HTML. Note the div with class "item" and "data-query-container" attribute:
    <html>
    <body>
		    <div class="item" data-query-container="[{'value': 320,'query':'min-width','class':'-smol', 'and': [{'value': 719,'query':'max-width'}]}, {'value': 720}]"></div>
        <script type="text/javascript" src="/assets/js/query-container.js"></script>
    </body>
    </html>
    
And the CSS:
    
    .item {
      width: 100%;
      height: 200px;
      background-color: red;
    }

    .item.-smol {
      background-color: blue;
    }

    .item.-minw-720 {
      background-color: orange;
    }
