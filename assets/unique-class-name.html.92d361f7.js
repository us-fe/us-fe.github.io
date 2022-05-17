import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,c as u,a as n,b as e,w as c,F as p,d as s,e as r,o as d}from"./app.22a70bca.js";const m={},v=n("h1",{id:"uglify-css-class-names",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#uglify-css-class-names","aria-hidden":"true"},"#"),s(" uglify CSS class names")],-1),k=n("h2",{id:"question",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#question","aria-hidden":"true"},"#"),s(" Question")],-1),b=s("If you use "),h={href:"https://github.com/webpack-contrib/css-loader",target:"_blank",rel:"noopener noreferrer"},_=s("css-loader"),f=s(" in your webpack project, "),g=n("code",null,"localIdentName",-1),q=s(" could be used to transform class names, like below:"),C=r(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">localIdentName</span><span class="token operator">:</span> <span class="token string">&quot;[path][name]__[local]--[hash:base64:5]&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Or you can create your own function to generate class names by setting <code>getLocalIdent</code>.</p><p><strong>Now please create a function to generate unique class names</strong> following rules below.</p><ol><li>only use alphabets: <code>a</code> to <code>z</code> , <code>A</code> to <code>Z</code></li><li>return one unique class name each time function is called</li><li>the class name sequence should first be in order of length, then in Alphabetical order(lowercase in front).</li><li>should provide a function to reset the sequence</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">getUniqueClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// &#39;a&#39;</span>

<span class="token function">getUniqueClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// &#39;b&#39;</span>

<span class="token function">getUniqueClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// &#39;c&#39;</span>

<span class="token comment">// skip cases till &#39;Y&#39;</span>

<span class="token function">getUniqueClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// &#39;Z&#39;</span>

<span class="token function">getUniqueClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// &#39;aa&#39;</span>

<span class="token function">getUniqueClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// &#39;ab&#39;</span>

<span class="token function">getUniqueClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// &#39;ac&#39;</span>

<span class="token comment">// skip more cases</span>

<span class="token function">getUniqueClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// &#39;ZZ&#39;</span>

<span class="token function">getUniqueClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// &#39;aaa&#39;</span>

<span class="token function">getUniqueClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// &#39;aab&#39;</span>

<span class="token function">getUniqueClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// &#39;aac&#39;</span>

getUniqueClassName<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">getUniqueClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// &#39;a&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2>`,6),N=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@returns"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getUniqueClassName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your code here"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

getUniqueClassName`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"reset"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your code here"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("pre",null,[n("code",null,`::: code-group-item typescript
`)],-1),U=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getUniqueClassName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your code here"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

getUniqueClassName`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"reset"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your code here"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("p",null,":::",-1),x=n("h2",{id:"source",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#source","aria-hidden":"true"},"#"),s(" Source")],-1),j={href:"https://bigfrontend.dev/problem/unique-class-name",target:"_blank",rel:"noopener noreferrer"},I=s("Source From");function S(G,V){const t=a("ExternalLinkIcon"),i=a("CodeGroupItem"),o=a("CodeGroup");return d(),u(p,null,[v,k,n("p",null,[b,n("a",h,[_,e(t)]),f,g,q]),C,e(o,null,{default:c(()=>[e(i,{title:"javascript",active:""},{default:c(()=>[N]),_:1}),y,U,w]),_:1}),x,n("p",null,[n("a",j,[I,e(t)])])],64)}var E=l(m,[["render",S],["__file","unique-class-name.html.vue"]]);export{E as default};
