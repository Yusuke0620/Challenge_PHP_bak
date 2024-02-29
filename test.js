const ball = document.querySelector('.ball');

//クリックイベント
ball.addEventListener('click', () => {

    //キーフレーム//透明から不透明
    const keyframes = [
        { opacity: 0.1, transform: 'translate(0, 0)' },
        { opacity: 1, transform: 'translate(300px, 0)' },
    ];
    //オプション
    const options = {
        duration: 1000,
        easing: 'ease-in-out',
    };
    
    //animateで出力
    ball.animate(keyframes, options);
});



