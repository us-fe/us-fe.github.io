import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,c as t,a as n,b as o,F as p,e as c,d as i,o as l}from"./app.22a70bca.js";const u={},r=c(`<h1 id="hoisting-iiii" tabindex="-1"><a class="header-anchor" href="#hoisting-iiii" aria-hidden="true">#</a> Hoisting IIII</h1><h2 id="question" tabindex="-1"><a class="header-anchor" href="#question" aria-hidden="true">#</a> Question</h2><p>What does the code snippet to the right output by <code>console.log</code>?</p><h2 id="snippet" tabindex="-1"><a class="header-anchor" href="#snippet" aria-hidden="true">#</a> Snippet</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">)</span>

<span class="token keyword">var</span> b
<span class="token keyword">function</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
b <span class="token operator">=</span> <span class="token number">1</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> b<span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> c<span class="token punctuation">)</span>

<span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  d <span class="token operator">=</span> <span class="token string">&#39;2&#39;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> d<span class="token punctuation">)</span>
  <span class="token keyword">function</span> <span class="token function">d</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> d<span class="token punctuation">)</span>

<span class="token keyword">var</span> e <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">const</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">e</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> e<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2>`,6),d={href:"https://bigfrontend.dev/quiz/Hoisting-IIII",target:"_blank",rel:"noopener noreferrer"},k=i("Source From");function v(b,m){const s=e("ExternalLinkIcon");return l(),t(p,null,[r,n("p",null,[n("a",d,[k,o(s)])])],64)}var y=a(u,[["render",v],["__file","hoisting-iiii.html.vue"]]);export{y as default};
