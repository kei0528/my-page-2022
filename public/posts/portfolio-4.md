---
title: 'Portfolio 2022 - Budde Kaffee ver.2022'
date: '30.12.2022'
categories: ['Dev']
thumbnail: '/blog/images/budde-kaffee.webp'
---

This is the website of the café - called "Budde Kaffee", where I worked before. I loved working there and the owners are really nice. They supported me and my family so much from the beginning to the end, even when the café was financially in crisis because of the corona pandemic. I always have in mind that I want to return them back, and this project is a part of it.

When I started to learn programming two years ago in 2020, creating a website for Budde Kaffee was my first personal project. I made the page with a simple setup - HTML, CSS and vanilla JavaScript.
Here's to compare↓

- Ver. 2020 -> <a href="https://buddekaffee.github.io/buddekaffee" target="_blank">https://buddekaffee.github.io/buddekaffee</a>
- Ver. 2022 -> <a href="https://buddekaffee.de" target="_blank">https://buddekaffee.de</a>

<img src="/blog/images/budde-website-screenshot.webp">

What I wanted to change:

- – Overall design
- – Use Next.js for better DX and maintainability
- – Add a simple admin page to allow owners to update news easily
- – Contact form
- – Add Instagram dynamic content

### Overall design changes

So first of all, I need to update the design. The last time, I created the first version, I didn’t use any design tool and was just designed by coding. That was no good idea. But this time, I opened Figma and spent a couple of hours thinking about how to improve the design and UX. I’m not a designer and am not very good at throwing web designs, but I could ask my friends and colleagues who better understand than me. They gave me great advice and I think the website looks much better than the previous one.

### Use Next.js for better DX, and maintainability

I love React and Next.js. Through great ecosystem, I can develop very fast. Further more, thanks to millions of React developers, I can find a solution on the internet easily.

Every UI and section are sorted as components and can be easily reused many times, which makes maintenance much easier.

### Add a simple admin page to allow owners to update news easily

I was thinking of using some headless CMS to manage dynamic content, but since the owners of Budde Kaffee are not very good at using modern technologies, so I decided to create a simple admin page myself. I tried to create as simple as possible. Currently, the login authentication is made by myself and the function of it is inside pages/api directory. From security aspect, I should use an alternative way, however in this case it’s totally enough.

<img src="/blog/images/budde-admin-page.webp">

### Contact form

The owners wanted to have a contact form. I also think having a contact form is nice for users.

I used the library <a href="https://nodemailer.com/about" target="_blank">Nodemailer</a>. With that, you can create a function for sending mail very easily. This function runs on the server side under pages/api directory.

### Add Instagram dynamic content

With help of Instagram API, it is quite easy to get all the post data. I created an API endpoint on pages/api to fetch the posts data. It runs on the server because of security reasons and to prevent too many calls. Fetching happens on deployment which also means that without deploying new posts will not be rendered. So I have to make some settings to GitHub Actions that the deployment automatically runs once a day (this is my next TODO).

### What’s next?

This page is not completely done yet and is also not been officially published yet. I still have to do for example settings up the domain, connecting to the correct Instagram account and so on. Also some SEO-related features should be added.

Other than that, the owners want to edit the menu and opening hours by themself. So I have to make some more components and API endpoints to handle that.

### Summary

I really enjoyed working on this project. React is absolutely my favourite framework and together with Next.js, almost every problem that React has will be solved. Lighthouse says almost everything is fine for the performance.

<img src="/blog/images/budde-lighthouse.webp">

I always try to make a fast web. I tried my best, this website to get fast as much as possible, but there are definitely more things that can be done for performance. I have to keep learning.

The previous version of this website was made 2 years ago and when I compare this with the current one, I can see how much I’ve learned in the past 2 years. I’m really excited to know how I will think in two years when I see this project. I will keep learning, working and give always my best!

### Used Techs

- TypeScript
- Next.js
- Tailwind CSS
- Jotai (State Management Library)
- SWR (Data Fetching Library)

### Links

- <a href="https://buddekaffee-2022.vercel.app" target="_blank">Budde Kaffee ver.2022</a>
- <a href="https://buddekaffee.de" target="_blank">Budde Kaffee ver.2020</a>
- <a href="https://github.com/kei0528/buddekaffee-2022" target="_blank">GitHub</a>
