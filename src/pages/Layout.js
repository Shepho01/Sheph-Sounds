import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import Home from './Home';
import SoundBoard from "./SoundBoard";

const Layout = () => {
  const [enterStatus, setStatus] = useState(false);

  const handleContinue = () => {
   
    setStatus(true);
  }

  const handleBack = () => {
  
    setStatus(false);
  }

  return (
    <>    
    
      {enterStatus ?

        <div>
          {enterStatus ? <SoundBoard/>: <></>}
          
          <button onClick={handleBack}className="btn btn-warning btn-lg">
            <Link  to="/">Back</Link>
          </button>

          <br></br>
          <br></br>
          <br></br>
        </div>

          :

        <div>
          {enterStatus ? <></>: <Home/>}
          <button className="btn btn-warning btn-lg">
            <Link onClick={handleContinue} to="/sound-board">ENTER</Link>
          </button>
          
        </div>
        }
      
    </>
  )
};

export default Layout;