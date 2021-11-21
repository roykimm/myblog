import { c as create_ssr_component, a as each, d as add_attribute, b as base, e as escape } from "./app-2abd4230.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".post-title.svelte-s2ajsp{font-size:1rem}p.svelte-s2ajsp{margin:0;font-size:0.9rem}li.svelte-s2ajsp{margin-bottom:20px}.tag.svelte-s2ajsp{text-decoration:none;margin-right:10px;color:#555}.tag.svelte-s2ajsp:hover{color:blue}.date.svelte-s2ajsp{font-size:0.7rem;color:gray}",
  map: null
};
const allPosts = { "./first-post.md": () => import("./first-post-2526cad9.js"), "./forth-post.md": () => import("./forth-post-56b9e73f.js"), "./second-post.md": () => import("./second-post-5f75347f.js"), "./third-post.md": () => import("./third-post-d51948dc.js") };
let body = [];
for (let path in allPosts) {
  body.push(allPosts[path]().then(({ metadata }) => {
    console.log(metadata);
    return { path, metadata };
  }));
}
const load = async () => {
  const posts = await Promise.all(body);
  console.log(posts);
  return { props: { posts } };
};
const Blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  const dateSortedPosts = posts.slice().sort((post1, post2) => {
    return new Date(post2.metadata.date) - new Date(post1.metadata.date);
  });
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css);
  return `<h1>Blog</h1>
<ul>${each(dateSortedPosts, ({ path, metadata: { title, tags, date } }) => `<li class="${"svelte-s2ajsp"}"><a class="${"post-title svelte-s2ajsp"}"${add_attribute("href", `${base}/blog/${path.replace(".md", "").replace(".svx", "")}`, 0)}>${escape(title)}</a>
			<p class="${"date svelte-s2ajsp"}">${escape(new Date(date).toISOString().slice(0, 10))}</p>
			<p class="${"svelte-s2ajsp"}">${each(tags, (tag) => `<a class="${"tag svelte-s2ajsp"}"${add_attribute("href", `${base}/tags/${tag}`, 0)}># ${escape(tag)}</a>`)}</p>
		</li>`)}
</ul>`;
});
export { Blog as default, load };
