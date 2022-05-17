import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,c as i,a as n,b as a,w as o,F as u,e as p,d as s,o as d}from"./app.22a70bca.js";const k={},m=p(`<h1 id="implement-immutability-helper" tabindex="-1"><a class="header-anchor" href="#implement-immutability-helper" aria-hidden="true">#</a> implement Immutability helper</h1><h2 id="question" tabindex="-1"><a class="header-anchor" href="#question" aria-hidden="true">#</a> Question</h2><p>If you use React, you would meet the scenario to copy the state for a slight change.</p><p>For example, for following state</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),v=s("if we are to modify d to a new state, we could use "),b={href:"https://lodash.com/docs/4.17.15#cloneDeep",target:"_blank",rel:"noopener noreferrer"},h=s("_.cloneDeep"),y=s(", but it is not efficient because "),_=n("code",null,"state.a",-1),g=s(" is cloned while we don't need to change that."),f=p(`<p>A better way is to do shallow copy like this</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> newState <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>state<span class="token punctuation">,</span>
  <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>now is the problem, if we want to modify <code>c</code>, we would have to do something like</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> newState <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>state<span class="token punctuation">,</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>state<span class="token punctuation">.</span>a<span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token operator">...</span>state<span class="token punctuation">.</span>b<span class="token punctuation">,</span>
       <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We can see that for simple data structure it would be enough to use spread operator, but for complex data structures, it is verbose.</p>`,5),w=s("Here comes the "),j={href:"https://reactjs.org/docs/update.html",target:"_blank",rel:"noopener noreferrer"},x=s("Immutability Helper"),$=s(", you are asked to implement your own Immutability Helper "),I=n("code",null,"update()",-1),C=s(", which supports following features."),S=p(`<h3 id="_1-push-array-push-all-the-items-in-array-on-the-target" tabindex="-1"><a class="header-anchor" href="#_1-push-array-push-all-the-items-in-array-on-the-target" aria-hidden="true">#</a> 1. <code>{$push: array}</code> push() all the items in array on the target.</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> newArr <span class="token operator">=</span> <span class="token function">update</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">$push</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// [1, 2, 3, 4, 5, 6]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-set-any-replace-the-target" tabindex="-1"><a class="header-anchor" href="#_2-set-any-replace-the-target" aria-hidden="true">#</a> 2. {$set: any} replace the target</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> newState <span class="token operator">=</span> <span class="token function">update</span><span class="token punctuation">(</span>
  state<span class="token punctuation">,</span> 
  <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">$set</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token comment">/*
{
  a: {
    b: {
      c: 3
    }
  },
  d: 2
}
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice that we could also update array elements with <code>$set</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> newArr <span class="token operator">=</span> <span class="token function">update</span><span class="token punctuation">(</span>
  arr<span class="token punctuation">,</span> 
  <span class="token punctuation">{</span><span class="token number">0</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">$set</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token comment">//  [0, 2, 3, 4]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-merge-object-merge-object-to-the-location" tabindex="-1"><a class="header-anchor" href="#_3-merge-object-merge-object-to-the-location" aria-hidden="true">#</a> 3. {$merge: object} merge object to the location</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> newState <span class="token operator">=</span> <span class="token function">update</span><span class="token punctuation">(</span>
  state<span class="token punctuation">,</span> 
  <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">$merge</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">e</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token comment">/*
{
  a: {
    b: {
      c: 1,
      e: 5
    }
  },
  d: 2
}
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-apply-function-custom-replacer" tabindex="-1"><a class="header-anchor" href="#_4-apply-function-custom-replacer" aria-hidden="true">#</a> 4. {$apply: function} custom replacer</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> newArr <span class="token operator">=</span> <span class="token function">update</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token function-variable function">$apply</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// [2, 2, 3, 4]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2>`,11),N=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("any"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"data"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("Object"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"command"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("data"),n("span",{class:"token punctuation"},","),s(" command")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your code here"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("pre",null,[n("code",null,`::: code-group-item typescript
`)],-1),F=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"Command"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  $push`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token punctuation"},","),s(`
  $set`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"any"),s(`
  $apply`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("arg"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token builtin"},"any"),s(`
  $merge`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(` object
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token operator"},":"),s(" object"),n("span",{class:"token punctuation"},","),s(" command"),n("span",{class:"token operator"},":"),s(" Command"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your code here"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),G=n("p",null,":::",-1),H=n("h2",{id:"source",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#source","aria-hidden":"true"},"#"),s(" Source")],-1),V={href:"https://bigfrontend.dev/problem/implement-Immutability-helper",target:"_blank",rel:"noopener noreferrer"},B=s("Source From");function E(q,D){const e=t("ExternalLinkIcon"),c=t("CodeGroupItem"),l=t("CodeGroup");return d(),i(u,null,[m,n("p",null,[v,n("a",b,[h,a(e)]),y,_,g]),f,n("p",null,[w,n("a",j,[x,a(e)]),$,I,C]),S,a(l,null,{default:o(()=>[a(c,{title:"javascript",active:""},{default:o(()=>[N]),_:1}),A,F,G]),_:1}),H,n("p",null,[n("a",V,[B,a(e)])])],64)}var Q=r(k,[["render",E],["__file","implement-immutability-helper.html.vue"]]);export{Q as default};