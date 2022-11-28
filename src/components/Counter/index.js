import {component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count: 0}
  onIncrement = () => {
      this.state(prevState => {
           console.log(`previous state value ${prevState.count}`)
           return (count: prevState.count + 1)
      })
   
  }

  onDecrement = () => {
      this.state(prevState => {
          console.log(`previous state value ${prevState.count}`)
          return (count: prevState.count - 1)
      })
   
  }

  render() {
      const {count} =this.state
    <div>
      <h1 className="heading">Counter</h1>
      <p class="count">{count}</p>

      <div>
        <button className="button" onClick={this.onIncrement}>
          Increase
        </button>
        <button className="button" onClick={this.onDecrement}>
          Decrease
        </button>
      </div>
    </div>
  }
}
