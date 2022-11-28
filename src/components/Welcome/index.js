import {component} from 'react'

class Welcome extends component {
  render() {
    const {name} = this.props
    return <h1>Hello, {name}</h1>
  }
}

export default Welcome
