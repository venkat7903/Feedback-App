// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {gotFeedback: false}

  onFeedback = () => {
    this.setState(prevState => ({
      gotFeedback: !prevState.gotFeedback,
    }))
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {gotFeedback} = this.state
    let element
    if (gotFeedback === false) {
      element = (
        <>
          <h1 className="title">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="emojis">
            {emojis.map(each => (
              <li key={each.id} className="emoji" onClick={this.onFeedback}>
                <img
                  src={each.imageUrl}
                  alt={each.name}
                  className="emoji-img"
                />
                <p>{each.name}</p>
              </li>
            ))}
          </ul>
        </>
      )
    } else {
      element = (
        <>
          <img src={loveEmojiUrl} alt="love emoji" className="love-img" />
          <h1 className="thank-title">Thank You!</h1>
          <p className="feedback-desc">
            We will use your feedback to improve our customer support
            performance
          </p>
        </>
      )
    }
    return (
      <div className="app-container">
        <div className="sub-app-container">{element}</div>
      </div>
    )
  }
}

export default Feedback
