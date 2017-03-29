import { render } from 'react-dom'
import domready from 'domready'

const Index = () => <h1>
  <a href='/resource.html' target='_blank'>hello kitty</a>
</h1>

Office.initialize = function () {
  domready(function () {
    console.log(Office)
    render(<Index />, document.getElementById('wrapper'))
  })
}
