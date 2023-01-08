const r = Deno.run({ cmd: ["deno", "task", "start"] });
await r.status();
