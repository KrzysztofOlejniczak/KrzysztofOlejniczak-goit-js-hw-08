'use strict';

import vimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new vimeoPlayer(iframe);

if (localStorage.getItem('videoplayer-current-time') !== null) {
  console.log(localStorage.getItem('videoplayer-current-time'));
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}

const saveVideoTime = data => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
  //   console.log(data.seconds);
};

player.on('timeupdate', throttle(saveVideoTime, 1000));
