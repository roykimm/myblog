import { c as create_ssr_component, e as escape, d as each, a as add_attribute } from "./app-2c0c541b.js";
const allPosts = { "../blog/first-post.md": () => import("./first-post-2e44aed1.js"), "../blog/forth-post.md": () => import("./forth-post-b69cab80.js"), "../blog/second-post.md": () => import("./second-post-18613026.js"), "../blog/third-post.md": () => import("./third-post-0830aac9.js") };
let body = [];
for (let path in allPosts) {
  body.push(allPosts[path]().then(({ metadata }) => {
    console.log(metadata);
    return { path, metadata };
  }));
}
const load = async ({ page }) => {
  const posts = await Promise.all(body);
  const tag = page.params.tag;
  const filterdPosts = posts.filter((post) => {
    return post.metadata.tags.includes(tag);
  });
  return { props: { filterdPosts, tag } };
};
const U5Btagu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { filterdPosts } = $$props;
  let { tag } = $$props;
  if ($$props.filterdPosts === void 0 && $$bindings.filterdPosts && filterdPosts !== void 0)
    $$bindings.filterdPosts(filterdPosts);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  return `<h1>${escape(tag)}</h1>
${each(filterdPosts, ({ path, metadata: { title } }) => `<li><a${add_attribute("href", `/blog/${path.replace(".md", "").replace(".svx", "")}`, 0)}>${escape(title)}</a>
	</li>`)}`;
});
export { U5Btagu5D as default, load };
