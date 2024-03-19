/*-------------------------------------------
要素をスクロールで表示
-------------------------------------------*/

const animateFade = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target);

      entry.target.animate(
        {
          opacity: [0, 1],
          filter: ['blur(.4rem)', 'blur(0)'],
          translate: ['0 4rem', 0],
        },
        {
          duration: 2000,
          easing: 'ease',
          fill: 'forwards',
        }
      );

      obs.unobserve(entry.target);
    }
  });
};





//監視ロボ
const fadeObserver = new IntersectionObserver(animateFade);
//監視する要素を代入しておく
const fadeElements = document.querySelectorAll('.fadein');

fadeElements.forEach((fadeElement) => {
  //監視要素を指示
  fadeObserver.observe(fadeElement);
})