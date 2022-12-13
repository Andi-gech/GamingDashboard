import React from 'react';
import { FaAngleDoubleLeft } from 'react-icons/fa/index.esm';
import GameBanner from './gamebanner';
import Library from './Library';
import { useLocation } from 'react-router-dom'
import Sellcard from './sellcard';

function Gamings({setactive }) {
  const location = useLocation()
  const game=location.state
  console.log(game)
    return (
        <div  className='gamings'>
          
            <GameBanner images={game.image}/>
            <p>{game.name}</p>
            <div className='gamedetail'>
                <div className='detailtext'>
                    <p> &emsp;&ensp; {game.details}</p>
                    </div>
                    <div className='spacification'>
                    <table >
  <tr>
    <th>Minimum system requirment</th>
    
  </tr>
  <tr>
    <td>cpu</td>
    <td>{game.cpu}</td>
 
  </tr>
  <tr>
    <td>Ram</td>
    <td>{game.ram} </td>
    
  </tr>
  <tr>
    <td>FREE DISK SPACE</td>
    <td>{game.SPACE}</td>
    
  </tr>
  <tr>
    <td>VIDEO CARD</td>
    <td>  {game.VIDEOCARD}</td>
    
  </tr>
</table>

                    </div>
                    <div className='buttonsdownload'>
    <button>Get Link</button>
    <div className='iconn' onClick={setactive}>
    <FaAngleDoubleLeft />
    </div>

</div>
            </div>
            <div className='lastBody'>
                <Sellcard/>
                <Library/>
                

            </div>
           
        </div>
    );
}

export default Gamings;