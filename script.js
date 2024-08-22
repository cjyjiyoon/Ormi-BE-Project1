const $topBtn = document.querySelector('.btn_scroll');
const $nav = document.querySelector('.nav_top');
const $header = document.querySelector('.header');
const headerRect = $header.getBoundingClientRect();



// 스크롤 관련 기능(버튼 등장, 내비바 고정)
window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
        if((document.documentElement.scrollWidth > 768)){
            $topBtn.style.display = 'block';
        }
        $nav.style.position = 'fixed';
    } else {
        $topBtn.style.display = 'none';
        $nav.style.position = 'absolute';
    }
});
// 스크롤 탑 버튼 기능
$topBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: "smooth" })
});

// https://velog.io/@seungmimi/javascript%EB%AA%A8%EB%8B%AC-%ED%8C%9D%EC%97%85-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
