---
title: 'Notion API x TypeScript CLI'
date: '30.12.2022'
categories: ['Dev']
thumbnail: '/blog/images/mr-global.webp'
---

In my full-time job and my personal projects, the website often needs to be supported in many languages. The client sends spreadsheets with texts in many different languages and copying and pasting all of this to JS files takes time and effort. Not only that, humans can easily make mistakes.

Then I thought if the spreadsheet that client make can be extracted as JS file directly, I can spend a lot of time. And if the client can add some links and styling to texts, that would be perfect.

So my idea was

| page.hello | hello |
| ---------- | ----- |

to be

```jsx
export default {
  'page.hello': 'hello',
};
```

So far is my concept. Then, thinking about which tool has to be used.

I love Notion, it’s easy to make tables. This table is a database and the data can be fetched via Notion API. The cool thing is, you can give links and text-styling to the table value and these data are also in the API Get response included.

Then what I only need to do is write some program that fetches Notion data and convert it into JavaScript files.

Here’s the video of the result.

<iframe width="100%" height="100%" style="aspect-ratio:16/9" src="https://www.youtube.com/embed/JKmkW1YMgYE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Technical backgrounds

I used TypeScript for this project. Setting up Node.js with TypeScript is for me always a question, what is the best. I checked few blog posts and YouTube tutorials, but almost everyone has different setup. I heard Deno could be the best and most secure environment, but did not try yet.

Development went pretty smoothly and took only about 4 - 5 hours. It’s all because Notions API is structured very well. Notion is really nice!

About how to use the program, I wrote everything in readme.md which can be found on GitHub.

### Links

- <a href="https://github.com/kei0528/translation-file-creator" target="_blank">GitHub</a>
