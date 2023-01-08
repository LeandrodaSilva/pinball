/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
import {h, withStyles, Component} from "../../client_deps.ts";
import CSS from "./styles.ts";
import AnimatedComponent from "../animated-component/animated-component.tsx";


class Platform extends Component {
  ID = "platform";
  element = null;
  then = 0;
  deltaTime = 0;
  left = 0;
  velocity = 500;
  getAction = () => new Set();

  didMount() {
    this.element = document.getElementById(this.ID);

    this.getAction = this.keyBoard({
      a: 'Left',
      d: 'Right',
      ArrowLeft: 'Left',
      ArrowRight: 'Right',
    });

    requestAnimationFrame(now => this.loop(now));
  }

  loop(now) {
    const direction = this.getAction();

    this.move(now, direction);

    requestAnimationFrame(now => this.loop(now));
  }

  keyBoard(keymap) {
    const pressing = new Set();

    document.addEventListener("keydown", ({ key }) =>
      keymap[key] && pressing.add(keymap[key])
    );

    document.addEventListener("keyup", ({ key }) =>
      keymap[key] && pressing.delete(keymap[key])
    );

    return () => pressing;
  }

  move(now, direction) {
    now *= 0.001; // convert to seconds
    this.deltaTime = now - this.then;
    this.then = now;

    if (direction.has("Right")) {
      this.left += this.deltaTime * this.velocity;
    } else if (direction.has("Left")) {
      this.left -= this.deltaTime * this.velocity;
    }

    if (this.left <= 0) {
      this.left = 0;
    } else if (this.left >= 500) {
      this.left = 500;
    }

    this.element.style.left = this.left.toFixed(0) + "px";
  }

  render(_update) {
    return (
      <div
        id={this.ID}
      ></div>
    )
  }
}

export default withStyles(CSS)(Platform);
