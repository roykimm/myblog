import { c as create_ssr_component } from "./app-4d742649.js";
var Nav_svelte_svelte_type_style_lang = "";
const css = {
  code: ".nav-ul.svelte-12cy6fy{display:flex;align-items:center;justify-content:center;list-style:none}.nav-li.svelte-12cy6fy{padding:10px;margin:0}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="${"nav"}"><ul class="${"nav-ul svelte-12cy6fy"}"><li class="${"nav-li svelte-12cy6fy"}"><a class="${"nav-a"}" href="${"/"}">Home</a></li>
		<li class="${"nav-li svelte-12cy6fy"}"><a class="${"nav-a"}" href="${"/blog"}">Blog</a></li>
		<li class="${"nav-li svelte-12cy6fy"}"><a class="${"nav-a"}" href="${"/about"}">About</a></li>
		<li class="${"nav-li svelte-12cy6fy"}"><a class="${"nav-a"}" href="${"/projects"}">Projects</a></li></ul>
</nav>`;
});
export { Nav as default };
