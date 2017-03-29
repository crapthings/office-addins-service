import { render } from 'react-dom'
import domready from 'domready'

const Index = () => <h1>hello kitty</h1>

domready(function () {
  render(<Index />, document.getElementById('wrapper'))
})
