'use strict';

import vimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new vimeoPlayer(iframe);

if (localStorage.getItem('videoplayer-current-time') !== null) {
  const savedTime = parseFloat(
    localStorage.getItem('videoplayer-current-time')
  );
  console.log(`Saved time in local storage is: ${savedTime} s`);
  player
    .setCurrentTime(savedTime)
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          console.log(`${error}`);
          break;

        default:
          console.log(`${error}`);
          break;
      }
    });
}

const saveVideoTime = data => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
  //   console.log(data.seconds);
};

player.on('timeupdate', throttle(saveVideoTime, 1000));
