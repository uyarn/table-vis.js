# table_vis.js
  * **Version**
    * 0.3.1
  * **What is it**
    * table_vis.js can generate a visualisation as soon as some data values are selected on a data table.
      * When users click any data values on the data table implemented **table_vis.js**, a button component consisting of ROW button and COL button display. once the ROW button is clicked, **table_vis.js** will collect the data in the same row as the clicked data and draw the visualisation to compare them while the COL button is used to compare the column data.
      * The **table** implemented **table_vis.js** is expected to consist of `<thead>` and `<tbody>`. The row in `<thead>` will be regarded as the row title while the 1st column in `<tbody>` will be considered as column title.
    * Developed for visualising tabular data on demand.
    * Developed for adapting the information overload as people always just concern about the special row or column in data tables.
    * **the visualisation table_vis provided**
      * Bar Chart :bar_chart:
      * Line Chart :chart_with_upwards_trend:
      * Point Chart :o:
      * Pie Chart :100:
      * Box Plot Chart :package:
      * Word Cloud :loop:
  * **Demo**
    * [Demo Page](http://yarnchen.me/#/table_vis)
  * **Install**
    ```sh
    $ npm i table_vis --save
    ```
  * **Usage**
    * IIFE
      ```Javascript
       <script src="table_vis.min.js"></script>
       <script>table_vis.vis(document.getElementsByTagName('table')[0])</script>
      ```
    * Commonjs
      ```Javascript
      const table_vis = require('table_vis');
      table_vis.vis(document.getElementsByTagName('table')[0]);
      ```
    * ES2015
      ```Javascript
      import table_vis from 'table_vis';
      table_vis.vis(document.getElementsByTagName('table')[0]);
      ```
