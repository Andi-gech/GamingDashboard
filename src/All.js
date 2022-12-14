import './App.css';
import SideNavbar from './SideNavbar';
import {Route,Routes} from "react-router-dom";
import App from './App';
import Allgamelist from './Allgamelist';
import VIdeolist from './Videolist';
import Message from './Message';
import Gamings from './Gamings';


function All() {
  
  return (
   
      <div>
        
       
        <SideNavbar/>
<Routes>
        <Route path="/" element={<App />} />
        <Route path="/gamepad" element={<Allgamelist />} />
        <Route path='/gamepad/:id' element={<Gamings  />} />
        <Route path="/Youtube" element={<VIdeolist />} />
        <Route path="/Friends" element={<Message/>} />

       
      
        </Routes>
  
      </div>
  );
}
export default All;
