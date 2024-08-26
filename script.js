const topBtn = document.querySelector('.btn_scroll');
const nav = document.querySelector('.nav_top');
const header = document.querySelector('.header');
const headerRect = header.getBoundingClientRect();
const modal = document.querySelector('.modal_layer');
const submitModalButton = document.querySelector('.btn_modal_submit');
const subBtn = document.querySelectorAll('.subscribe1, .subscribe2');
const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-].[A-Za-z0-9\-]+/;
const slideMenu = document.querySelector('.slide');
const slideMenuButton = document.querySelector('.button_menu');
const slideBackButton = document.querySelector('.button_back');

let emailInput = document.querySelector('.email_text');

// 스크롤 관련 기능
// function scrollEvent(){
//     const 
// }

// 스크롤 관련 기능(버튼 등장, 내비바 고정)
window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
        if ((document.documentElement.scrollWidth > 768)) {
            topBtn.style.display = 'block';
        }
        nav.style.position = 'fixed';
    } else {
        topBtn.style.display = 'none';
        nav.style.position = 'absolute';
    }
});
// 스크롤 탑 버튼 기능
topBtn.addEventListener('click', function () {
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
    modal.style.display = 'flex';
    submitModalButton.addEventListener('click', () => {
        postEmail(emailInput.value);
        modal.style.display = 'none';
    });
}



// 데이터 전송
function postEmail(data){
    fetch("#")
    .then((data)=>data.json())
    .then((data)=>{
        console.log(data);
        return data[0];
    })
    .catch((error)=>{
        console.log(error);
    })
        
}

// 모달 버튼
subBtn.forEach(button => {
    button.addEventListener('click', function () {
        if (emailValidCheck(emailInput) === true) {
            loadModal();

        }
        else {
            alert('이메일 형식이 유효하지 않습니다.');
        }
    })
});

// 슬라이드 메뉴 표시
slideMenuButton.addEventListener('click', () => {
    slideMenu.classList.toggle('open');
});
// 슬라이드 메뉴 비표시
slideBackButton.addEventListener('click', () => {
    slideMenu.classList.toggle('open');
})


