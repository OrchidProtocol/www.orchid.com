# Podcast Publishing Process

Replace references to episode 0 with the episode that you are creating.

You can check out an example of a podcast launch PR [here](https://github.com/OrchidProtocol/www.orchid.com/pull/111/files).

## Create a new component for the page

Create the new directory for it
`mkdir src/app/podcast-ep0`

Copy previous episodes files to use as a starting template
`cp -a src/app/podcast-ep1/. src/app/podcast-ep0`

Update the component name and metadata with the correct information.
`src/app/podcast-ep0/podcast.component.ts`
*Make sure to also include the new images in the podcast image directory. `assets/img/podcast/...`*

```js
...
            //Update the component name
export class PodcastEp1Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
                            // Update the metadata
        this.meta.setGlobalTitle('Episode 1: Interview with Rich Staropoli | Follow the White Rabbit');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/EpisodeHeader_RStaropoli.png');
        this.meta.setGlobalDescription('In our premiere episode, we go down the rabbit hole with Rich Staropoli, whose career reads like a Tom Clancy spy novel.');
    }
}
...
```

Update the component template with the correct information
`src/app/podcast-ep0/podcast.component.html`

```html
...
<div class="card-grid">
    <div class="card-image-wrap">
        <!--Update the image-->
        <div style="background-image:url(/assets/img/podcast/EpisodeHeader_Website_RRumburg.jpg)">
        </div>
    </div>
    <div class="card-body">
        <div>
            <!--Update the publishing date-->
            June 03, 2020
        </div>
        <h3>
            <!--Update the title and episode number-->
            Episode 1: Interview with Rich Staropoli
        </h3>
        <p>
            <!--Update the description-->
            In our premiere episode, we go down the rabbit hole with Rich Staropoli, whose career reads like a Tom Clancy spy novel. He's the former White House CIO for the Department of Homeland Security and a special agent for the Secret Service for 25 years. He discusses what it was like to protect President George W. Bush on September 11th, his thoughts on the current state of technology at DHS, what cybersecurity risks our country faces, and the future of our election systems.
        </p>
    </div>
</div>
<div class="card-footer">
    <!--Update the embedded podcast player-->
    <iframe style="border: none" src="//html5-player.libsyn.com/embed/episode/id/14651969/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/070a00/" height="90" width="100%" scrolling="no" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
</div>
...
```

Add your new component to `src/app/app.module.ts` and `src/app/routes.ts`

`src/app/app.module.ts`
```ts
...
import { PodcastEp20Component } from './podcast-ep20/podcast.component';
import { PodcastEp21Component } from './podcast-ep21/podcast.component';
import { PodcastEp22Component } from './podcast-ep22/podcast.component';
import { PodcastEp23Component } from './podcast-ep23/podcast.component';

// Insert your module
import { PodcastEp0Component } from './podcast-ep0/podcast.component';
...

...
@NgModule({
  declarations: [
    ...
    PodcastEp21Component,
    PodcastEp22Component,
    PodcastEp23Component,

    // Insert your module
    PodcastEp0Component,
    ...
  ],
  ...
})
...
```

`src/app/routes.ts`
```ts
...
import { PodcastEp20Component } from './podcast-ep20/podcast.component';
import { PodcastEp21Component } from './podcast-ep21/podcast.component';
import { PodcastEp22Component } from './podcast-ep22/podcast.component';
import { PodcastEp23Component } from './podcast-ep23/podcast.component';

// Insert your module
import { PodcastEp0Component } from './podcast-ep0/podcast.component';
...

...

export const routes: Routes = [
	{
		path: "",
		component: PageLayoutComponent,
		children: [
            ...
			{ path: "podcast/episode-22-adriana-hamacher.html", redirectTo: "podcast/episode-22-adriana-hamacher" },
			{ path: "podcast/episode-22-adriana-hamacher", component: PodcastEp22Component },
			{ path: "podcast/episode-23-roneil-rumburg.html", redirectTo: "podcast/episode-23-roneil-rumburg" },
            { path: "podcast/episode-23-roneil-rumburg", component: PodcastEp23Component },
            
            //Insert your module
            //make sure to replace firstname/lastname/0 with the correct information
            { path: "podcast/episode-0-firstname-lastname.html", redirectTo: "podcast/episode-0-firstname-lastname" },
            { path: "podcast/episode-0-firstname-lastname", component: PodcastEp0Component },
            ...
		]
	},
	{ path: "index.html", redirectTo: "" },
];
...
```

## Add the episode to the podcast index page

`src/app/podcast/podcast.component.html`
```html
<h2>Latest Episode</h2>
<div class="cards-wrapper">
    <div class="cards-wrapper">

        <!--
            Remove the card--large class from the first item in the list, and paste in the <div class="card card--large"> element and it's children from podcast.component.html above it
        -->
        
        <div class="card card--large">
            <div class="card-grid">
                <div class="card-image-wrap">
                    ...
                </div>
                <div class="card-body">
                    ...
                </div>
            </div>
            <div class="card-footer">
                ...
            </div>
        </div>

    </div>
</div>
```

Make sure to link the title in the card to your new episode's page

```html
<div class="card card--large">
    <div class="card-grid">
        ...
        <div class="card-body">
            ...
            <h3>
                <a href="/podcast/episode-0-firstname-lastname">
                    Episode 0: Firstname Lastname
                </a>
            </h3>
            ...
        </div>
    </div>
    ...
</div>
```