# Podcast Publishing Process

A pull request for publishing a podcast episode will end up with three files changed

- `src/pages/podcast/episode-123.md` - Contains description and metadata - Links to podcast episode on various platforms
- `static/img/podcast/P8PThumbnail_FirstnameLastname.jpg` - A square image used on the podcast page
- `static/img/podcast/P8PEpisode_FirstnameLastname.jpg` - A roughly 16:9 image that will be used when the link is embeded on social media platforms

## Markdown file

`src/pages/podcast/episode-123.md` is the example file name, but other than the path, the name can be whatever you want it to be as long as it retains the `.md` extension. We keep them in numerical order to keep things simple.

Example file:

```m
---
templateKey: podcast-episode
public: true
url: podcast/episode-91-travis-cannell
title: "Episode 91: Travis Cannell"
description: "This week host Derek E. Silva joins Travis Cannell, Head of Product & Marketing at Orchid. A great conversation on how Travis first met Co-founder Jay Freeman at the College of Creative Studies in Santa Barbara, why Orchid’s VPN is different from other privacy tools, and his predictions on the future of the Internet."
date: 1649867862252
featuredimage: /img/podcast/P8PThumbnail_TravisCannell.jpg
socialimage: https://www.orchid.com/img/podcast/P8PEpisode_TravisCannell.jpg
platformurls:
  - https://podcasts.apple.com/us/podcast/al...
  - https://open.spotify.com/episode/327pr...
---
```

---

```
templateKey: podcast-episode
```

Leave this as is, used by GraphQL to assign `src/templates/podcast-episode.js` to render the page.

---

```
public: true
```

A simple toggle to disable episode from rendering by setting to `false`.

---

```
url: podcast/episode-91-travis-cannell
```

Used by gatsby to decide the final URL, this example will result in [https://www.orchid.com/podcast/episode-91-travis-cannell/](https://www.orchid.com/podcast/episode-91-travis-cannell/)

---

```
title: "Episode 91: Travis Cannell"
```

Self descriptive, make sure to properly escape quotes if necessary

---

```
description: "This week host Derek E. Silva joins Travis Cannell..."
```

Self descriptive, make sure to properly escape quotes if necessary

---

```
date: 1649867862252
```

ISO timestamp of the podcast episode, if set in the future this should essentially schedule the blog post to go out at a later date. Site is built every 30 minutes as per [.github/workflows/production.yml](.github/workflows/production.yml)

---

```
featuredimage: /img/podcast/P8PThumbnail_TravisCannell.jpg
```

A square image used on the podcast page. Should be scaled down to about 1080x1080 pixels, and compressed as a JPG to stay within about 150kb.

---

```
socialimage: https://www.orchid.com/img/podcast/P8PEpisode_TravisCannell.jpg
```

A roughly 16:9 image that will be used when the link is embeded on social media platforms. Try to stay within the same guidelines as the above previous field, dimensions should be closer to 1200x600 pixels.

```m
platformurls:
  - https://podcasts.apple.com/us/podcast/al...
  - https://open.spotify.com/episode/327pr...
```

A list of links to the podcast episode on various platforms. Icons are automatically assigned to match platforms based on CSS rules. Apple, Spotify, and Google are usually required for pushing an episode live, smaller platforms are not a strict requirement.
