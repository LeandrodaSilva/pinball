/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
import {h, Component, withStyles} from "../../client_deps.ts";
import SceneCSS from "./styles.ts";
import Platform from "../platform/platform.jsx";

class Scene extends Component {
  render(_update) {
    return (
      <div id="scene">
        <Platform/>
      </div>
    )
  }
}

export default withStyles(SceneCSS)(Scene);
