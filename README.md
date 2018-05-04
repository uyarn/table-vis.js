# table_visualised.js
  * **Version**
    * tabular-vis v0.0.1
  * **Install**
    * npm install table_visualised --save
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
      const tabular_vis = require('tabular_vis');
      tabular_vis.bar(getElementsByTagName('table')[0],'row',3);
      ```
    * ES2015
      ```javascript
      import tabular_vis from 'tabular_vis';
      ```
    * it can be imported partially.
      ```javascript
      import {line} from 'tabled_visualised'
      line(getElementsByTagName('table')[0],'col',3);
      ```
   * **What it is used for**
     * for visualising tabular data on demand.
     * for adapting the information overload.
