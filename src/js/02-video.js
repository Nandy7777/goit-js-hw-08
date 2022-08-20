import Player from '@vimeo/player';
// import throttle from `lodash.throttle`;

const iframe = document.querySelector(`iframe`);
const iframePlayer = new Player(iframe);

iframePlayer.on('timeupdate', function () {
  console.log(`Працює!`);
  // data is an object containing properties specific to that event
}); 


localStorage.setItem('videoplayer-current-time', JSON.stringify('timeupdate'));

const saveData = localStorage.getItem('videoplayer-current-time');
console.log(`saveData`, saveData);

const parseData = JSON.parse(saveData);
console.log(`parseData`, parseData);

iframePlayer
  .setCurrentTime(30.456)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });