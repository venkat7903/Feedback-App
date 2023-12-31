// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {gotFeedback: false}

  onFeedback = () => this.setState({gotFeedback: true})

  onFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <>
        <h1 className="title">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis">
          {emojis.map(each => (
            <li key={each.id} className="emoji" onClick={this.onFeedback}>
              <button type="button" className="button">
                <img
                  src={each.imageUrl}
                  alt={each.name}
                  className="emoji-img"
                />
              </button>
              <p>{each.name}</p>
            </li>
          ))}
        </ul>
      </>
    )
  }

  onThankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <>
        <img src={loveEmojiUrl} alt="love emoji" className="love-img" />
        <h1 className="thank-title">Thank You!</h1>
        <p className="feedback-desc">
          We will use your feedback to improve our customer support performance
        </p>
      </>
    )
  }

  render() {
    const {gotFeedback} = this.state
    return (
      <div className="app-container">
        <div className="sub-app-container">
          {gotFeedback ? this.onThankYouScreen() : this.onFeedbackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
