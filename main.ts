import {Application, Router} from 'https://deno.land/x/oak@v10.6.0/mod.ts'
import html from "./index.ts";

const i = Deno.run({ cmd: ["deno", "task", "island"] });
await i.status();

const router = new Router()

router.get('/', context => {
  context.response.body = html;
})

const app = new Application()
app.use(router.routes())
app.use(router.allowedMethods())

// static content (serve islands)
app.use(async (context, next) => {
  const root = `${Deno.cwd()}/public`
  try {
    await context.send({ root })
  } catch {
    next()
  }
})

app.addEventListener('listen', ({ port }) => {
  console.log(`Listening on: http://localhost:${port}`)
})

await app.listen({ port: 8080 })
