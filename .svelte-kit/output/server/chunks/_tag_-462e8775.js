import { c as create_ssr_component, e as escape, a as each, d as add_attribute } from "./app-2abd4230.js";
const allPosts = { "../blog/first-post.md": () => import("./first-post-2526cad9.js"), "../blog/forth-post.md": () => import("./forth-post-56b9e73f.js"), "../blog/second-post.md": () => import("./second-post-5f75347f.js"), "../blog/third-post.md": () => import("./third-post-d51948dc.js") };
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
