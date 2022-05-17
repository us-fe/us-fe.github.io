import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,c as l,a as n,b as a,w as p,F as u,d as s,e as r,o as d}from"./app.22a70bca.js";const k={},m=n("h1",{id:"create-a-middleware-system",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#create-a-middleware-system","aria-hidden":"true"},"#"),s(" create a middleware system")],-1),v=n("h2",{id:"question",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#question","aria-hidden":"true"},"#"),s(" Question")],-1),b=s("Have you ever used "),w={href:"http://expressjs.com/en/guide/using-middleware.html#using-middleware",target:"_blank",rel:"noopener noreferrer"},h=s("Express Middleware"),f=s(" before?"),g=r(`<p>Middleware functions are functions with fixed interface that could be chained up like following two functions.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/user/:id&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;sth wrong&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You are asked to create simplified Middleware system:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>
<span class="token keyword">type</span> <span class="token class-name">Request</span> <span class="token operator">=</span> object

<span class="token keyword">type</span> <span class="token class-name">NextFunc</span> <span class="token operator">=</span>  <span class="token punctuation">(</span>error<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>

<span class="token keyword">type</span> <span class="token class-name">MiddlewareFunc</span> <span class="token operator">=</span> 
  <span class="token punctuation">(</span>req<span class="token operator">:</span> Request<span class="token punctuation">,</span> next<span class="token operator">:</span> NextFunc<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>

<span class="token keyword">type</span> <span class="token class-name">ErrorHandler</span> <span class="token operator">=</span> 
  <span class="token punctuation">(</span>error<span class="token operator">:</span> Error<span class="token punctuation">,</span> req<span class="token operator">:</span> Request<span class="token punctuation">,</span> next<span class="token operator">:</span> NextFunc<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>

<span class="token keyword">class</span> <span class="token class-name">Middleware</span> <span class="token punctuation">{</span>
  <span class="token function">use</span><span class="token punctuation">(</span>func<span class="token operator">:</span> MiddlewareFunc <span class="token operator">|</span> ErrorHandler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// do any async operations</span>
    <span class="token comment">// call next() to trigger next function</span>
  <span class="token punctuation">}</span>
  <span class="token function">start</span><span class="token punctuation">(</span>req<span class="token operator">:</span> Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// trigger all functions with a req object</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now we can do something similar with Express</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> middleware <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Middleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

middleware<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   req<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">1</span>
   <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

middleware<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   req<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">2</span>
   <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


middleware<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

middleware<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// {a: 1, b: 2}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice that <code>use()</code> could also accept an ErrorHandler which has 3 arguments. The error handler is triggered if <code>next()</code> is called with an extra argument or uncaught error happens, like following.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token keyword">const</span> middleware <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Middleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// throw an error at first function</span>
middleware<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   req<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">1</span>
   <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;sth wrong&#39;</span><span class="token punctuation">)</span> 
   <span class="token comment">// or \`next(new Error(&#39;sth wrong&#39;))\`</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// since error occurs, this is skipped</span>
middleware<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   req<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// since error occurs, this is skipped</span>
middleware<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// since error occurs, this is called</span>
middleware<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> req<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

middleware<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// Error: sth wrong</span>
<span class="token comment">// {a: 1}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2>`,9),_=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Middleware"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("MiddlewareFunc"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"func"),s(`
   */`)]),s(`
  `),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"func"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("Request"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"req"),s(`
   */`)]),s(`
  `),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"req"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("h2",{id:"source",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#source","aria-hidden":"true"},"#"),s(" Source")],-1),y={href:"https://bigfrontend.dev/problem/create-a-middleware-system",target:"_blank",rel:"noopener noreferrer"},q=s("Source From");function j(E,M){const t=e("ExternalLinkIcon"),o=e("CodeGroupItem"),c=e("CodeGroup");return d(),l(u,null,[m,v,n("p",null,[b,n("a",w,[h,a(t)]),f]),g,a(c,null,{default:p(()=>[a(o,{title:"javascript",active:""},{default:p(()=>[_]),_:1})]),_:1}),x,n("p",null,[n("a",y,[q,a(t)])])],64)}var C=i(k,[["render",j],["__file","create-a-middleware-system.html.vue"]]);export{C as default};
