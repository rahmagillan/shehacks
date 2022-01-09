import styles from './style.css'
import quote from './quote_1.jpg'

export default function Growth() {
    return (
        <div className="grid-container" style={styles}>

        <div className="box-one">
          <h4>Daily Positivity Board</h4>
          <span>You're killing it!💖</span>
        </div>
    
        <div className="box-two">
          <h3>Your Personal Goals</h3>
          <h6>Writing down your personal goals makes it more likely for you to accomplish them!💪</h6>
    
          <ul>
            <li>Reflect on your skills and abilitites</li>
            <li>Where do you see yourself in the near future?</li>
            <li>What skills do you need to make that possible?</li>
            <li>How will you learn these skills?</li>
          </ul>
    
        </div>
    
        <div className="box-three">
          <h3>Habit Tracker</h3>
          <input className="a-input" type="text" name="" id="Habit tracker"
          placeholder="Describe your habits here..." />
        </div>
    
        <div className="box-four">
          <img className="a-img" src={quote} alt="Inspirational Quote" />
        </div>
    
        <div className="box-five">
          <h3>Next Steps</h3>
          <h6>You've completed an interview, great! What are the next steps? Jot them down here.</h6>
          <input className="a-input" type="text" name="" id="Habit tracker"
          placeholder="Thank you email? Follow-up question? Write away..." />
        </div>
    
        <div className="box-six">
          <h3>Resources</h3>
          <p>Behavioural Questions</p>
          <ul>
            <li><a className="a-a" href="url">30 Behavioral Interview Questions</a></li>
            <li><a className="a-a" href="url">Prep For These Common Questions!</a></li>
            <li><a className="a-a" href="url">Client-Facing Interview Questions</a></li>
          </ul>
    
          <p>Technical Interview Prep</p>
          <ul>
            <li><a className="a-a" href="url">Skill-Based Interview Questions</a></li>
            <li><a className="a-a" href="url">15 Must-Ask Tech Questions</a></li>
            <li><a className="a-a" href="url">How to Prep For An IT Interview </a></li>
          </ul>
    
          <p>Mental Health</p>
          <ul>
            <li><a className="a-a" href="url">Self-Care Ideas For The Night Before</a></li>
          </ul>
    
        </div>
      </div>
    )
}