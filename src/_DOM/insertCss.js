'use strict';
import './style.css';
import fontawesome from '@fortawesome/fontawesome';
import faChartBar from '@fortawesome/fontawesome-free-solid/faChartBar'
import faChartPie from '@fortawesome/fontawesome-free-solid/faChartPie'
import faChartLine from '@fortawesome/fontawesome-free-solid/faChartLine'

const insertCss=()=>{

  fontawesome.library.add(faChartBar)
  fontawesome.library.add(faChartPie)
  fontawesome.library.add(faChartLine)

  console.log('Insert Tabluar-vis Css done!')
}

export default insertCss;
