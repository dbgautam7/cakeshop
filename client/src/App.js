import './App.css';
import RouteHandler from './components/routeHandler/routeHandler'
import Pusher from 'pusher-js';

const App = () => {
  // Pusher.logToConsole = true;
  const pusherData=[]
  const pusher = new Pusher('d87e12a3717801b510f3', {
    cluster: 'ap2'
  });

  const channel = pusher.subscribe('my-channel');
  channel.bind('my-event', function(data) {
   console.log(JSON.stringify(data), "Data");
   pusherData.push(JSON.stringify(data.message))
  console.log(pusherData, "pusherData");

  });
  return (
    <div>
      <RouteHandler />
    </div>
  )
}

export default App