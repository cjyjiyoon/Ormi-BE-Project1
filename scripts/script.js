const topBtn = document.querySelector('.btn_scroll');
const nav = document.querySelector('.nav_top');
const modal = document.querySelector('.modal_layer');
const subscribeButtons = document.querySelectorAll('.subscribe1, .subscribe2');
const slideMenuButton = document.querySelector('.button_menu');
const slideBackButton = document.querySelector('.button_back');

let emailInput = document.querySelector('.email_text');

// 함수
// 이메일 유효성 체크
function emailValidCheck(email) {
    const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-].[A-Za-z0-9\-]+/;
    return pattern.test(email.value);
}

// modal 팝업
function loadModal() {
    modal.style.display = 'flex';
    const submitModalButton = document.querySelector('.btn_modal_submit');

    submitModalButton.addEventListener('click', () => {
        postEmail(emailInput.value);
        modal.style.display = 'none';
    });
}

// 데이터 전송
function postEmail(data) {
    fetch("#")
        .then((data) => data.json())
        .then((data) => {
            console.log(data);
            return data[0];
        })
        .catch((error) => {
            console.log(error);
        })
}

// 슬라이드 메뉴 토글
function toggleSlide() {
    const slideMenu = document.querySelector('.slide');
    slideMenu.classList.toggle('open');
}

// 스크롤 관련 기능(버튼 등장, 내비바 고정)
function scrollEvent() {
    if (window.scrollY > 500) {
        if ((document.documentElement.scrollWidth > 768)) {
            topBtn.style.display = 'block';
        }
        nav.style.position = 'fixed';
    } else {
        topBtn.style.display = 'none';
        nav.style.position = 'absolute';
    }
}

// 최상단으로 스크롤 이동
function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
}

// 모달 버튼 클릭 (이메일 검사 포함)
function subscribeModal() {
    if (emailValidCheck(emailInput)) {
        loadModal();
    }
    else {
        alert('이메일 형식이 유효하지 않습니다.');
    }
}

//이벤트 리스너
slideMenuButton.addEventListener('click', toggleSlide);
slideBackButton.addEventListener('click', toggleSlide);
window.addEventListener('scroll', scrollEvent);
topBtn.addEventListener('click', scrollTop);
subscribeButtons.forEach(button => button.addEventListener('click', subscribeModal));
