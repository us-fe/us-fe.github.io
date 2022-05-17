import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,c as t,a as n,b as o,F as p,e as c,d as i,o as l}from"./app.22a70bca.js";const u={},r=c(`<h1 id="inherit-getter-setter" tabindex="-1"><a class="header-anchor" href="#inherit-getter-setter" aria-hidden="true">#</a> inherit getter setter</h1><h2 id="question" tabindex="-1"><a class="header-anchor" href="#question" aria-hidden="true">#</a> Question</h2><p>What does the code snippet to the right output by <code>console.log</code>?</p><h2 id="snippet" tabindex="-1"><a class="header-anchor" href="#snippet" aria-hidden="true">#</a> Snippet</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> val <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token keyword">set</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">_val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    val <span class="token operator">=</span> _val
  <span class="token punctuation">}</span>
  <span class="token keyword">get</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> val
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token keyword">get</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> val
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>foo<span class="token punctuation">)</span>
b<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token number">1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>foo<span class="token punctuation">)</span>

<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">C</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>foo<span class="token punctuation">)</span>
c<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token number">2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>foo<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>foo<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2>`,6),d={href:"https://bigfrontend.dev/quiz/inherit-getter-setter",target:"_blank",rel:"noopener noreferrer"},k=i("Source From");function v(m,b){const s=e("ExternalLinkIcon");return l(),t(p,null,[r,n("p",null,[n("a",d,[k,o(s)])])],64)}var _=a(u,[["render",v],["__file","inherit-getter-setter.html.vue"]]);export{_ as default};
