---
tag:
  - Coding
  - JavaScript
  - Medium

---
  
# interpolation

## Question
Have you ever added i18n support to your projects?

Take [i18next](https://www.i18next.com/) as an example, generally the keys and translations are kept separately, like this JSON below.

```json
{
  "evaluation": "BFE.dev is {{evaluation}}"
}
```

At places where this key is used, we can then interpolate the string by passing a data object.

```ts
t('evaluation', {evaluation: 'fantastic'});
// "BFE.dev is fantastic"
```

Now, **please create a similar `t()` function which accepts the translation directly**.

#### 1\. it supports `{{` and `}}` as delimiters

Let's make it clearer and simpler, when a new pair `{{` is met, characters until the following `}}` are treated as the property name.

For all the other cases, they should not be treated as delimiters.

```ts
t('BFE.dev is {{{evaluation}', {evaluation: 'fantastic'});
// "BFE.dev is {{{evaluation}"

t('BFE.dev is {{{evaluation}}}', {'{evaluation': 'fantastic'});
// "BFE.dev is fantastic}"

t('BFE.dev is {{evalu ation}}', {'evalu ation': 'fantastic'});
// "BFE.dev is fantastic"
```

#### 2\. if no data is passed or no property exists, just leave it empty

```ts
t('BFE.dev is {{evaluation}}');
// "BFE.dev is "
```

## Code
:::: code-group
::: code-group-item javascript
```javascript
/**
 * @param {string} translation
 * @param {any} data
 * @returns {string}
 */
function t(translation, data) {
  // your code here
}
```
:::
    ::: code-group-item typescript:active
```typescript
function t(translation: string, data?: any): string {
  // your code here
}
```
:::
    
::::



##  Source
[Source From](https://bigfrontend.dev/problem/interpolation)

  