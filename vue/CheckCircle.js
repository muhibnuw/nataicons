import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export default function render(_ctx, _cache) {
return (_openBlock(), _createBlock("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24"
}, [
  _createVNode("path", {
    fill: "#333",
    "fill-rule": "evenodd",
    d: "M4 12a8 8 0 0110.636-7.556 1 1 0 00.659-1.888A9.987 9.987 0 0012 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-.375-.02-.745-.061-1.11a1 1 0 00-1.988.22A8 8 0 114 12zm17.767-7.359a1 1 0 00-1.534-1.282l-7.707 9.22-3.873-3.337a1 1 0 00-1.306 1.516l4.643 4a1 1 0 001.42-.117l8.357-10z"
  })
]))
}