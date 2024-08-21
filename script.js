const $topBtn = document.querySelector('.btn_scroll');
const $nav=document.querySelector('.nav_top');
const $header=document.querySelector('.header');
const headerRect=$header.getBoundingClientRect();


// 스크롤 관련 기능(버튼 등장, 내비바 고정)
window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
        $topBtn.style.display = 'block';
        $nav.style.position='fixed';
    } else {
        $topBtn.style.display = 'none';
        $nav.style.position='absolute';
    }
});
// 클릭시 상단 이동 
$topBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: "smooth" })
});

