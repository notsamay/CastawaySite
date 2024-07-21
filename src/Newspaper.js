import React from 'react';
import './App.css';
import DynamicText from './DynamicText.js'; // Import DynamicText component
import DynamicText2 from './ScalingText.js'; // Import DynamicText component
import './Map.js';

function Paper() {
  return (
    <div className="Frame">
      <div className="Header">
      <img src="Title.png" alt="Header" className='Header'/>
      </div>
      <div className="Main">
        <h1>PIRATE ATTACK!</h1>
        <div className='Main-Flexbox'>
          <div className='Flex-Left'>
            <img src="Map.png" alt="MapIMG"/>
            <p className='MainText'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa sapien faucibus et molestie. Metus vulputate eu scelerisque felis imperdiet proin. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. In massa tempor nec feugiat nisl pretium fusce id. Diam in arcu cursus euismod quis viverra nibh cras. Amet venenatis urna cursus eget nunc scelerisque viverra mauris in. Enim facilisis gravida neque convallis. Id semper risus in hendrerit gravida rutrum quisque non tellus. Diam quam nulla porttitor massa id neque. Egestas sed tempus urna et pharetra. Accumsan lacus vel facilisis volutpat. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Nunc sed id semper risus in hendrerit gravida. Tempus quam pellentesque nec nam aliquam sem. Habitasse platea dictumst quisque sagittis purus sit. Elementum sagittis vitae et leo duis. Nisi est sit amet facilisis. Enim eu turpis egestas pretium. Lacus vestibulum sed arcu non odio euismod lacinia at. Dignissim enim sit amet venenatis urna cursus. Erat imperdiet sed euismod nisi porta lorem. Bibendum ut tristique et egestas quis ipsum. Et egestas quis ipsum suspendisse ultrices gravida dictum. Urna nunc id cursus metus aliquam eleifend mi in nulla. Tellus mauris a diam maecenas sed enim ut. Ullamcorper sit amet risus nullam eget felis eget.
            </p>
            <h2 className='FAQ'>FREQUENTLY ASKED QUESTIONS</h2>
            
            <hr/>

            <div className='FAQ-Flexbox'>
              <div className='FAQ-Left'>
                <p>
                  <span className="title">Am I Eligible? </span> <br/>
                  Our hackathon welcomes all high school students and anyone under the age of 18 who has not yet entered university. If you have a passion for technology and a desire to learn, you're encouraged to participate. For additional questions or specific eligibility concerns, please contact us at SamayUpadhya@gmail.com.
                </p>
                <p>
                  <span className="title">What Is A Hackathon? </span> <br/>
                  A hackathon is a collaborative event where participants, often in teams, work intensively to develop software or hardware solutions. The event typically lasts between 24 to 48 hours, during which teams tackle specific challenges, innovate, and build projects that are presented at the end of the competition.
                </p>


              </div>
              <div className='FAQ-Middle'>
                <p>
                  <span className="title">Are There Safety Procedures? </span> <br/>
                  We prioritize the safety and security of all participants. Our event includes a range of safety measures such as on-site staff and volunteers trained to handle emergencies. We also have protocols to ensure a respectful and secure environment for everyone involved.
                </p>
                <p>
                  <span className="title">What Is The Hack Club Gas Fund? </span> <br/>
                  The Hack Club Gas Fund assists with transportation costs for students attending our hackathons. If travel expenses are a concern, you can apply for support through this fund to help cover your transportation and ensure that financial constraints do not prevent you from participating.
                </p>

              </div>
              <div className='FAQ-Right'>
                
                <p>
                  <span className="title">Can I Bring a Team? </span> <br/>
                  Absolutely! Teams are encouraged to participate in the hackathon. You can form a team with friends, classmates, or other participants. If you don’t have a team, you can also join one at the event or work as an individual. Collaboration is a key part of the hackathon experience.
                </p>
                  <p>
                  <span className="title">Is Attendance Free? </span> <br/>
                  Yes, attending our hackathon is entirely free. We aim to provide a valuable experience without any financial barriers, making it accessible to high school students everywhere. This includes participants from both local and international locations.
                </p>
              </div>
            </div>
          </div>
          <div className='Flex-Right'>
            <DynamicText text1="UNDER 18? COME" text2="JOIN US!" />
            <DynamicText2 text1="IMPORTANT" text2="INFO" />
            <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa sapien faucibus et molestie. Metus vulputate eu scelerisque felis imperdiet proin. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. In massa tempor nec feugiat nisl pretium fusce id. Diam in arcu cursus euismod quis viverra nibh cras. Amet venenatis urna cursus eget nunc scelerisque viverra mauris in. Enim facilisis gravida neque convallis. Id semper risus in hendrerit gravida rutrum quisque non tellus. Diam quam nulla porttitor massa id neque. Egestas sed tempus urna et pharetra. Accumsan lacus vel facilisis volutpat. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper.</p>
            <DynamicText text1="BUILD WHAT YOU" text2="DESIRE."/>

            <div className='SignUp'>
            <DynamicText2 text1="SIGNUP NOW" text2="FOR FREE!" />
            <div className='Sign-Up-Button'> 
              <h3>CLICK HERE</h3>
            </div>
            </div>

          </div>
        </div>
        <hr/>
      </div>
    </div>
  );
}

export default Paper;
