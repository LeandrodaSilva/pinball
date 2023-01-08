/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
import Scene from '../components/scene/scene.jsx';
import { h, hydrate } from '../client_deps.ts'

const el = document.getElementById('scene');
if (el) hydrate(<Scene  />, el)
