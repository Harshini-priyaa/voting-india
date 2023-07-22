import  './Votepage.css'
import  userimage from'./Images/profile.png'
import React, { useState } from 'react';
import star from './Images/star.png'
import vote from './Images/vote.jpg'
import { Link } from "react-router-dom"; 
import {useLocation} from "react-router-dom";
import Logoimg from "./Images/logoimg.jpg"
//import Navbar from './Navbar'

import userBg from './Images/userpage.jpeg'
function Votepage(){
     const location= useLocation();
     const {userName, aadharNumber} = location.state ||{};

     //const [selectedElection, setSelectedElection] = useState('TAMIL NADU');
    //  const maskaddharNumber =(aadhar) =>{
    //       const maskedPart =aadhar.slice(0,-4).replace(/\d/g,'X');
    //       const lastFourDigits =aadhar.slice(-4);
    //       return maskedPart +lastFourDigits;
    //  }

    return(
        <div className='overall'> 
           <div className="userbd" style={{
                width: '100%',
                height: '100vh',
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${userBg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                position: 'relative'
                }}>
            
           
            <nav>
                {/* <img src={Logoimg} alt="logo"  className='logoimage'  />  <br /> */}
                 <h1 className='title1'> Election Commission of India
                </h1> <br />
                <br />
                
            </nav>
            <div className="container">
            <br />
                <div className="sidebox">
                            <div className="side-nav">
                                <div className="user">
                                <img src={userimage} alt="userimage" className='user-img' />
                                <div>
                                <h2>{userName}</h2>
                                <p>{aadharNumber}</p>
                                </div>
                                <img src={star} alt='starimagr'  className='star-img' />
                                </div>

                                <ul>
                                    <li><p>Username</p></li>
                                    <li><p>Profile</p></li>
                                    <li><p>Edit Profile</p></li>
                                    <li><p>Setting</p></li>
                                    <li><p>Help ?</p></li>
                                    <li><p className='sidebarbutton'><button>Logout</button></p></li>       
                                </ul>
                                
                            </div>   
                </div>
                    <div className="bodycontent">
                        <div className="first-box">
                                <div className="text-box">
                                    <h2 ><b>Elections</b></h2>
                                    <div className="nothing">
                                    <h4>India is a constitutional democracy with a parliamentary system of government, and at the heart of the system is a commitment to hold regular, free and fair elections.
                                            
                                    </h4>
                                    <div className="vote-img">
                                    <img src={vote} alt="Voteimage"  /> </div>
                                    </div>
                                    
                                </div>
                        </div><br />
                        <br />
                        <br />
                        <div className="election">
                            <div className="party1" >
                            <h2>TAMIL NADU</h2>
                            <p>General Election of Legislative Assembly of Tamil Nadu,2024</p>
                            <Link to="/MainVoting"><button>VOTE NOW</button></Link>
                            </div>
                            <div className="party1">
                            <h2>KERALA</h2>
                            <p>General Election of Legislative Assembly of Kerala,2024</p>
                            <Link to="/MainVoting"><button>VOTE NOW</button></Link>
                            </div>
                            <div className="party1">
                            <h2>BYE-ELECTION</h2>
                            <p>This is some sample text content.</p>
                            <Link to="/MainVoting"><button>VOTE NOW</button></Link>
                            </div>
                            
                        </div>
                        <div>
             <Link to={'/'}><button className='nav-links'><i class="fa-solid fa-arrow-left"></i>Back to Home</button></Link>
          </div>
                    </div>
               </div>
            </div>
        </div>
    )
}
export default Votepage