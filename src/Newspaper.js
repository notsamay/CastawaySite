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
            <h3>WHAT IS THIS EVENT?</h3>
            <p>
              Hackathons are collaborative events where tech enthusiasts, developers, and designers come together to create innovative solutions within a short timeframe, usually ranging from a few hours to a few days. These events encourage creativity and teamwork, allowing participants to develop prototypes or applications that address real-world problems. Hackathons often focus on various themes like healthcare, fintech, or sustainability, providing a platform for networking, skill enhancement, and collaboration. Participants not only compete for prizes and recognition but also have the opportunity to connect with industry experts and potentially launch new startups or technologies.
            </p>
            <h3>INFO</h3>
            <p>
              Starts at 6:30pm on Friday TBD and ends at 2:00pm on Sunday TBD. Will be hosted on TBD, TBD Street, Charleston
            </p>
            <h4>BROUGHT TO YOU BY </h4>

            <h4>Name 1 <br/>Name 2 <br/>Name 3 <br/>Name 4</h4>
   


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
          </div>
          <div className="Panels" style={{ paddingRight: '5px', borderRight: '2px solid', paddingLeft: '5px', borderLeft: '2px solid' }}>
            <h3>WHO CAN COME?</h3>
            <p>Anyone under the age of 18 or any individual not yet in university can participate in this event.</p>
            <h3>FAQ</h3>
            <h4>IS ATENDANCE FREE? </h4>

            <p>Attendance is 100% free and is open to all highschoolers in the area and the world.</p>

            <h4>I’M NEW TO PROGRAMMING CAN I ATTEND? </h4>

            <p>Castaways welcomes hackers of all skill levels. Dive into our interactive workshops and learn alongside fellow enthusiasts! For those who prefer to learn from home, YouTube and our workshops provide excellent resources. Plus, you’ll be surprised at how rapidly you can acquire new skills by participating in a hackathon.</p>
            <h4>WHAT SHOULD I BRING? </h4>

            <p>Bring some form of identification along with a laptop, A laptop charger and a sleeping bag. Don't bring food because it will be provided at the event</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Paper;
