import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,c as i,a as n,b as a,w as c,F as u,d as s,e as r,o as m}from"./app.22a70bca.js";const k={},d=n("h1",{id:"implement-your-own-urlsearchparams",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#implement-your-own-urlsearchparams","aria-hidden":"true"},"#"),s(" implement your own URLSearchParams")],-1),v=n("h2",{id:"question",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#question","aria-hidden":"true"},"#"),s(" Question")],-1),b=s("When we want to extract parameters from query string, "),h={href:"https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams",target:"_blank",rel:"noopener noreferrer"},_=s("URLSearchParams"),f=s(" could be very handy."),g=r(`<p>Can you implement <code>MyURLSearchParams</code> which works the same ?</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyURLSearchParams</span><span class="token punctuation">(</span><span class="token string">&#39;?a=1&amp;a=2&amp;b=2&#39;</span><span class="token punctuation">)</span>
params<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;1&#39;</span>
params<span class="token punctuation">.</span><span class="token function">getAll</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token comment">// [&#39;1&#39;, &#39;2&#39;]</span>
params<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;2&#39;</span>
params<span class="token punctuation">.</span><span class="token function">getAll</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span> <span class="token comment">// [&#39;2&#39;]</span>


params<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
params<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">)</span>
params<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;a=1&amp;a=2&amp;b=3&amp;a=3&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),y=s("There are "),w={href:"https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams",target:"_blank",rel:"noopener noreferrer"},S=s("a few methods"),x=s(" on URLSearchParams, please implement them all."),U=n("h2",{id:"code",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#code","aria-hidden":"true"},"#"),s(" Code")],-1),L=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"MyURLSearchParams"),s(),n("span",{class:"token punctuation"},"{"),s(`
   `),n("span",{class:"token doc-comment comment"},[s(`/**
    * `),n("span",{class:"token keyword"},"@params"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(` init
    */`)]),s(`
   `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"init"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
     
   `),n("span",{class:"token punctuation"},"}"),s(`
   
   `),n("span",{class:"token doc-comment comment"},[s(`/** 
    * `),n("span",{class:"token keyword"},"@params"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(` name
    * `),n("span",{class:"token keyword"},"@params"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("any"),n("span",{class:"token punctuation"},"}")]),s(` value
    */`)]),s(`
   `),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("name"),n("span",{class:"token punctuation"},","),s(" value")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
     
   `),n("span",{class:"token punctuation"},"}"),s(`
   
   `),n("span",{class:"token doc-comment comment"},[s(`/**
    * `),n("span",{class:"token keyword"},"@params"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(` name
    */`)]),s(`
   `),n("span",{class:"token keyword"},"delete"),n("span",{class:"token punctuation"},"("),s("name"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
     
   `),n("span",{class:"token punctuation"},"}"),s(`
   
   `),n("span",{class:"token doc-comment comment"},[s(`/**
    * `),n("span",{class:"token keyword"},"@returns"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("Iterator"),n("span",{class:"token punctuation"},"}")]),s(` 
    */`)]),s(`
   `),n("span",{class:"token function"},"entries"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
     
   `),n("span",{class:"token punctuation"},"}"),s(`
   
   `),n("span",{class:"token doc-comment comment"},[s(`/**
    * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"callback"),s(`
    */`)]),s(`
   `),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"callback"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
     
   `),n("span",{class:"token punctuation"},"}"),s(`
   
   `),n("span",{class:"token doc-comment comment"},[s(`/**
    * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"name"),s(`
    * returns the first value of the name
    */`)]),s(`
   `),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("name"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
     
   `),n("span",{class:"token punctuation"},"}"),s(`
   
   `),n("span",{class:"token doc-comment comment"},[s(`/**
    * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"name"),s(`
    * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(`
    * returns the value list of the name
    */`)]),s(`
   `),n("span",{class:"token function"},"getAll"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"name"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
     
   `),n("span",{class:"token punctuation"},"}"),s(`
   
   `),n("span",{class:"token doc-comment comment"},[s(`/**
    * `),n("span",{class:"token keyword"},"@params"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(` name
    * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("boolean"),n("span",{class:"token punctuation"},"}")]),s(`
    */`)]),s(`
   `),n("span",{class:"token function"},"has"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"name"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
     
   `),n("span",{class:"token punctuation"},"}"),s(`
   
   `),n("span",{class:"token doc-comment comment"},[s(`/**
    * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("Iterator"),n("span",{class:"token punctuation"},"}")]),s(`
    */`)]),s(`
   `),n("span",{class:"token function"},"keys"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
     
   `),n("span",{class:"token punctuation"},"}"),s(`
   
   `),n("span",{class:"token doc-comment comment"},[s(`/**
    * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"name"),s(`
    * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("any"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"value"),s(`
    */`)]),s(`
   `),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("name"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
     
   `),n("span",{class:"token punctuation"},"}"),s(`
   
   `),n("span",{class:"token comment"},"// sor all key/value pairs based on the keys"),s(`
   `),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
     
   `),n("span",{class:"token punctuation"},"}"),s(`
   
   `),n("span",{class:"token doc-comment comment"},[s(`/**
    * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(`
    */`)]),s(`
   `),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
     
   `),n("span",{class:"token punctuation"},"}"),s(`
   
   `),n("span",{class:"token doc-comment comment"},[s(`/**
    * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("Iterator"),n("span",{class:"token punctuation"},"}")]),s(` values
    */`)]),s(`
   `),n("span",{class:"token function"},"values"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
   
   `),n("span",{class:"token punctuation"},"}"),s(`
 `),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("h2",{id:"source",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#source","aria-hidden":"true"},"#"),s(" Source")],-1),I={href:"https://bigfrontend.dev/problem/implement-your-own-URLSearchParams",target:"_blank",rel:"noopener noreferrer"},R=s("Source From");function C(j,A){const e=t("ExternalLinkIcon"),o=t("CodeGroupItem"),l=t("CodeGroup");return m(),i(u,null,[d,v,n("p",null,[b,n("a",h,[_,a(e)]),f]),g,n("p",null,[y,n("a",w,[S,a(e)]),x]),U,a(l,null,{default:c(()=>[a(o,{title:"javascript",active:""},{default:c(()=>[L]),_:1})]),_:1}),P,n("p",null,[n("a",I,[R,a(e)])])],64)}var N=p(k,[["render",C],["__file","implement-your-own-urlsearchparams.html.vue"]]);export{N as default};
