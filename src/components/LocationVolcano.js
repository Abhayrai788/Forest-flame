import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire';
 
 const LocationVolcano = ({lat, lng, onClick }) => {
   return(
        <div className="location-marker" onClick={ onClick }>
         <Icon icon="fxemoji:volcano" className="location-icon" />
   </div>
    )
 }
 
 export default LocationVolcano;
 