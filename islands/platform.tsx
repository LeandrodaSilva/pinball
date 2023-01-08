/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
import Platform from '../components/platform/platform.jsx';
import { h, hydrate } from '../client_deps.ts'

const el = document.getElementById('platform');
if (el) hydrate(<Platform  />, el)
