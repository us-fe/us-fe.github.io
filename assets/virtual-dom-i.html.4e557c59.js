import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,c,a as n,b as a,w as o,F as u,d as s,e as p,o as d}from"./app.22a70bca.js";const k={},v=n("h1",{id:"virtual-dom-i",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#virtual-dom-i","aria-hidden":"true"},"#"),s(" Virtual DOM I")],-1),m=n("h2",{id:"question",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#question","aria-hidden":"true"},"#"),s(" Question")],-1),b=s("Suppose you have solved "),h={href:"https://bigfrontend.dev/problem/serialize-and-deserialize-binary-tree",target:"_blank",rel:"noopener noreferrer"},y=s("110. serialize and deserialize binary tree"),g=s(", have you wondered how to do similar task to DOM tree ?"),_=s("HTML string could be thought as some sort of "),f={href:"https://en.wikipedia.org/wiki/Serialization",target:"_blank",rel:"noopener noreferrer"},w=s("serialization"),j=s(", the browser parses(deserialize) the HTML \u2192 construct the DOM tree."),I=p(`<p>Besides XML base, we could try JSON for this. If we log the element presentation in React, like below</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> el <span class="token operator">=</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
 <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span> <span class="token keyword">this</span> is <span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
 <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">&quot;paragraph&quot;</span><span class="token operator">&gt;</span> a <span class="token operator">&lt;</span>button<span class="token operator">&gt;</span> button <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span> from <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;https://bfe.dev&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>b<span class="token operator">&gt;</span><span class="token constant">BFE</span><span class="token operator">&lt;</span><span class="token operator">/</span>b<span class="token operator">&gt;</span><span class="token punctuation">.</span>dev<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
 <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>we would get this( ref, key .etc are stripped off)</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;h1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">&#39; this is &#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">className</span><span class="token operator">:</span> <span class="token string">&#39;paragraph&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&#39; a &#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;button&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">&#39; button &#39;</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token string">&#39; from&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;https://bfe.dev&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token punctuation">{</span>
                    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">&#39;BFE&#39;</span>
                    <span class="token punctuation">}</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token string">&#39;.dev&#39;</span>
                <span class="token punctuation">]</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Clearly this is the same tree structure but only in object literal.</p><p>Now you are asked to serialize/deserialize the DOM tree, like what React does.</p><p><strong>Note</strong></p><p><strong>Functions like event handlers and custom components are beyond the scope of this problem, you can ignore them</strong>, just focus on basic HTML tags.</p><p>You should support:</p><ol><li>TextNode (string) as children</li><li>single child and multiple children</li><li>camelCased properties.</li></ol><p><code>virtualize()</code> takes in a real DOM tree and create an object literal <code>render()</code> takes in a object literal presentation and recreate a DOM tree.</p><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2>`,12),x=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("HTMLElement"),n("span",{class:"token punctuation"},"}")]),s(` 
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("object"),n("span",{class:"token punctuation"},"}")]),s(` object literal presentation
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"virtualize"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"element"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your code here"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`


`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("object"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"valid"),s(` object literal presentation
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("HTMLElement"),n("span",{class:"token punctuation"},"}")]),s(` 
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"obj"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your code here"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),M=p('<h2 id="related" tabindex="-1"><a class="header-anchor" href="#related" aria-hidden="true">#</a> Related</h2><ul><li><a href="./virtual-dom-II-createElement">Virtual DOM II - createElement</a></li><li><a href="./virtual-DOM-III-Functional-Component">Virtual DOM III - Functional Component</a></li><li><a href="./virtual-dom-iv-jsx-1">Virtual DOM IV - JSX 1</a></li><li><a href="./virtual-dom-v-jsx-2">Virtual DOM V - JSX 2</a></li></ul><h2 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2>',3),D={href:"https://bigfrontend.dev/problem/Virtual-DOM-I",target:"_blank",rel:"noopener noreferrer"},O=s("Source From");function V(z,C){const e=t("ExternalLinkIcon"),r=t("CodeGroupItem"),l=t("CodeGroup");return d(),c(u,null,[v,m,n("p",null,[b,n("a",h,[y,a(e)]),g]),n("p",null,[_,n("a",f,[w,a(e)]),j]),I,a(l,null,{default:o(()=>[a(r,{title:"javascript",active:""},{default:o(()=>[x]),_:1})]),_:1}),M,n("p",null,[n("a",D,[O,a(e)])])],64)}var F=i(k,[["render",V],["__file","virtual-dom-i.html.vue"]]);export{F as default};