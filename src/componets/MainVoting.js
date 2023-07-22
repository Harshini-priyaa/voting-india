
import Voting from './Voting';
import congress from './Images/2.jpg';
import lotus from './Images/1.png';
import four from './Images/4.jpg'
import Sun from './Images/3.jpg'
import amma from './Images/5.jpg'
import drums from './Images/6.jpg'
import star from './Images/7.jpg'
import seeman from './Images/8.jpg'
import muslim from './Images/9.png'
import CountdownTimer from './Timer';
import './MainVoting.css'
import {Link } from "react-router-dom";



function MainVoting() {
  return (
    <div >
      <div>
        <Link to={'/'}><button className='nav-links'><i class="fa-solid fa-arrow-left"></i>Back to Home</button></Link>
      </div>
      <div className='title'>
        
        <div>
        <h1>Candidates</h1>
        <p>Vote for your Favourite Candidate.</p>
        </div>
        <div className='time'>
        <CountdownTimer/>
        </div>

      </div>
      <div className="App1">
      <Voting name = "Indian National Congress (INC)" img={congress} className="first"/>
      <Voting name = "Bharatiya Janata Party (BJP)" img={lotus}/>
      <Voting name = "Dravida Munnetra Kazhagam (DMK)" img ={Sun}/>
      <Voting name = "Communist Party of India (CPI)" img={four}/>
      <Voting name = "All India Anna Dravida Munnetra Kazhagam (AIADMK)" img={amma}/>
      <Voting name = "Desiya Murpokku Dravida Kazhagam (DMDK)" img={drums}/>
      <Voting name = "Viduthalai Chiruthaigal Katchi (VCK)" img={star}/>
      <Voting name = "Naam Tamilar" img={seeman}/>
      <Voting name = "Indian Union Muslim League" img={muslim}/>
      </div>
    </div>
  )
}

export default MainVoting;
