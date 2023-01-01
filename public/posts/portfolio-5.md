---
title: 'Portfolio 2022 - My Website ver.2022'
date: '01.01.2023'
categories: ['Dev']
thumbnail: '/blog/images/keisuke-brewing-coffee.webp'
---

This post is about the website which you are currently visiting - my personal website.

I made my first website about one and a half years ago before becoming a developer. It was a simple, static one-page website. I liked the minimalistic design, but I felt that it does not match my personality. So I decided to develop my new website with a completely new design and features.

<a href="https://my-web-site-2d168.web.app/" target="_blank">To my previous Website</a>
<img src="/blog/images/my-website-2022.webp">

### Concept

My aim was to create a website, which presents my personality. This is really difficult. To present myself, I have to know me better. So I started to write down who I am. 
I am a very simple person who prefers to concentrate on one thing. I like focusing on tiny detail, and many people call me "Otaku" - which means Nerd or Geek in Japanese. I was already interested in the digital world when I was 5 years old. My sister played Pokémon and I really loved watching that. For my birthday, I got a purple Game Boy and started to play Pokémon Silver. Probably without these, I didn't interest in the digital world and didn't become a programmer. Purple Game Boy and Pokémon are some kind of root for me and wanted to put this mind on my website.
Another feature that I wanted to add is a blog. I wanted to write about my life, family and work, and collect this in one place.

### Setting up

The concept became clear and started to make a design with Figma. 
After finishing the design, I started thinking about what kind of technologies I use. I was thinking of using Astro or Solid.js, but I came back to my favourite development environment, TypeScript with Next.js. By the time of starting with development, the new version of Next.js was released. Version 13. I really wanted to try the new app directory and other new features.
I also installed Tailwind CSS and SCSS. Tailwind is really powerful, but sometimes I still need some help from SCSS, especially when I write code for animations.
As State Management Library, I installed Redux. Because of its unique syntax and structure, I don't like Redux that much. I tried to install another library, such as Jotai or Recoil, but these did not support Next.js' new app directory. By passing Provider to the Layout component, the library threw error. I researched for many hours, but because this was just 2 or 3 days after the release of Next.js 13, I couldn’t find much information on the internet.

### Development

<h4>SSG</h4>

Because I used the Next.js app directory, few things behaved differently than Next.js pages directory and I spend lots of time researching. One good example is how to create SSG pages.

```jsx
/*  Next.js 12  */
export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const data = await fetch(urls.baseUrl + 'api/blog/' + params.slug);
  const posts = await data.json();

  return {
    props: {
      posts,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getBlogPosts();
  const slugs = posts.map((post) => ({ slug: post.slug }));

  return {
    slugs,
    fallback: false,
  };
};

export default TestPage;
```

```jsx
/*  Next.js 13  */
async function getPost({ slug }: { slug: string }) {
  const data = await fetch(urls.baseUrl + 'api/blog/' + slug, { cache: 'force-cache' });
  const res = await data.json();
  return res;
}

const BlogPost = async ({ params }: { params?: any }) => {
  const posts = await getPost(params);
  return <>...</>;
};

export const generateStaticParams = async () => {
  const posts = await getBlogPosts();
  const slugs = posts.map((post) => ({ slug: post.slug }));
  return slugs;
};
```

Next.js 13 supports server component and you can use this under app directory.

<h4>@next/fonts</h4>

Another feature is @next/fonts. With that, you can import fonts from Google or local device easily. Vercel says that this can improve performance.

For this project, I used local font and compared which one is faster, @next/fonts or CSS @fontface. The funny thing was, I tried many times but using @fontface was always a little faster.

<img src="/blog/images/performance-font-face.webp">
<small>↑ @fontface</small>
<img src="/blog/images/performance-next-font.webp">
<small>↑ @next/fonts</small>

Probably if you’re using Google Fonts, you can get the advantage of it. But for my purpose, I don’t need this. So I kept importing fonts via @fontface.

<h4>Creating API</h4>

Under app directory, it seems not able to create APIs like in pages/api. I’m not sure if that is correct, but I read on GitHub Issue that someone wrote that pages/api feature will not be supported by Vercel in the feature. I hope that this is not the case.

In this project, the functions for blog and contact-form are under pages/api directory.

All blog posts are stored inside the public folder as markdown files and by making a GET request to api/blog, these data will be processed and delivered to the frontend. This tutorial helped me a lot → <a href="https://www.youtube.com/watch?v=MrjeefD8sac" target="_blank">Static Blog With Next.js and Markdown</a>

For sending mail, I just need to do a POST request to /api/mail. Nodemailer processes the request and sends mail to my mailbox.

<h4>Dark Mode</h4>

Handling dark-mode styling is really easy with Tailwind. Add `darkMode: 'class',` to tailwind.config.js and create some function to add `dark` className to html element. Then just write Tailwind styling with dark: at the beginning (eg.`dark:text-base`), and this means that it will be applied only if user selected the dark-mode.

You can get user’s device dark-mode setting with this line of code

```jsx
const isDarkmode =
  typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
```

### What’s next?

The page is done for now, but there are still few more things that can be improved or that I want to add features.

One example is a performance fix.

<img src="/blog/images/my-website-lighthouse.webp">
Lighthouse says on every page, that performance is good, but for example, if you have a low-spec device and turn on the sound on the home page, the music stops a second by changing state. This is not nice and has to find some solution.

### Summary

I really enjoyed working on this project.

Simple, yet not too cool design, Pokémon like home page, Game Boy like menu, Blog page … I think all the concepts that I planned have been covered.

I’m still at the beginning of the long road to becoming a great developer and have tons of stuff to learn. Keep learning, hard-working and give always my best!

### Links

- <a href="https://github.com/kei0528/my-page-2022" target="_blank">Github</a>
- <a href="https://my-web-site-2d168.web.app/" target="_blank">My Website ver.2021</a>
