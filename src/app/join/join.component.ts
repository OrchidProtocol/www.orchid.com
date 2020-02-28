import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-join',
    templateUrl: './join.component.html',
    styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {
    player:any = null;

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Join Orchid | Orchid');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/join/social.jpg');
        this.meta.setGlobalDescription('We believe the internet should be open and accessible to everyone, which is why we\'re building a truly open source network overlay VPN.');

        if (typeof window !== 'undefined') {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            window['onYouTubeIframeAPIReady'] = this.onYouTubeIframeAPIReady.bind(this);

            const buttons = document.getElementsByClassName('join-step__play-skip');
            for (let index = 0; index < buttons.length; index++) {
                const element = buttons[index];
                element.addEventListener('click', this.skipTo.bind(this));
            }
        }
    }

    skipTo(event) {
        this.player.seekTo(parseInt(event.currentTarget.dataset.timecode));
        this.player.playVideo()
        event.preventDefault();
        return false;
    }
    stopVideo() {
        this.player.stopVideo();
    }

    onYouTubeIframeAPIReady () {
        const fallback = document.getElementById('fallback-iframe');
        fallback.parentElement.removeChild(fallback);
        this.player = new window['YT'].Player('youtube-embed', {
            height: '390',
            width: '640',
            videoId: '5TIxoG4Bcz8',
            events: {
                'onReady': this.onPlayerReady.bind(this),
                'onStateChange': this.onPlayerStateChange.bind(this)
            }
        });
    }

    onPlayerReady(event) {
        const element = document.getElementById('youtube-embed');
        element.setAttribute(element.parentElement.attributes[0].nodeName, "");
    }

    onPlayerStateChange(event) {
        // 5. The API calls this function when the player's state changes.
        //    The function indicates that when playing a video (state=1),
        //    the player should play for six seconds and then stop.
        //if (event.data == window['YT'].PlayerState.PLAYING && !this.done) {
        //    this.done = true;
        //}
    }
}
