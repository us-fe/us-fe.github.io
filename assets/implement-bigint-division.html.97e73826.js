import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,c as r,a as n,b as e,w as t,F as p,d as s,e as d,o as u}from"./app.22a70bca.js";const m={},v=n("h1",{id:"implement-bigint-division",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#implement-bigint-division","aria-hidden":"true"},"#"),s(" implement BigInt division")],-1),k=n("h2",{id:"question",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#question","aria-hidden":"true"},"#"),s(" Question")],-1),b=s("This is a follow-up on "),h={href:"https://bigfrontend.dev/problem/implement-BigInt-multiplication",target:"_blank",rel:"noopener noreferrer"},_=s("114. implement BigInt multiplication"),g=s("."),f=d(`<p>You are asked to create a BigInt division function.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">divide</span><span class="token punctuation">(</span>
  <span class="token string">&#39;1123456787654323456789&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;1234567887654323456&#39;</span>
<span class="token punctuation">)</span>
<span class="token comment">// &#39;910&#39;</span>

<span class="token function">divide</span><span class="token punctuation">(</span>
  <span class="token string">&#39;-1123456787654323456789&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;1234567887654323456&#39;</span>
<span class="token punctuation">)</span>
<span class="token comment">// &#39;-910&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice the result should be <strong>rounded towards 0</strong>.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">divide</span><span class="token punctuation">(</span>
  <span class="token string">&#39;5&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;2&#39;</span>
<span class="token punctuation">)</span>
<span class="token comment">// &#39;2&#39;</span>

<span class="token function">divide</span><span class="token punctuation">(</span>
  <span class="token string">&#39;-3&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;2&#39;</span>
<span class="token punctuation">)</span>
<span class="token comment">// &#39;-1&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2>`,5),x=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"a"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"b"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"divide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("a"),n("span",{class:"token punctuation"},","),s(" b")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your code here"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("h2",{id:"source",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#source","aria-hidden":"true"},"#"),s(" Source")],-1),B={href:"https://bigfrontend.dev/problem/implement-BigInt-division",target:"_blank",rel:"noopener noreferrer"},I=s("Source From");function w(C,y){const i=a("ExternalLinkIcon"),o=a("CodeGroupItem"),c=a("CodeGroup");return u(),r(p,null,[v,k,n("p",null,[b,n("a",h,[_,e(i)]),g]),f,e(c,null,{default:t(()=>[e(o,{title:"javascript",active:""},{default:t(()=>[x]),_:1})]),_:1}),j,n("p",null,[n("a",B,[I,e(i)])])],64)}var V=l(m,[["render",w],["__file","implement-bigint-division.html.vue"]]);export{V as default};
