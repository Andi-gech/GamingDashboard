import './App.css';
import SideNavbar from './SideNavbar';
import {Route,Routes} from "react-router-dom";
import App from './App';
import Allgamelist from './Allgamelist';
import VIdeolist from './Videolist';


function All() {
  
  return (
   
      <div>
        
       
        <SideNavbar/>
<Routes>
        <Route path="/" element={<App />} />
        <Route path="/gamepad" element={<Allgamelist />} />
        <Route path="/Youtube" element={<VIdeolist />} />

       
      
        </Routes>
  
      </div>
  );
}
export default All;