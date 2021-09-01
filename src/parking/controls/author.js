import L from 'leaflet'
import { hyper } from 'hyperhtml/esm'

export default L.Control.extend({
    onAdd: map => hyper`
        <div class="leaflet-control-layers control-padding control-bigfont">
            <label>Built by zlant: <a href="https://github.com/zlant/parking-lanes">Github</a></label>
            <label>Hosted by Jake Coppinger: <a href="https://github.com/jakecoppinger/open-parking-map">Github</a></label>
        </div>`,
})
