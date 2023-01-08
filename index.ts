import App from "./App.jsx";
import {Helmet} from "./client_deps.ts";

const { body, head, footer } = Helmet.SSR(App)

const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      html, body, #app {
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
      }
    </style>
    <title></title>
    ${head.join('\n')}
  </head>
  <body>
    ${body}
    ${footer.join('\n')}
    <script src="/js/bundle.js"></script>
  </body>
</html>`

export default html;
