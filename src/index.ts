import 'normalize.css'
import './styles/main.scss'
import { initMap } from './parking/interface.js'
import {OurWindow} from './utils/interfaces'

(window as OurWindow).map = initMap()
