import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,c as p,a as n,b as a,w as o,F as u,d as s,e as r,o as d}from"./app.22a70bca.js";const m={},v=n("h1",{id:"create-a-priority-queue-in-javascript",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#create-a-priority-queue-in-javascript","aria-hidden":"true"},"#"),s(" create a Priority Queue in JavaScript")],-1),k=n("h2",{id:"question",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#question","aria-hidden":"true"},"#"),s(" Question")],-1),b={href:"https://storm.cis.fordham.edu/~yli/documents/CISC2200Spring15/Graph.pdf",target:"_blank",rel:"noopener noreferrer"},h=s("Priority Queue"),f=s(" is a commonly used data structure in algorithm problem. Especially useful for "),_=n("strong",null,"Top K",-1),y=s(" problem with a huge amount of input data, since it could avoid sorting the whole but keep a fixed-length sorted portion of it."),g=r(`<p>Since there is no built-in Priority Queue in JavaScript, in a real interview, you should tell interview saying that &quot;Suppose we already have a Priority Queue Class I can use&quot;, there is no time for you to write a Priority Queue from scratch.</p><p>But it is a good coding problem to practice, so please implement a Priority Queue with following interface</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">PriorityQueue</span> <span class="token punctuation">{</span>
  <span class="token comment">// compare is a function defines the priority, which is the order</span>
  <span class="token comment">// the elements closer to first element is sooner to be removed.</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">compare</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span>
  
  <span class="token comment">// add a new element to the queue</span>
  <span class="token comment">// you need to put it in the right order</span>
  <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>

  <span class="token comment">// remove the head element and return</span>
  <span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span>

  <span class="token comment">// get the head element</span>
  <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>

  <span class="token comment">// get the amount of items in the queue</span>
  <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here is an example to make it clearer</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> pq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PriorityQueue</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span>
<span class="token comment">// (a, b) =&gt; a - b means</span>
<span class="token comment">// smaller numbers are closer to index:0</span>
<span class="token comment">// which means smaller number are to be removed sooner</span>

pq<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">// now 5 is the only element</span>

pq<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment">// 2 added</span>

pq<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// 1 added</span>

pq<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// since smaller number are sooner to be removed</span>
<span class="token comment">// so this gives us 1</span>

pq<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 1 </span>
<span class="token comment">// 1 is removed, 2 and 5 are left</span>

pq<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 2 is the smallest now, this returns 2</span>

pq<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 2 </span>
<span class="token comment">// 2 is removed, only 5 is left</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2>`,6),w=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// complete the implementation"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"PriorityQueue"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token operator"},":"),s(" any"),n("span",{class:"token punctuation"},","),s(" b"),n("span",{class:"token operator"},":"),s(" any"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" -"),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"compare"),s(` - 
   * compare function, similar to parameter of Array.prototype.sort
   */`)]),s(`
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"compare"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("compare "),n("span",{class:"token operator"},"="),s(" compare"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * return `),n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}"),s(` amount of items
   */`)]),s(`
  `),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token doc-comment comment"},`/**
   * returns the head element
   */`),s(`
  `),n("span",{class:"token function"},"peek"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("any"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"element"),s(` - new element to add
   */`)]),s(`
  `),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"element"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
   
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * remove the head element
   * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("any"),n("span",{class:"token punctuation"},"}")]),s(` the head element
   */`)]),s(`
  `),n("span",{class:"token function"},"poll"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("h2",{id:"source",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#source","aria-hidden":"true"},"#"),s(" Source")],-1),x={href:"https://bigfrontend.dev/problem/create-a-priority-queue-in-JavaScript",target:"_blank",rel:"noopener noreferrer"},j=s("Source From");function Q(C,P){const t=e("ExternalLinkIcon"),i=e("CodeGroupItem"),c=e("CodeGroup");return d(),p(u,null,[v,k,n("p",null,[n("a",b,[h,a(t)]),f,_,y]),g,a(c,null,{default:o(()=>[a(i,{title:"javascript",active:""},{default:o(()=>[w]),_:1})]),_:1}),q,n("p",null,[n("a",x,[j,a(t)])])],64)}var G=l(m,[["render",Q],["__file","create-a-priority-queue-in-javascript.html.vue"]]);export{G as default};
