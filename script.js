const $topBtn = document.querySelector('.btn_scroll');
const $nav = document.querySelector('.nav_top');
const $header = document.querySelector('.header');
const headerRect = $header.getBoundingClientRect();
const $modal = document.querySelector('.modal_layer');
const submitModalButton = document.querySelector('.btn_modal_submit');
const $subBtn = document.querySelectorAll('.subscribe1, .subscribe2');
let $emailText = document.querySelector('.email_text');
const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-].[A-Za-z0-9\-]+/;


// 스크롤 관련 기능(버튼 등장, 내비바 고정)
window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
        if ((document.documentElement.scrollWidth > 768)) {
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

// 이메일 유효성 검사 
function emailValidCheck(email) {
    if (pattern.test(email.value) === false) {
        return false;
    } else {
        return true;
    }
}

// modal 팝업
function loadModal() {
    $modal.style.display = 'flex';
    submitModalButton.addEventListener('click', () => {
        alert('모달버튼 누름');
        $modal.style.display = 'none';
    });
    // fetch('./modal.html')
    //     .then(response => response.text())
    //     .then(html => {
    //         document.body.insertAdjacentHTML('beforeend', html);

    //         const modal = document.querySelector('.modal');
    //         const submitModalButton = document.querySelector('.btn_modal_submit');

    //         submitModalButton.addEventListener('click', function () {
    //             modal.style.display = 'block';
    //             alert('모달 클릭됨!');
    //             // 보내기
    //             // 그리고 모달 닫기
    //         });

    //         window.addEventListener('click', ()=>{
    //             alert('외부 클릭됨!');
    //             // 창 닫기(모달 외부 클릭)
    //         });
    //     })

    // .catch(error => console.error('모달 버튼 에러 발생')); // 오류 
    //


}

// 모달 버튼
$subBtn.forEach(button => {
    button.addEventListener('click', function () {
        if (emailValidCheck($emailText) === true) {
            alert('이메일 유효함' + $emailText.value);
            loadModal();
            // 모달 로드하고
            // 모달의 버튼 누르면 폼 제출하고
            // 그러고 모달 닫힘
            // 이건 모달에도 js를 넣어야 할 것 같은데? 
        }
        else {
            alert('이메일 형식이 유효하지 않습니다.' + $emailText.value);
        }
    })
});


