import {Component} from 'react'

import './index.css'

const headImgUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
class CoinToss extends Component {
  state = {toss: headImgUrl, total: 0, heads: 0, tails: 0}

  clickTossButton = () => {
    const tossResult = Math.floor(Math.random() * 2)

    const tailImgUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    const result =
      tossResult === 0
        ? {image: headImgUrl, headCount: 1, tailCount: 0}
        : {image: tailImgUrl, headCount: 0, tailCount: 1}

    this.setState(prevState => ({
      total: prevState.total + 1,
      toss: result.image,
      heads: prevState.heads + result.headCount,
      tails: prevState.tails + result.tailCount,
    }))
  }

  render() {
    const {total, toss, heads, tails} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>

          <div className="image-container">
            <img className="coin-image" src={toss} alt="toss result" />
            <button
              onClick={this.clickTossButton}
              className="toss-button"
              type="button"
            >
              Toss Coin
            </button>
          </div>

          <div className="result-container">
            <p className="count">Total:{total}</p>
            <p className="count">Heads:{heads}</p>
            <p className="count">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss

/* Another solution.......



import {Component} from 'react'

import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: HEADS_IMG_URL,
    headsCount: 0,
    tailsCount: 0,
  }

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    if (toss === 0) {
      tossImage = HEADS_IMG_URL
      latestHeadsCount += 1
    } else {
      tossImage = TAILS_IMG_URL
      latestTailsCount += 1
    }
    this.setState({
      tossResultImage: tossImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img
            src={tossResultImage}
            alt="toss result"
            className="toss-result-img"
          />
          <button type="button" className="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
 */
