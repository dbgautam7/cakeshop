import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { setDistance } from "../../redux/reducers/loactionSlice"
import { Button, notification } from 'antd';
import L from 'leaflet';

const dragSenderMarker = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

const dragReceiverMarker = L.icon({
  iconSize: [30, 45],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://cdn-icons-png.flaticon.com/512/1180/1180058.png?w=740&t=st=1675612962~exp=1675613562~hmac=72aeaef81f5c310472a9da30bdcdfee7807d60f8593016c05f9460f1037eae64",

});


const CalculateDistance = () => {
  const { senderLocationLatLng, receiverLocationLatLng } = useSelector(state => state.location)
  const dispatch = useDispatch()
  const toRadian = angle => (angle * Math.PI) / 180;
  const lat1 = toRadian(receiverLocationLatLng.lat);
  const lng1 = toRadian(receiverLocationLatLng.lng);
  const lat2 = toRadian(senderLocationLatLng.lat);
  const lng2 = toRadian(senderLocationLatLng.lng);

    const R = 6371
    const a =
      Math.sin((lat2 - lat1) / 2) * Math.sin((lat2 - lat1) / 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin((lng2 - lng1) / 2) * Math.sin((lng2 - lng1) / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c;
    dispatch(setDistance(distance))

    notification.open({
      message: `Distance between Sender and Receiver is: ${distance}`
    });
    

  return (
    <div>
{JSON.stringify(distance)}
    </div>
  )
}

export default CalculateDistance
