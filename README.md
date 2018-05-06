# table_vis.js
  * **Version**
    * table-vis v0.1.0
  * **What is it**
    * table-vis.js can generate a visualisation as soon as some data values are selected on a data table.
    * for visualising tabular data on demand.
    * for adapting the information overload.
      * For example, Some table include the percentage data, this library can help web page reduce some table cells.
  * **Install**
    * npm install table-vis --save
  * **API**
    * .line() is used to draw line chart
      * table_vis.line(table,'row'/'col',number);
    * .bar() is used to draw bar chart
      * table_vis.bar(table,'row'/'col',number);
    * .pie() is used to draw pie chart
      * table_vis.pie(table,'row'/'col',number);
  * **Usage**
    * in HTML
      ```javascript
      <script src="tabular_vis.min.js"></script>
      <script>
      tabular_vis.bar(getElementsByTagName('table')[0],'row',2);
      </script>
      ```
    * Commonjs
      ```javascript
      const table_vis = require('table-vis');
      table_vis.bar(getElementsByTagName('table')[0],'row',3);
      ```
    * ES2015
      ```javascript
      import table_vis from 'table-vis';
      ```
    * it can be imported partially.
      ```javascript
      import {line} from 'table-vis'
      line(getElementsByTagName('table')[0],'col',3);
      ```
   * **Example**
     * column demo page [];
     * row demo page [];
