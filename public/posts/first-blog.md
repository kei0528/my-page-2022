---
title: 'About my blog - technical overview'
date: '13.11.2022'
categories: ['Dev']
thumbnail: '/blog/images/code.webp'
---

I started to write codes two years ago, in 2020 spring. Back then, I dreamed to have a self-made blog page.  I tried many different ways of creating blog, like headless CMS, WordPress, etc. However, I was not very happy with the progress and could never bring it to an end.

What I wanted to expect from my blog is fast and 100% customizable.  And the solution to fulfil my wish was very simple. Here it is. ↓

## Project Setup

### First - Language

I use TypeScript.
I always prefer writing TS to JS, even in small projects. I worked on many pure vanilla JS projects and always hated seeing 'undefined' errors or timing issues. With TypeScript, you could find these errors in an earlier phase and prevent spending time to fix them. Of course, there are many more cool features to using TypeScript, however, this is for me the biggest reason why I love TypeScript.

### Framework

When I was planning of making this page, Next.js v.13 got released. So many features were added on v.13, and I really wanted to try this out.  However, it leads me into lots of trouble afterwards...

### State management library

This was the first difficulty that Next.js v.13 caused.
In this application size, a state management library is not very necessary. Even so, I think these tools help me to keep the code clean. I mainly use Redux and Recoil. But this time I wanted to try another library, which is"Jotai".  It is a library that is inspired by Recoil. APIs are very simple and documentation is clean. I installed it and started to set up the <Provider>. Here came the problem. Where does the Provider come to!? Since I use Next.js v.13 and already tried the experimental feature "app directory", the whole file structure is different. I researched on the Internet, but since this was just a few hours after the release of v.13, there were no articles or GitHub issues regarding it. After a couple of hours, I noticed that this library was not supported yet. Then I tried Recoil, but this was also not supported. Sadly, Redux was the only state management tool that I could use with Next.js v.13. For now, I use Redux, but in the future, I will definitely migrate this to another library.

### Styling

I know that many people disagree, but I love Tailwind CSS. For me, the best tool to increase productivity. There is no need to import variables and think about class names. You can just start writing styling. I love it.

---

There are much more things to write about this application, such as hosting, how blogs are posted and so on. But today, that was it! This page is still under construction and needs about two more weeks to get done. Let's see how it evolves!
