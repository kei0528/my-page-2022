---
title: 'About my blog - technical overview'
date: '19.11.2022'
categories: ['Dev']
thumbnail: '/blog/images/code.webp'
---

I started to write codes two years ago, in 2020 spring. Back then, I dreamed to have a self-made blog page.  I tried many different ways of creating blog, like headless CMS, WordPress, etc. However, I was not very happy with the progress and could never bring it to an end.

What I wanted to expect from my blog is fast and 100% customizable. Here's the solution I found.

This page is made with [TypeScript](https://www.typescriptlang.org/) with [Next.js](https://nextjs.org/).  These are the tools that I use in most projects. I was thinking of creating with another framework such as [Solid.js](https://www.solidjs.com/), [Svelte](https://svelte.dev/), [Qwik](https://qwik.builder.io/) or [Astro](https://astro.build/). All of these frameworks offer to help create fast web applications and a great developer experience.  After a few hours of researching, I came back to Next.js, because there was a new version (v.13), which brought many new features and I really wanted to try them out.

When I started creating this page, there were nearly no tutorials or guides for handling server-side rendering. Also, many libraries did not support the new version of Next.js. Now, two weeks after the release of Next.js 13, I found many good resources to learn about, and I can refactor the code with help of it.

In this project, [Tailwind CSS](https://tailwindcss.com/) and [Sass](https://sass-lang.com/) are used to write styling, and [Redux](https://redux.js.org/) to store global states. I'm not a big fan of Redux and actually wanted to use other state management libraries like [Recoil](https://recoiljs.org/) or [Jotai](https://jotai.org/). However, these did not support Next.js 13's new page structure 😭

Another thing that Next.js 13's new page structure - "App directory" does not support (yet) is API Routes. In order to create APIs, you have to create an "api" folder under the "pages" directory. There I created a function, that hosts all the blog data which is stored in "public" directory as markdown files. Also, the function to send mails is inside "api" folder. 
I really love API Routes feature and hope, that this keeps officially supported.

OK, that's pretty much it about technical overview of my blog. I have still more ideas that I want to add. I will keep updated 🙂

\* You can find code in my [Github](https://github.com/kei0528/my-page-2022)😀
