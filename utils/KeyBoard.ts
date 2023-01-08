export default function KeyBoard(keymap: { [key: string]: string }) {
  const pressing = new Set();

  document.addEventListener("keydown", ({ key }) =>
    keymap[key] && pressing.add(keymap[key])
  );

  document.addEventListener("keyup", ({ key }) =>
    keymap[key] && pressing.delete(keymap[key])
  );

  return () => pressing;
}
