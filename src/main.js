function scrollIntoView () {
  window.scrollTo(0, 0)
}

// 阻止微信拖动
document.body.addEventListener('touchmove', function (e) {
  e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
}, {passive: false})

//生成从minNum到maxNum的随机数
function randomNum(minNum,maxNum){ 
  switch(arguments.length){ 
      case 1: 
          return parseInt(Math.random()*minNum+1,10); 
      break; 
      case 2: 
          return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
      break; 
          default: 
              return 0; 
          break; 
  } 
} 

const videoList = [
  'http://demos.run/hubeiVideo/video/1.mp4',
  'http://demos.run/hubeiVideo/video/2.mp4',
  'http://demos.run/hubeiVideo/video/3.mp4',
  'http://demos.run/hubeiVideo/video/4.mp4',
  'http://demos.run/hubeiVideo/video/5.mp4',
  'http://demos.run/hubeiVideo/video/6.mp4',
  'http://demos.run/hubeiVideo/video/7.mp4',
  'http://demos.run/hubeiVideo/video/8.mp4'
]

var vidElement = document.getElementById('preload');

function loadVideo (element, index) {
  setTimeout(function () {
    vidElement.src = element;
    console.log(vidElement)
    vidElement.play()
    setTimeout(function () {
      vidElement.pause()
    }, 800);
  }, 1000 * index);
}
var videoSrc = videoList[randomNum(0, 7)]
setTimeout(() => {
  loadVideo(vidElement, videoSrc)
}, 0);