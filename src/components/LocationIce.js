import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire';
 
 const LocationIce = ({lat, lng, onClick }) => {
   return(
        <div className="location-marker" onClick={ onClick }>
         <Icon icon="noto:ice"  className="location-icon" />
   </div>
    )
 }
 
 export default LocationIce;
 