import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,c as r,a as n,b as a,w as o,F as u,d as s,e as p,o as d}from"./app.22a70bca.js";const m={},v=n("h1",{id:"create-a-browser-history",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#create-a-browser-history","aria-hidden":"true"},"#"),s(" create a browser history")],-1),k=n("h2",{id:"question",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#question","aria-hidden":"true"},"#"),s(" Question")],-1),b=s("I believe you are very familiar about your browser you are currently visiting "),h={href:"https://bigfrontend.dev",target:"_blank",rel:"noopener noreferrer"},g=s("https://bigfrontend.dev"),_=s(" with."),w=p(`<p>The common actions relating to history are:</p><ol><li><code>new BrowserHistory()</code> - when you open a new tab, it is set with an empty history</li><li><code>goBack()</code> - go to last entry, notice the entries are kept so that <code>forward()</code> could get us back</li><li><code>forward()</code> - go to next visited entry</li><li><code>visit()</code> - when you enter a new address or click a link, this adds a new entry but truncate the entries which we could <code>forward()</code> to.</li></ol><p>Say we start a new tab, this is the empty history.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span> <span class="token punctuation">]</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then visit url A, B, C in turn.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span> <span class="token constant">A</span><span class="token punctuation">,</span> <span class="token constant">B</span><span class="token punctuation">,</span> <span class="token constant">C</span><span class="token punctuation">]</span>
        \u2191
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>We are currently at C, we could <code>goBack()</code> to B, then to A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span> <span class="token constant">A</span><span class="token punctuation">,</span> <span class="token constant">B</span><span class="token punctuation">,</span> <span class="token constant">C</span><span class="token punctuation">]</span>
  \u2191          
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>forward()</code> get us to B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span> <span class="token constant">A</span><span class="token punctuation">,</span> <span class="token constant">B</span><span class="token punctuation">,</span> <span class="token constant">C</span><span class="token punctuation">]</span>
     \u2191          
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Now if we visit a new url D, since we are currently at B, C is truncated.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span> <span class="token constant">A</span><span class="token punctuation">,</span> <span class="token constant">B</span><span class="token punctuation">,</span> <span class="token constant">D</span><span class="token punctuation">]</span>
        \u2191
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>You are asked to implement a <code>BrowserHistory</code> class to mimic the behavior.</p><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2>`,14),f=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"BrowserHistory"),s(),n("span",{class:"token punctuation"},"{"),s(`
  
  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"url"),s(`
   * if url is set, it means new tab with url
   * otherwise, it is empty new tab
   */`)]),s(`
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"url"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s(" string "),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"url"),s(`
   */`)]),s(`
  `),n("span",{class:"token function"},"visit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"url"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(` current url
   */`)]),s(`
  `),n("span",{class:"token keyword"},"get"),s(),n("span",{class:"token function"},"current"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token comment"},"// go to previous entry"),s(`
  `),n("span",{class:"token function"},"goBack"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token comment"},"// go to next visited url"),s(`
  `),n("span",{class:"token function"},"forward"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("h2",{id:"source",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#source","aria-hidden":"true"},"#"),s(" Source")],-1),j={href:"https://bigfrontend.dev/problem/create-a-browser-history",target:"_blank",rel:"noopener noreferrer"},x=s("Source From");function B(C,A){const t=e("ExternalLinkIcon"),c=e("CodeGroupItem"),i=e("CodeGroup");return d(),r(u,null,[v,k,n("p",null,[b,n("a",h,[g,a(t)]),_]),w,a(i,null,{default:o(()=>[a(c,{title:"javascript",active:""},{default:o(()=>[f]),_:1})]),_:1}),y,n("p",null,[n("a",j,[x,a(t)])])],64)}var G=l(m,[["render",B],["__file","create-a-browser-history.html.vue"]]);export{G as default};
