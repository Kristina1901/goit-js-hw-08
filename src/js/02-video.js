// Выполняй это задание в файлах 02-video.html и 02-video.js. Разбей его на несколько подзадач:

// Ознакомься с документацией библиотеки Vimeo плеера.
// Добавь библиотеку как зависимость проекта через npm.
// Инициализируй плеер в файле скрипта как это описано в секции pre-existing player, но учти что у тебя плеер добавлен как npm пакет, а не через CDN.
// Разбери документацию метода on() и начни отслеживать событие timeupdate - обновление времени воспроизведения.
// Сохраняй время воспроизведения в локальное хранилище. Пусть ключом для хранилища будет строка "videoplayer-current-time".
// При перезагрузке страницы воспользуйся методом setCurrentTime() для того чтобы возобновить воспроизведение с сохраненной позиции.
// Добавь в проект бибилотеку lodash.throttle и сделай так, чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду.
import '../css/common.css';
import { throttle } from 'lodash';


    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
    
    getTime()
    
   player.on('timeupdate', function (currentTime) {
        throttle(localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime.seconds)), 1000);
   });
     
    
   function getTime() {
    const theme = localStorage.getItem("videoplayer-current-time");
    if (theme) {
      player.setCurrentTime(theme)
      
     }

  }

   
  