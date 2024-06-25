import './App.css';
import './Map.js';

function Paper() {
  return (
    <div>
      <header className="Header">
        <h1 className="App-title">CASTAWAYS DAILY NEWS</h1>
        <h3 className="App-sub">ILLUSTRATED WEEKLY NEWSPAPER</h3>
      </header>

      <div className="Content">
        <div className='Main'>
          <div className="Panels" style={{ paddingLeft: '5px', borderLeft: '2px solid', paddingRight: '5px', borderRight: '2px solid' }}>
            <h3><span className="highlight">WHAT IS A</span> HACKATHON</h3>
            <p>
              Hackathons are collaborative events where tech enthusiasts, developers, and designers come together to create innovative solutions within a short timeframe, usually ranging from a few hours to a few days. These events encourage creativity and teamwork, allowing participants to develop prototypes or applications that address real-world problems. Hackathons often focus on various themes like healthcare, fintech, or sustainability, providing a platform for networking, skill enhancement, and collaboration. Participants not only compete for prizes and recognition but also have the opportunity to connect with industry experts and potentially launch new startups or technologies.
            </p>
            <h3 className='small-title'>INFO</h3>
            <div className="SignUp3">
              <img src="path_to_your_image.jpg" alt="Old newspaper style" />
            </div>
            <p>
              Starts at 6:30pm on Friday TBD and ends at 2:00pm on Sunday TBD. Will be hosted on TBD, TBD Street, Charleston
            </p>
            <h3>INSERT</h3>
          
            <p style={{ borderBottom: '0px solid' }}>tortor    et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit</p>
   


          </div>
          <div className="Middle">
            <div className="SignUp">
              <img src="path_to_your_image.jpg" alt="Old newspaper style" />
            </div>
            <h1 className="MiddleText">PIRATES ATTACK<br/><span className="highlight">CHARLESTON!</span></h1>
       
            <p className="first-letter">Dear Hacker,
              Charleston has long been plagued by persistent pirate attacks. Its strategic coastal location, advantageous for trade, also makes it a prime target for marauding pirates like the notorious Blackbeard. These frequent raids leave the city and its residents in a constant state of vigilance.
              Despite ongoing efforts to fortify defenses, the cunning and determination of the pirates often outmatch them, causing significant losses and hardships. The social and economic fabric of Charleston is repeatedly disrupted, with trade routes affected and goods plundered. The city's culture is also influenced by this constant struggle, with pirate tales becoming part of local folklore.
              Charleston’s residents have adapted to this way of life, but the shadow of piracy looms large. The ongoing battle has forged a wary yet resilient community, always prepared for the next wave of attacks, united in their efforts to defend their home.
            </p>
            <h2 className="MiddleText2">SIGN UPS OPEN</h2>
            <div className='signup-cont' style={{ borderBottom: '2px solid' }}>
              <p style={{ borderBottom: '0px solid' }} >habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at</p>
              <div className="SignUp2">
              <img src="path_to_your_image.jpg" alt="Old newspaper style" />
            </div>

            </div>
          </div>
          <div className="Panels" style={{ paddingRight: '5px', borderRight: '2px solid', paddingLeft: '5px', borderLeft: '2px solid' }}>
            <h3>ELIGIBILITY</h3>
            <p>Anyone under the age of 18 or any individual not yet in university can participate in this event.</p>
            <h3 className='small-title FAQ'>FAQ</h3>
            <h4>IS ATENDANCE FREE? </h4>


            <p>Attendance is 100% free and is open to all highschoolers in the area and the world.</p>

            <h4>I’M NEW TO PROGRAMMING CAN I ATTEND? </h4>

            <p>Castaways welcomes hackers of all skill levels. Dive into our interactive workshops and learn alongside fellow enthusiasts! For those who prefer to learn from home, YouTube and our workshops provide excellent resources. Plus, you’ll be surprised at how rapidly you can acquire new skills by participating in a hackathon.</p>
            <h4>WHAT SHOULD I BRING? </h4>

            <p>Bring some form of identification along with a laptop, A laptop charger and a sleeping bag. Don't bring food because it will be provided at the event</p>
            <h4>PARENTS ARE WORRIED? </h4>

              <p style={{ borderBottom: '0px solid' }}>condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor</p>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default Paper;
