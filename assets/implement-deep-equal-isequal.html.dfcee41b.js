import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,c as u,a as n,b as a,w as o,F as r,d as s,e as p,o as d}from"./app.22a70bca.js";const k={},m=n("h1",{id:"implement-deep-equal-isequal",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#implement-deep-equal-isequal","aria-hidden":"true"},"#"),s(" implement deep equal "),n("code",null,"_.isEqual()")],-1),v=n("h2",{id:"question",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#question","aria-hidden":"true"},"#"),s(" Question")],-1),b={href:"https://lodash.com/docs/4.17.15#isEqual",target:"_blank",rel:"noopener noreferrer"},h=s("_.isEqual"),_=s(" is useful when you want to compare complex data types by value not the reference."),f=p(`<p>Can you implement your own version of deep equal <code>isEqual</code>? The lodash version covers a lot of data types. In this problem, you are asked to support :</p><ol><li>primitives</li><li>plain objects (object literals)</li><li>array</li></ol><p>Objects are compared by their own, not inherited, enumerable properties</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&#39;bfe&#39;</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&#39;bfe&#39;</span><span class="token punctuation">}</span>

<span class="token function">isEqual</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token comment">// true</span>
a <span class="token operator">===</span> b <span class="token comment">// false</span>

<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> <span class="token string">&#39;4&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> d <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> b<span class="token punctuation">,</span> <span class="token string">&#39;4&#39;</span><span class="token punctuation">]</span>

<span class="token function">isEqual</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> d<span class="token punctuation">)</span> <span class="token comment">// true</span>
c <span class="token operator">===</span> d <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),y=s("Lodash implementation has some strange behaviors. ("),g={href:"https://github.com/lodash/lodash/issues/2463",target:"_blank",rel:"noopener noreferrer"},q=s("github issue"),E=s(", like following code"),w=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
a<span class="token punctuation">.</span>self <span class="token operator">=</span> a
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">self</span><span class="token operator">:</span> a<span class="token punctuation">}</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
c<span class="token punctuation">.</span>self <span class="token operator">=</span> c
<span class="token keyword">const</span> d <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">self</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">self</span><span class="token operator">:</span> a<span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> e <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">self</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">self</span><span class="token operator">:</span> b<span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>lodash.isEqual</code> gives us following result. Notice there is a case that resulting in <code>false</code>.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// result from lodash implementation</span>
_<span class="token punctuation">.</span><span class="token function">isEqual</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token comment">// true</span>
_<span class="token punctuation">.</span><span class="token function">isEqual</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> c<span class="token punctuation">)</span> <span class="token comment">// true</span>
_<span class="token punctuation">.</span><span class="token function">isEqual</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> d<span class="token punctuation">)</span> <span class="token comment">// true</span>
_<span class="token punctuation">.</span><span class="token function">isEqual</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token comment">// true</span>
_<span class="token punctuation">.</span><span class="token function">isEqual</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> c<span class="token punctuation">)</span> <span class="token comment">// true</span>
_<span class="token punctuation">.</span><span class="token function">isEqual</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> d<span class="token punctuation">)</span> <span class="token comment">// true</span>
_<span class="token punctuation">.</span><span class="token function">isEqual</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token comment">// false</span>
_<span class="token punctuation">.</span><span class="token function">isEqual</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> d<span class="token punctuation">)</span> <span class="token comment">// true</span>
_<span class="token punctuation">.</span><span class="token function">isEqual</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token comment">// true</span>
_<span class="token punctuation">.</span><span class="token function">isEqual</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Setting aside the performance concerns mentioned by lodash, <strong>your implement should not have above problem</strong>, which means above all returns <strong>true</strong> and call stack should not exceed the maximum.</p><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2>`,5),x=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("any"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"a"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("any"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"b"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("boolean"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"isEqual"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("a"),n("span",{class:"token punctuation"},","),s(" b")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your code here"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("h2",{id:"source",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#source","aria-hidden":"true"},"#"),s(" Source")],-1),C={href:"https://bigfrontend.dev/problem/implement-deep-equal-isEqual",target:"_blank",rel:"noopener noreferrer"},I=s("Source From");function N(G,S){const e=t("ExternalLinkIcon"),c=t("CodeGroupItem"),l=t("CodeGroup");return d(),u(r,null,[m,v,n("p",null,[n("a",b,[h,a(e)]),_]),f,n("p",null,[y,n("a",g,[q,a(e)]),E]),w,a(l,null,{default:o(()=>[a(c,{title:"javascript",active:""},{default:o(()=>[x]),_:1})]),_:1}),j,n("p",null,[n("a",C,[I,a(e)])])],64)}var F=i(k,[["render",N],["__file","implement-deep-equal-isequal.html.vue"]]);export{F as default};