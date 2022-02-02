import {useState} from "react";
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from "./LocationInfoBox";
import LocationVolcano from "./LocationVolcano";
import LocationIce from "./LocationIce";


const Map = ({ eventData, center , zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map(ev => {
        if(ev.categories[0].id === 8) {
            return <LocationMarker lat={ev.geometries[0].coordinates[1]}
                   lng={ev.geometries[0].coordinates[0]}  
                   onClick={() => setLocationInfo({ id:ev.id, title: ev.title })} />
        }
        if(ev.categories[0].id === 12) {
            return <LocationVolcano lat={ev.geometries[0].coordinates[1]}
                   lng={ev.geometries[0].coordinates[0]}  
                   onClick={() => setLocationInfo({ id:ev.id, title: ev.title })} />
        }
         if(ev.categories[0].id === 15) {
            return <LocationIce lat={ev.geometries[0].coordinates[1]}
                   lng={ev.geometries[0].coordinates[0]}  
                   onClick={() => setLocationInfo({ id:ev.id, title: ev.title })} />
        }
       
        return null
    })

  return (
       <div className="map">
         <GoogleMapReact
             bootstrapURLKeys={{ key :
             'AIzaSyDHHdnYK_krs6uOQGS6V0KqFMnjBPePZ_w' }}
             defaultCenter={center}
             defaultZoom={ zoom }
          >
                {markers}
          </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo}  />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 22.5726,
        lng: 88.3639
    },
    zoom: 0
}

export default Map;
