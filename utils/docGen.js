const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
const getTemplate = (title, problemUrl) => {
    const template = `

# 1. ${title}

[题目来源](${problemUrl})

## 题目
Question goes here

examples
\`\`\`js
    const helloword = () => {
        // TODO
    }
\`\`\`

## 解析
\`\`\`js
    const explanation = () => {
        // TODO
    }
\`\`\`

## 解析
\`\`\`js
    const answer = () => {
        // TODO
    }
\`\`\`
`
return template;
}


readline.question('Enter the filename: ', name => {
    const filename = name;
    let category;
    readline.question('Chose a category: 1: coding, 2: javascript, 3: react ', chose => {
        category = chose;
        readline.question('Enter the title for the page ', title => {
            readline.question('Enter url of the question ', problemUrl => {
                readline.close();
                let problemName = 'coding';
                if (category === '2') problemName = 'javascript';
                if (category === '3') problemName = 'react';
                try {
                    fs.writeFileSync(`docs/problems/${problemName}/${filename}.md`, getTemplate(title, problemUrl));
                } catch (e) {
                    console.log(e);
                    console.log('Failed to write file');
                }
            });
        });
    });
});