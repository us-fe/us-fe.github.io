// const Crawler = require("crawler");
import fetch from "node-fetch";
// const cheerio = require('cheerio');
import * as cheerio from "cheerio";
import TurndownService from "turndown";
import fs$ from "fs/promises";
import fs from "fs";

import path from "path";
var turndownService = new TurndownService({
  codeBlockStyle: "fenced",
});

// import Crawler from 'cra'

const bfes = [
  {
    text: "Coding Problem",
    url: "https://bigfrontend.dev/problem",
    tags: ["Coding", "JavaScript"],
  },
  {
    text: "React",
    url: "https://bigfrontend.dev/react",
    tags: ["Coding", "React"],
  },

  {
    text: "CSS",
    url: "https://bigfrontend.dev/css",
    tags: ["Coding", "CSS"],
  },

  {
    text: "JavaScript Quiz",
    url: "https://bigfrontend.dev/quiz",
    tags: ["Quiz", "JavaScript"],
  },
  // {
  //   url: "https://bigfrontend.dev/typescript",
  //   tags: ["Coding", "TypeScript"],
  // },
  {
    text: "React Quiz",
    url: "https://bigfrontend.dev/react-quiz",
    tags: ["Quiz", "React"],
  },
  {
    text: "Question",
    url: "https://bigfrontend.dev/question",
    tags: ["Question"],
  },

  {
    text: "System Design",
    url: "https://bigfrontend.dev/design",
    tags: ["SystemDesign"],
  },
];

var domain = "https://bigfrontend.dev";

async function getQuestionList(url, tags) {
  const res = await fetch(url, {
    headers: {
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-language":
        "en-US,en;q=0.9,da;q=0.8,zh-TW;q=0.7,zh;q=0.6,ja;q=0.5,de;q=0.4,fr;q=0.3,pt;q=0.2,zh-CN;q=0.1",
      "cache-control": "max-age=0",
      "sec-ch-ua":
        '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-origin",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
      cookie:
        "_ga=GA1.2.1189080799.1650893953; _gid=GA1.2.2073115115.1652396055; _gat_UA-173013365-1=1",
      Referer: "https://bigfrontend.dev/css",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: null,
    method: "GET",
  });
  const text = await res.text();

  const $ = cheerio.load(text);

  const list = [];
  $(".List__ItemProblem-sc-1p5i700-4").each(function (i, elem) {
    var $aTag = $($(elem).find("a").get(0));
    var title = $aTag.text();
    var href = $aTag.attr("href");

    var qTags = [...tags];
    $(this)
      .find(".Tag-sc-172abfj-0")
      .each((i, item) => {
        var tag = $(item).text();
        if (!qTags.includes(tag)) {
          qTags.push(tag);
        }
      });

    const path = href.split("/")[2];
    if (!path) {
      console.error("no path", href);
    }
    list.push({
      path: getPath(path),
      title: getTitle(title),
      href: domain + href,
      tags: qTags,
    });
    // console.log(aTag.text(), a.attr("href"));
  });

  return list;
}

function getPath(path) {
  const newPath = path.replace(/\d+-/, "").toLocaleLowerCase().trim();
  if (!newPath) {
    console.error("no path", path);
  }
  return newPath;
}
function getTitle(title) {
  return title
    .replace(/\d+(\.|\:) /, "")
    .replace(/\d+-/, "")
    .trim();
}

async function getQuestionDetail(href) {
  var res = await fetch(href, {
    headers: {
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-language":
        "en-US,en;q=0.9,da;q=0.8,zh-TW;q=0.7,zh;q=0.6,ja;q=0.5,de;q=0.4,fr;q=0.3,pt;q=0.2,zh-CN;q=0.1",
      "sec-ch-ua":
        '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-origin",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
      cookie:
        "_ga=GA1.2.1189080799.1650893953; _gid=GA1.2.2073115115.1652396055",
      Referer: "https://bigfrontend.dev/problem",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: null,
    method: "GET",
  });

  var text = await res.text();

  const $ = cheerio.load(text);

  const des = $(".MarkdownView-kau4pv-0").html();
  var markdown = turndownService.turndown(des);

  const __NEXT_DATA__ = $("#__NEXT_DATA__").html();
  var json = {};
  try {
    json = JSON.parse(__NEXT_DATA__);
  } catch (e) {}

  // console.log("__NEXT_DATA__", JSON.stringify(json, null, " "));

  // console.log(markdown);
  return {
    markdown,
    json,
  };
}

async function writeQuestion(q) {
  const { title, markdown, json, href, tags, path: filename } = q;
  const detail = json.props.pageProps.item;

  var related = (detail.related || [])
    .map((r) => {
      // "permalink": "get-DOM-tree-height",
      // "title": "58. get DOM tree height"
      return `+ [${getTitle(r.title)}](./${r.permalink})`;
    })
    .join("\n");

  if (related) {
    related = `## Related\n\n` + related;
  }

  var files = detail?.editConfig?.files || [];

  var code = "";
  var blocks = "";
  files.forEach((f) => {
    const langs = Object.entries(f.supportedLangs);

    langs.forEach(([k, v]) => {
      // console.log(k, v);
      blocks += `::: code-group-item ${k}${v.default ? ":active" : ""}
\`\`\`${k}
${v.skeletonEn.trim()}
\`\`\`
:::
    `;
    });
  });

  if (blocks) {
    code = `
## Code
:::: code-group
${blocks}
::::`;
  }

  var snippet = detail.snippet || "";
  var answer = detail.answer || "";
  if (snippet) {
    snippet = `## Snippet
\`\`\`js
${snippet.trim()}
\`\`\`
    `;
  }
  if (answer) {
    answer = `## Answer
\`\`\`js
${answer.trim()};
\`\`\`
`;
  }

  var tag = "";
  tags.forEach((t) => (tag += `  - ${t}\n`));

  if (tag) {
    tag = `tag:\n` + tag;
  }

  const content = `---
${tag}
---
  
# ${title}

## Question
${markdown}
${code}
${snippet}
${answer}
${related}
##  Source
[Source From](${href})

  `;

  // console.log(content);
  const filepath = getQuestionFilePath(filename);

  await fs$.writeFile(filepath, content);

  // console.log(filepath);
  // return content;
}

function getQuestionFilePath(filename) {
  // console.log(content);
  return path.resolve(path.dirname(""), "docs/question/", filename + ".md");
}

async function writeSidebar(list, text, filename) {
  const json = {
    text: text,
    collapsible: true,
    children: list.map((t) => {
      return `/question/${t.path}`;
    }),
  };

  // console.log(json);

  const filepath = path.resolve(
    path.dirname(""),
    "docs/.vuepress/sidebar/",
    filename + ".json"
  );
  // console.log(filepath);

  fs$.writeFile(filepath, JSON.stringify(json, null, " "));
}

// console.log(list);

async function handleBFE(bfe, len, forceUpdate) {
  var list = await getQuestionList(bfe.url, bfe.tags);
  var size = list.length;
  if (len) {
    size = len;
  }

  list.slice(0, size).forEach(async (q) => {
    // getQuestion(t.href);
    try {
      const filepath = getQuestionFilePath(q.path);
      // 不需要强制更新 且 没有这个路径
      if (forceUpdate || !fs.existsSync(filepath)) {
        const { markdown, json } = await getQuestionDetail(q.href);
        q.markdown = markdown;
        q.json = json;

        if (q.path == "undefined") {
          // console.error(q);
        } else {
          writeQuestion(q);
          console.log("done", q.path);
        }
      }
    } catch (e) {
      // console.error(e);
      console.log(`${q.href} fail`);
    }
  });

  writeSidebar(list.reverse(), bfe.text, bfe.url.replace(domain + "/", ""));
}

// handleBFE(bfes[0], 20, true);

bfes.forEach((bfe) => {
  handleBFE(bfe);
});

// handleBFE({
//   url: "https://bigfrontend.dev/typescript",
//   tags: ["Coding", "TypeScript"],
// });
