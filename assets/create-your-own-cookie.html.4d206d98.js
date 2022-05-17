import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as s,c as d,b as a,w as o,a as e,F as r,e as u,d as n,o as p}from"./app.22a70bca.js";const m={},v=u(`<h1 id="create-your-own-cookie" tabindex="-1"><a class="header-anchor" href="#create-your-own-cookie" aria-hidden="true">#</a> create your own Cookie</h1><h2 id="question" tabindex="-1"><a class="header-anchor" href="#question" aria-hidden="true">#</a> Question</h2><p>We can get and set cookie by <code>document.cookie</code>.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">&#39;bfe=dev&#39;</span>
<span class="token comment">// &quot;bfe=dev&quot;</span>

document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">&#39;bfe1=dev1&#39;</span>
<span class="token comment">// &quot;bfe1=dev1&quot;</span>

document<span class="token punctuation">.</span>cookie
<span class="token comment">// &quot;bfe=dev; bfe1=dev1&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Please create your own <code>myCookie</code>.</p><ol><li>it should support get and set.</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>document<span class="token punctuation">.</span>myCookie <span class="token operator">=</span> <span class="token string">&#39;bfe=dev&#39;</span>
<span class="token comment">// &quot;bfe=dev&quot;</span>

document<span class="token punctuation">.</span>myCookie <span class="token operator">=</span> <span class="token string">&#39;bfe1=dev1&#39;</span>
<span class="token comment">// &quot;bfe1=dev1&quot;</span>

document<span class="token punctuation">.</span>myCookie
<span class="token comment">// &quot;bfe=dev; bfe1=dev1&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>there a few options to cookie, but in this problem, you only need to support <code>max-age</code> which means the cookie should be deleted after certain time(in seconds).</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>document<span class="token punctuation">.</span>myCookie <span class="token operator">=</span> <span class="token string">&#39;bfe=dev; max-age=1&#39;</span>
<span class="token comment">// &quot;bfe=dev; max-age=1&quot;</span>

document<span class="token punctuation">.</span>myCookie
<span class="token comment">// &quot;bfe=dev&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>after 1 second</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>document<span class="token punctuation">.</span>myCookie
<span class="token comment">// &quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>in your code, please enable <code>myCookie</code> in <code>install()</code> and remove the logic in <code>uninstall()</code>, these are used in judging.</li></ol><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2>`,13),k=e("div",{class:"language-javascript ext-js line-numbers-mode"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token comment"},"// enable myCookie"),n(`
`),e("span",{class:"token keyword"},"function"),n(),e("span",{class:"token function"},"install"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token punctuation"},"{"),n(`
  `),e("span",{class:"token comment"},"// your code here"),n(`
`),e("span",{class:"token punctuation"},"}"),n(`

`),e("span",{class:"token comment"},"// disable myCookie"),n(`
`),e("span",{class:"token keyword"},"function"),n(),e("span",{class:"token function"},"uninstall"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token punctuation"},"{"),n(`
  `),e("span",{class:"token comment"},"// your code here"),n(`
`),e("span",{class:"token punctuation"},"}"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),b=e("h2",{id:"source",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#source","aria-hidden":"true"},"#"),n(" Source")],-1),h={href:"https://bigfrontend.dev/problem/create-your-own-Cookie",target:"_blank",rel:"noopener noreferrer"},f=n("Source From");function g(_,y){const t=s("CodeGroupItem"),i=s("CodeGroup"),c=s("ExternalLinkIcon");return p(),d(r,null,[v,a(i,null,{default:o(()=>[a(t,{title:"javascript",active:""},{default:o(()=>[k]),_:1})]),_:1}),b,e("p",null,[e("a",h,[f,a(c)])])],64)}var x=l(m,[["render",g],["__file","create-your-own-cookie.html.vue"]]);export{x as default};
