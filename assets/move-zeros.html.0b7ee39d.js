import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,c as r,b as a,w as t,a as n,F as i,e as u,d as s,o as d}from"./app.22a70bca.js";const m={},k=u(`<h1 id="move-zeros" tabindex="-1"><a class="header-anchor" href="#move-zeros" aria-hidden="true">#</a> move zeros</h1><h2 id="question" tabindex="-1"><a class="header-anchor" href="#question" aria-hidden="true">#</a> Question</h2><p>Given an array of integers, move zeros to the end while keeping the order of the rest.</p><p>You should make the in-place change.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token function">moveZeros</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span> 
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span> <span class="token comment">// [1,2,3,0,0]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>What is the time &amp; space complexity of your approach?</p><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2>`,7),h=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("Array"),n("span",{class:"token punctuation"},"<"),s("any"),n("span",{class:"token punctuation"},">"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"list"),s(`
 * `),n("span",{class:"token keyword"},"@returns"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"moveZeros"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"list"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your code here"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("pre",null,[n("code",null,`::: code-group-item typescript
`)],-1),_=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"moveZeros"),n("span",{class:"token punctuation"},"("),s("list"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"Array"),n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"any"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your code here"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("p",null,":::",-1),f=n("h2",{id:"source",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#source","aria-hidden":"true"},"#"),s(" Source")],-1),y={href:"https://bigfrontend.dev/problem/move-zeros",target:"_blank",rel:"noopener noreferrer"},g=s("Source From");function x(w,C){const o=e("CodeGroupItem"),c=e("CodeGroup"),p=e("ExternalLinkIcon");return d(),r(i,null,[k,a(c,null,{default:t(()=>[a(o,{title:"javascript",active:""},{default:t(()=>[h]),_:1}),v,_,b]),_:1}),f,n("p",null,[n("a",y,[g,a(p)])])],64)}var j=l(m,[["render",x],["__file","move-zeros.html.vue"]]);export{j as default};