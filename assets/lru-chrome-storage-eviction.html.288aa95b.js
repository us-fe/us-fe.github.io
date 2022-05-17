import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,c as p,a as n,b as a,w as o,F as r,d as s,e as u,o as k}from"./app.22a70bca.js";const d={},m=n("h1",{id:"lru-chrome-storage-automatic-eviction",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#lru-chrome-storage-automatic-eviction","aria-hidden":"true"},"#"),s(" LRU - Chrome storage automatic eviction")],-1),b=n("h2",{id:"question",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#question","aria-hidden":"true"},"#"),s(" Question")],-1),v=n("p",null,"Chrome uses LRU algorithm to evict data when it has to.",-1),g=s("Wactch "),h={href:"https://youtu.be/NNuTV-gjlZQ?t=387",target:"_blank",rel:"noopener noreferrer"},y=s("this Youtube video"),f=s(" for detail explanation, starting from 6:25 to 7:38."),_=u(`<p>Now you are asked to implement similar - Implement a class <code>LRUStorage</code>.</p><ol><li>This is of course not to reflect the true implementation in Chrome.</li><li><code>getData</code> and <code>setData</code> should both be treated as data being &#39;used&#39;.</li><li>considering time precision issue, your class needs to accept <code>getTimestamp</code> as second argument of constructor function for our tests.</li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">OriginData</span> <span class="token punctuation">{</span>
  origin<span class="token operator">:</span> <span class="token builtin">string</span>
  lastUsed<span class="token operator">:</span> <span class="token builtin">number</span>
  size<span class="token operator">:</span> <span class="token builtin">number</span>
  persistent<span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">LRUStorage</span> <span class="token punctuation">{</span>
  capacity<span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token comment">// to use the data for origin</span>
  <span class="token comment">// return size of the data or undefined if not exist</span>
  <span class="token function">getData</span><span class="token punctuation">(</span>origin<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> OriginData <span class="token operator">|</span> <span class="token keyword">undefined</span>
  
  <span class="token comment">// updating data for origin</span>
  <span class="token comment">// return boolean to indicate success or failure</span>
  <span class="token comment">// If the total size exceeds capacity,</span>
  <span class="token comment">// Least Recently Used non-persistent origin data other than itself should be evicted.</span>

  <span class="token function">setData</span><span class="token punctuation">(</span>origin<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> size<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span>

  <span class="token comment">// manually clear data for origin</span>
  <span class="token function">clearData</span><span class="token punctuation">(</span>origin<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>

  <span class="token comment">// change data for origin to be persistent</span>
  <span class="token comment">// it only handles existing data not the data added later</span>
  <span class="token comment">// persistent data cannot be evicted unless manually clear it</span>
  <span class="token function">makePersistent</span><span class="token punctuation">(</span>origin<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2>`,4),w=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@typedef"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("object"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token class-name"},"OriginData"),s(`
 * `),n("span",{class:"token keyword"},"@property"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"origin"),s(`
 * `),n("span",{class:"token keyword"},"@property"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"lastUsed"),s(`
 * `),n("span",{class:"token keyword"},"@property"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"size"),s(`
 * `),n("span",{class:"token keyword"},"@property"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("boolean"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"persistent"),s(`
 */`)]),s(`

`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"MyLRUStorage"),s("  "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"capacity"),s(`
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"getTimestamp"),s(`
   */`)]),s(`
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("capacity"),n("span",{class:"token punctuation"},","),s(" getTimestamp")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("capacity "),n("span",{class:"token operator"},"="),s(` capacity
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("getTimestamp "),n("span",{class:"token operator"},"="),s(` getTimestamp
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"origin"),s(`
   * `),n("span",{class:"token keyword"},"@returns"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("OriginData "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token punctuation"},"}")]),s(`
   */`)]),s(`
  `),n("span",{class:"token function"},"getData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"origin"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"origin"),s(`
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"size"),s(`
   * `),n("span",{class:"token keyword"},"@returns"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("boolean"),n("span",{class:"token punctuation"},"}")]),s(`
   */`)]),s(`
  `),n("span",{class:"token function"},"setData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("origin"),n("span",{class:"token punctuation"},","),s(" size")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"origin"),s(`
   * `),n("span",{class:"token keyword"},"@returns"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},"}")]),s(`
   */`)]),s(`
  `),n("span",{class:"token function"},"clearData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"origin"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"origin"),s(`
   * `),n("span",{class:"token keyword"},"@returns"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},"}")]),s(`
   */`)]),s(`
  `),n("span",{class:"token function"},"makePersistent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"origin"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("pre",null,[n("code",null,`::: code-group-item typescript
`)],-1),D=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"OriginData"),s(),n("span",{class:"token punctuation"},"{"),s(`
  origin`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
  lastUsed`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),s(`
  size`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),s(`
  persistent`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"boolean"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"LRUStorage"),s(),n("span",{class:"token punctuation"},"{"),s(`
  capacity`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),s(`
  `),n("span",{class:"token function"},"getData"),n("span",{class:"token punctuation"},"("),s("origin"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(" OriginData "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"undefined"),s(`
  `),n("span",{class:"token function"},"setData"),n("span",{class:"token punctuation"},"("),s("origin"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"boolean"),s(`
  `),n("span",{class:"token function"},"clearData"),n("span",{class:"token punctuation"},"("),s("origin"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"void"),s(`
  `),n("span",{class:"token function"},"makePersistent"),n("span",{class:"token punctuation"},"("),s("origin"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"void"),s(` 
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"MyLRUStorage"),s(),n("span",{class:"token keyword"},"implements"),s(),n("span",{class:"token class-name"},"LRUStorage"),s(),n("span",{class:"token punctuation"},"{"),s(`
  capacity`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),s(`
  `),n("span",{class:"token function-variable function"},"getTimestamp"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),s(`
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),s("capacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function-variable function"},"getTimestamp"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("capacity "),n("span",{class:"token operator"},"="),s(` capacity
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("getTimestamp "),n("span",{class:"token operator"},"="),s(` getTimestamp
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token comment"},"// your code here"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("p",null,":::",-1),U=n("h2",{id:"source",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#source","aria-hidden":"true"},"#"),s(" Source")],-1),C={href:"https://bigfrontend.dev/problem/lru-chrome-storage-eviction",target:"_blank",rel:"noopener noreferrer"},L=s("Source From");function S(z,R){const t=e("ExternalLinkIcon"),c=e("CodeGroupItem"),i=e("CodeGroup");return k(),p(r,null,[m,b,v,n("p",null,[g,n("a",h,[y,a(t)]),f]),_,a(i,null,{default:o(()=>[a(c,{title:"javascript",active:""},{default:o(()=>[w]),_:1}),x,D,T]),_:1}),U,n("p",null,[n("a",C,[L,a(t)])])],64)}var I=l(d,[["render",S],["__file","lru-chrome-storage-eviction.html.vue"]]);export{I as default};
