import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

const onPlay = function ({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const timeAfterUpdate = localStorage.getItem('videoplayer-current-time');

if (timeAfterUpdate) {
  player.setCurrentTime(timeAfterUpdate);
}
