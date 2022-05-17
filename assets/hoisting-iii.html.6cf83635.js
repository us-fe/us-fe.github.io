import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,c as t,a as n,b as o,F as i,e as c,d as p,o as l}from"./app.22a70bca.js";const r={},u=c(`<h1 id="hoisting-iii" tabindex="-1"><a class="header-anchor" href="#hoisting-iii" aria-hidden="true">#</a> Hoisting III</h1><h2 id="question" tabindex="-1"><a class="header-anchor" href="#question" aria-hidden="true">#</a> Question</h2><p>What does the code snippet to the right output by <code>console.log</code>?</p><h2 id="snippet" tabindex="-1"><a class="header-anchor" href="#snippet" aria-hidden="true">#</a> Snippet</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span>

<span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  a <span class="token operator">=</span> <span class="token number">2</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
  <span class="token keyword">var</span> a
<span class="token punctuation">}</span>

<span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span> <span class="token keyword">in</span> window<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2>`,6),d={href:"https://bigfrontend.dev/quiz/Hoisting-III",target:"_blank",rel:"noopener noreferrer"},k=p("Source From");function v(h,m){const s=e("ExternalLinkIcon");return l(),t(i,null,[u,n("p",null,[n("a",d,[k,o(s)])])],64)}var _=a(r,[["render",v],["__file","hoisting-iii.html.vue"]]);export{_ as default};
