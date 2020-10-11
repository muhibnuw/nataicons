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
    d: "M4 12a8 8 0 1116 0 8 8 0 01-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 5.5a1 1 0 10-2 0v4.032l-2.64 2.2a1 1 0 101.28 1.536l3-2.5A1 1 0 0013 12V7.5z"
  })
]))
}