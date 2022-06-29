import { c as create_ssr_component, e as escape, a as each } from "../../chunks/index-57608c9a.js";
var calculator_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "#calculator.svelte-qshn2b{display:grid;grid-template-rows:auto 1fr;row-gap:3em;padding:30px 30px;background-color:white;border:1em solid #719ed1;max-width:400px;border-radius:2em;height:650px}#display.svelte-qshn2b{height:5em;background-color:#e3f2fd;display:flex;justify-content:right;align-items:center;padding-right:30px;border-radius:100vw;overflow:hidden}.button-container.svelte-qshn2b{display:grid;column-gap:15px;row-gap:10px;grid-template-columns:auto auto auto auto}.button.svelte-qshn2b{display:flex;align-items:center;justify-content:center;background-color:#e3f2fd;height:2.5em;width:2.5em;font-size:2em;border-radius:100vw}.button.svelte-qshn2b:hover{background-color:#64b5f6;color:white;cursor:pointer}")();
const css = {
  code: "#calculator.svelte-qshn2b{display:grid;grid-template-rows:auto 1fr;row-gap:3em;padding:30px 30px;background-color:white;border:1em solid #719ed1;max-width:400px;border-radius:2em;height:650px}#display.svelte-qshn2b{height:5em;background-color:#e3f2fd;display:flex;justify-content:right;align-items:center;padding-right:30px;border-radius:100vw;overflow:hidden}.button-container.svelte-qshn2b{display:grid;column-gap:15px;row-gap:10px;grid-template-columns:auto auto auto auto}.button.svelte-qshn2b{display:flex;align-items:center;justify-content:center;background-color:#e3f2fd;height:2.5em;width:2.5em;font-size:2em;border-radius:100vw}.button.svelte-qshn2b:hover{background-color:#64b5f6;color:white;cursor:pointer}",
  map: null
};
const Calculator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const buttons = [7, 8, 9, "x", 4, 5, 6, "-", 1, 2, 3, "+", 0, "AC", "=", "/"];
  let display = "";
  $$result.css.add(css);
  return `<div id="${"calculator"}" class="${"svelte-qshn2b"}"><div id="${"display"}" class="${"svelte-qshn2b"}">${display !== NaN ? `${escape(display)}` : `&#39;Error&#39;`}</div>
	<div class="${"button-container svelte-qshn2b"}">${each(buttons, (button) => {
    return `<div class="${"button svelte-qshn2b"}">${escape(button)}
			</div>`;
  })}</div>
</div>`;
});
export { Calculator as default };
