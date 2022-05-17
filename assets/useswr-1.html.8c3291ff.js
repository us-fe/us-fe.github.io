import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,c as l,a as n,b as a,w as o,F as i,d as s,e as u,o as d}from"./app.22a70bca.js";const k={},m=n("h1",{id:"useswr-i",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#useswr-i","aria-hidden":"true"},"#"),s(" useSWR() I")],-1),v=n("h2",{id:"question",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#question","aria-hidden":"true"},"#"),s(" Question")],-1),h={href:"https://swr.vercel.app/",target:"_blank",rel:"noopener noreferrer"},b=s("SWR"),_=s(" is a popular library of data fetching."),f=u(`<p>Let&#39;s try to implement the basic usage by ourselves.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> error <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSWR</span><span class="token punctuation">(</span><span class="token string">&#39;/api&#39;</span><span class="token punctuation">,</span> fetcher<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>failed<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>loading<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>succeeded<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>this is not to replicate the true implementation of <code>useSWR()</code></li><li>The first argument <code>key</code> is for deduplication, we can safely ignore it for now</li></ol><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2>`,4),g=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"useSWR"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token constant"},"E"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),s(`
  _key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function-variable function"},"fetcher"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token constant"},"T"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token builtin"},"Promise"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
  data`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),s(`
  error`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"E"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your code here"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// if you want to try your code on the right panel"),s(`
`),n("span",{class:"token comment"},"// remember to export App() component like below"),s(`

`),n("span",{class:"token comment"},"// export function App() {"),s(`
`),n("span",{class:"token comment"},"//   return <div>your app</div>"),s(`
`),n("span",{class:"token comment"},"// }"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("h2",{id:"source",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#source","aria-hidden":"true"},"#"),s(" Source")],-1),w={href:"https://bigfrontend.dev/react/useSWR-1",target:"_blank",rel:"noopener noreferrer"},x=s("Source From");function S(C,R){const t=e("ExternalLinkIcon"),c=e("CodeGroupItem"),p=e("CodeGroup");return d(),l(i,null,[m,v,n("p",null,[n("a",h,[b,a(t)]),_]),f,a(p,null,{default:o(()=>[a(c,{title:"typescript",active:""},{default:o(()=>[g]),_:1})]),_:1}),y,n("p",null,[n("a",w,[x,a(t)])])],64)}var E=r(k,[["render",S],["__file","useswr-1.html.vue"]]);export{E as default};