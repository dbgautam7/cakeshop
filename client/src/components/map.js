import React,{useState} from 'react'
import { MapContainer, TileLayer, Marker,Popup,useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

const MyMap = () => {

    const  LocationMarker=()=> {
        const [position, setPosition] = useState(null)
        const map = useMapEvents({
          click() {
            map.locate()
          },
          locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
          },
        })
      
        return position === null ? null : (
          <Marker position={position}>
            <Popup><FaMapMarkerAlt style={{width:"30px", height:"30px"}} /></Popup>
          </Marker>
        )
      }

  return (
    <>
    <MapContainer
    style={{height:"100vh", width:"100vw"}}
    center={{ lat: 28.3949, lng: 84.1240 }}
    zoom={13}
    scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <LocationMarker />
  </MapContainer>,
</>
  )
}

export default MyMap