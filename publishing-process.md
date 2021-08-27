# Publishing a new blog post

Blog posts are stored in the `src/pages/blog` directory as Markdown (`.md`) files.

A [utility](https://orchid-blog-md.netlify.app/) that generates most of the required markdown has been created. [Repo link.](https://github.com/CircleClick/orchid-blog-md)

&nbsp;

To create a new post, simply drop the template below into a new markdown file in the directory.

Your file can be named anything as long as it's unique, but I like to use the following format: `yyyy-mm-dd-{slug}.md`

```m
---
templateKey: blog-post
public: true
url: the-post-slug-goes-here
title: "The post title goes here."
date: 1509554856651
description: "The post description goes here."
featuredpost: false
featuredimage: /img/uploads/orchid-logo-text.jpg
tags:
  - Company Updates
  - VPN
  - Ethereum
---

This the post content.
```

This template will create a post at `https://blog.orchid.com/the-post-slug-goes-here/`. Make sure you update the `date` field to the desired publishing date.

If the `public` field is set to `false`, the post will not be rendered.

Helper script for generating the post slug: 
```js
'Earn Orchid’s OXT on CoinMarketCap'.toLowerCase().replace(/[^a-zA-Z\d\s:]/g,'').replace(/ /ig, '-')
```

Helper script for generating the post date: 
```js
new Date('Nov 24 2020 8:00:00 GMT-0600 (Central Standard Time)').getTime();
```

Generate markdown from google doc text: [Paste To Markdown](https://euangoddard.github.io/clipboard2markdown/)


&nbsp;

### Featured images
To add a new featured image to use in a post, copy the image file into `/static/img/uploads`. If your file was named `/static/img/uploads/orchid-logo-text.jpg`, then the value you put in the `featuredimage` field should be `/img/uploads/orchid-logo-text.jpg`.

Make sure that the resulting image is under 500KB, I usually aim for 150KB or lower, with a resolution of about 1200x720. Please note that certain types of illustrations can be compressed enough as PNG files without having to convert them to JPG files.

If you don't have access to a featured image for the blog post yet, `/img/uploads/orchid-logo-text.jpg` is a good placeholder.

&nbsp;

### Choosing tags
As far as `tags` go, use your own discretion to fill out the tags from [the existing selection](https://blog.orchid.com/tags/). If you misspell a tag or use one that doesn't exist yet, a new tag of that name will be created, and once that new tag reaches 0 posts it will be removed from the site.

&nbsp;

### Converting to markdown from a google doc
In order to speed up the process, I often use a simple [markdown converter](https://euangoddard.github.io/clipboard2markdown/) to convert a google doc into a workable markdown format. However make sure to check for any **bold text** or [links](#) that are not automatically carried over, they can sometimes get lost in translation. Spacing also usually requires some manual effort, remember to use `&nbsp;` in a pinch to add extra spaces between paragraphs.

&nbsp;

### Adding images to the post body

To add an image to your post, just place the compressed image file inside of the `/static/img` directory, and embed the image like a normal markdown image, but leaving `static` out of the path to the image.

`![My cool new images "alt" attribute](/img/my-image.jpg)`

&nbsp;

### Post Interstitial

The newsletter interstitial will be inserted automatically by default, but if needed you can manually insert it by adding `[interstitial]` to an empty line.

If you wish to disable the interstitial for a single post, you can add `no_interstitial: true` to the post header.

&nbsp;

## Verifying before pushing 
In order to test that your post has been correctly formatted, make sure to run `npm run build` followed by `npm run serve` and visit `localhost:8000` to make sure everything looks correct.