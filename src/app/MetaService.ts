import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root',
})

export class MetaService {
    constructor(private title: Title, private meta: Meta) { }

    clearAllTags() {
        let tags = this.meta.getTags('property^="og:"');
        for (let i = 0; i < tags.length; i++) {
            this.meta.removeTagElement(tags[i])
        }

        tags = this.meta.getTags('name^="twitter:"');
        for (let i = 0; i < tags.length; i++) {
            this.meta.removeTagElement(tags[i])
        }

        this.meta.removeTag('name="description"');
    }

    update(name: string, value: string) {
        let tag = null;

        // OG tags use the "property" attribute instead of "name"
        if (/^og:/.test(name)) {
            tag = this.meta.getTag(`property="${name}"`);
        } else {
            tag = this.meta.getTag(`name="${name}"`);
        }

        if (name === 'title') {
            this.title.setTitle(value);
        } else if (tag) {
            if (/^og:/.test(name)) {
                this.meta.updateTag({ name: name, content: value }, `property="${name}"`)
            } else {
                this.meta.updateTag({ name: name, content: value }, `name="${name}"`)
            }
        } else {
            if (/^og:/.test(name)) {
                this.meta.addTag({ property: name, content: value })
            } else {
                this.meta.addTag({ name: name, content: value })
            }
        }
    }

    remove(name: string, value: string) {
        // OG tags use the "property" attribute instead of "name"
        if (/^og:/.test(name)) {
            this.meta.removeTag(`property="${name}"`);
        } else {
            this.meta.removeTag(`name="${name}"`);
        }
    }

    // The following "setGlobalX" functions refer to "global" as covering the three major meta schemas: w3c, OpenGraph, and Twitter.
    setGlobalImage(image: string) {
        this.update('og:image', image);
        this.update('twitter:image', image);
    }
    setGlobalDescription(description: string) {
        this.update('description', description);
        this.update('og:description', description);
        this.update('twitter:description', description);
    }
    setGlobalTitle(title: string) {
        this.update('title', title);
        this.update('og:title', title);
        this.update('twitter:title', title);
    }
}