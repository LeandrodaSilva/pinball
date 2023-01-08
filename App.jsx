/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
import { h, renderSSR, Helmet, Component } from './client_deps.ts'
import Scene from "./components/scene/scene.jsx";

class App extends Component {
  render(_update) {
    return (
      <div id="app">
        <Helmet>
          <title>Nano JSX SSR</title>
          <meta name="description" content="Server Side Rendered Nano JSX Application" />
        </Helmet>

        <Scene/>
      </div>
    )
  }
}

const ssr = renderSSR(<App />)

export default ssr;
