'use strict';
import './style.css';
import fontawesome from '@fortawesome/fontawesome';
import faChartBar from '@fortawesome/fontawesome-free-solid/faChartBar'
import faChartPie from '@fortawesome/fontawesome-free-solid/faChartPie'
import faChartLine from '@fortawesome/fontawesome-free-solid/faChartLine'
import faColumns from '@fortawesome/fontawesome-free-solid/faColumns'
import faBraille from '@fortawesome/fontawesome-free-solid/faBraille'
import faFileWord from '@fortawesome/fontawesome-free-solid/faFileWord'

const insertCss=()=>{
  fontawesome.library.add(faChartBar)
  fontawesome.library.add(faChartPie)
  fontawesome.library.add(faChartLine)
  fontawesome.library.add(faColumns)
  fontawesome.library.add(faBraille)
  fontawesome.library.add(faFileWord)

  console.log('Insert Tabluar-vis Css done!')
}

export default insertCss;
