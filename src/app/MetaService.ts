import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root',
})

export class MetaService {
    constructor(private title: Title, private meta: Meta) { }
    update(name: string, value: string) {
        const tag = this.meta.getTag(name);
        
        if (name === 'title') {
            this.title.setTitle(value);
        } else {
            this.meta.addTag({ name: name, content: value })
        }
    }

    setGlobalImage (image: string) {
        this.update('og:image', image);
        this.update('twitter:image', image);
    }
    setGlobalDescription (description: string) {
        this.update('description', description);
        this.update('og:description', description);
        this.update('twitter:description', description);
    }
    setGlobalTitle (title: string) {
        this.update('title', title);
        this.update('og:title', title);
        this.update('twitter:title', title);
    }
}