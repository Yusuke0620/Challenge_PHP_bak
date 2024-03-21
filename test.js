const openBtn = document.querySelector('.open-btn');
const gNav = document.getElementById('g-nav');



// ボタンがクリックされたら
openBtn.addEventListener("click", () => {
    // ボタン自身に active クラスを付与し、ナビゲーションに panel-active クラスを付与
    this.classList.toggle("active");
    gNav.classList.toggle("panel-active");
});

// ナビゲーションのリンクがクリックされたら
document.querySelectorAll("#g-nav a").forEach(function(link) {
    link.addEventListener("click", function() {
        // ボタンの active クラスを除去し、ナビゲーションの panel-active クラスも除去
        openBtn.classList.remove("active");
        gNav.classList.remove("panel-active");
    });
});
