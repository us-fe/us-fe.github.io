import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,c as p,b as e,w as t,a as n,F as u,e as r,d as s,o as d}from"./app.22a70bca.js";const m={},k=r(`<h1 id="create-a-simple-store-for-dom-element" tabindex="-1"><a class="header-anchor" href="#create-a-simple-store-for-dom-element" aria-hidden="true">#</a> Create a simple store for DOM element</h1><h2 id="question" tabindex="-1"><a class="header-anchor" href="#question" aria-hidden="true">#</a> Question</h2><p>We have <code>Map</code> in es6, so we could use any data as key, such as DOM element.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>domNode<span class="token punctuation">,</span> somedata<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>What if we need to support old JavaScript env like es5, how would you create your own Node Store as above?</p><p>You are asked to implement a Node Store, which supports DOM element as key.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">NodeStore</span> <span class="token punctuation">{</span>

  <span class="token function">set</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>
  
  <span class="token function">get</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>
  
  <span class="token function">has</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>note</em></p><p>Map is disabled when judging your code, it is against the goal of practicing.</p><p>You can create a simple general Map polyfill. Or since you are asked to support specially for DOM element, what is special about DOM element?</p><p>What is the Time / Space cost of your solution?</p><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2>`,12),v=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"NodeStore"),s(),n("span",{class:"token punctuation"},"{"),s(`
   `),n("span",{class:"token doc-comment comment"},[s(`/**
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("Node"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"node"),s(`
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("any"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"value"),s(`
   */`)]),s(`
  `),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
   
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("Node"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"node"),s(`
   * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("any"),n("span",{class:"token punctuation"},"}")]),s(`
   */`)]),s(`
  `),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
   
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("Node"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"node"),s(`
   * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("Boolean"),n("span",{class:"token punctuation"},"}")]),s(`
   */`)]),s(`
  `),n("span",{class:"token function"},"has"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"node"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("h2",{id:"source",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#source","aria-hidden":"true"},"#"),s(" Source")],-1),h={href:"https://bigfrontend.dev/problem/create-a-simple-store-for-DOM-node",target:"_blank",rel:"noopener noreferrer"},f=s("Source From");function _(g,y){const o=a("CodeGroupItem"),c=a("CodeGroup"),l=a("ExternalLinkIcon");return d(),p(u,null,[k,e(c,null,{default:t(()=>[e(o,{title:"javascript",active:""},{default:t(()=>[v]),_:1})]),_:1}),b,n("p",null,[n("a",h,[f,e(l)])])],64)}var N=i(m,[["render",_],["__file","create-a-simple-store-for-dom-node.html.vue"]]);export{N as default};
