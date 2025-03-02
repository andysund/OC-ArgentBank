import '../styles/features.css'
import Chat from '../assets/icon-chat.png'
import Money from '../assets/icon-money.png'
import Security from '../assets/icon-security.png'

const Features = () => {
  return (
    <section className="features">
    

      <div className="feature-full">
        <div className="feature-item">
          <img
            src={Chat}
            alt="Chat Icon"
            className="feature-icon"
          />
        </div>
        <div className="feature-item-content">
          <h3 className="feature-item-title">You are our #1 priority</h3>
          <p>
            Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </div>
      </div>

      <div className="feature-full">
        <div className="feature-item">
          <img
            src={Money}
            alt="Money Icon"
            className="feature-icon"
          />
        </div>
        <div className="feature-item-content">
          <h3 className="feature-item-title">More savings means higher rates</h3>
          <p>
            The more you save with us, the higher your interest rate will be!
          </p>
        </div>
      </div>

      <div className="feature-full">
        <div className="feature-item">
          <img
            src={Security}
            alt="Security Icon"
            className="feature-icon"
          />
        </div>
        <div className="feature-item-content">
          <h3 className="feature-item-title">Security you can trust</h3>
          <p>
            We use top of the line encryption to make sure your data and money is always safe.
          </p>
        </div>
      </div>

    </section>
  )
}

export default Features
