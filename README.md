# 오르미 FE 프로젝트
## 1. 목표와 기능
### 1.1 목표
- HTML, CSS, JavaScript를 사용한 웹페이지 구현
- 고양이 호두에 대한 소개 페이지 구현   
### 1.2 기능
- 모바일 대응 페이지 제공
- 갤러리를 통한 사진 전시
- 이메일 유효성을 거친 이메일 전송 기능
- 스크롤 바에 따라 고정되는 내비게이션 바
- 페이지의 어디에서든 최상단으로 빠르게 이동할 수 있는 스크롤 탑 버튼
- 모바일 화면에서 슬라이드 메뉴 제공
## 1.3 팀 구성
최지윤 
# 2. 개발 환경 및 배포 URL
https://github.com/cjyjiyoon/Ormi-BE-Project1   
   
https://www.figma.com/design/jLCWPoN2vN5KVodEFOWEDK/ormi_be_fe_project1?node-id=0-1&t=1rwVu8YPbfh3VcZ7-1   

## 2.1 개발 환경
- HTML Living Standard
- CSS
- JavaScript   

# 3. 요구사항 명세와 기능 명세
![function](https://github.com/user-attachments/assets/ea3ca352-24ac-4d19-95fe-f409810d46c4)
# 4. 프로젝트 구조와 개발 일정
## 4.1 프로젝트 구조
📂project1      
┣ 📂public   
┃   ┗ 📄index.html    
┣ 📂scripts   
┃   ┗ 📄script.js   
┣ 📂src   
┃  ┗ 📂assets   
┃  ┃  ┗ 📂images   
┃  ┣ 📂styles  
┃  ┃  ┗📄base.css   
┃  ┃  ┗📄footer.css   
┃  ┃  ┗📄header.css   
┃  ┃  ┗📄main.css   
┃  ┃  ┗📄modal.css   
┃  ┃  ┗📄reset.css   
┃  ┃  ┗📄scroll-button.css   
┃  ┗  ┗📄slide.css   
┗ 📄README.md   
## 4.2 개발 일정(WBS)
![wbs](https://github.com/user-attachments/assets/169faa40-671a-42d3-a442-802bd5560175)
# 5. 역할 분담
- 팀장 : 최지윤
- FE : 최지윤
# 6. 와이어프레임
![wireframe](https://github.com/user-attachments/assets/190775e6-67b7-465e-982a-80c3cd7716fb)
## 6.2 화면 설계
![프로젝트구현-pc화면](https://github.com/user-attachments/assets/f2679ecd-599c-48d1-9810-bd22733acdd9)   
![프로젝트구현-모바일화면](https://github.com/user-attachments/assets/7fd76e7d-00cd-459a-ab6d-4e8ea6f5b4aa)   
|PC메인|모달|PC 스크롤|   
|---|---|---|
|![pc_main](https://github.com/user-attachments/assets/9cc8529f-deee-4f9d-bda1-f28dc5c8018c)|![pc_modal](https://github.com/user-attachments/assets/3ace9c05-c869-42de-ad6b-56d6ab822f85)|![pc_scroll](https://github.com/user-attachments/assets/092f1273-762b-4e7e-bf94-1c1a2c968953)|
|모바일 메인|모바일 모달|모바일 슬라이드|
|![mobile_main](https://github.com/user-attachments/assets/1b9e7f2d-70b9-4ee3-97a8-b00fc675532e)|![mobile_modal](https://github.com/user-attachments/assets/61426849-4b50-4905-8334-8741f9ed5fd2)|![mobile_slide](https://github.com/user-attachments/assets/366eb70d-5d9f-444e-9d79-212142221dbc)
# 7. 메인 기능
- 모바일 페이지에 대응합니다. 가로 해상도 768px을 기준으로, 그보다 작을 시 모바일 레이아웃이 적용됩니다.
- 사용자의 스크롤 위치를 기반으로 내비게이션 헤더가 최상단에 고정되어 있도록 합니다. 보다 효율적인 웹사이트 사용에 도움이 될 수 있습니다.
- 스크롤 시, 우측 하단에 스크롤 탑 버튼이 등장합니다. 이 버튼을 클릭 시 페이지 최상단으로 부드럽게 올라갑니다.
- 스크롤 탑 버튼에 호버 기능을 탑재하여 마우스 커서가 올라가 있을 시 알아보기 쉽게 제작하였습니다.
- 이메일을 입력하여 페이지를 구독할 수 있도록 제작하였습니다. 이메일 작성 시, 이메일의 유효성을 확인합니다. 유효하지 않은 이메일일 경우 경고 알림창이 발생하며, 유효한 이메일일 경우 모달 창이 나타나며 이메일 주소를 서버로 전송합니다.      
![function-scroll](https://github.com/user-attachments/assets/8e6df566-50b7-453e-b1d3-93c95d693fc3)

![function-subscribe](https://github.com/user-attachments/assets/5e5aebd6-bcb9-4ddf-a9b6-e52eab67615d)
# 8. 에러와 에러 해결 
- 내비게이션 바 또는 모바일 레이아웃의 가로 사이즈가 화면 페이지를 넘어가는 오류가 있었으나 사이즈를 100vw로 조절하여 이를 해결하였습니다. 또한 비슷한 상황의 발생을 막기 위하여 가로 스크롤바를 삭제하였습니다.
- form에서 subscribe 버튼을 누를 때, 모달 창이 뜨지 않고 새로고침되는 문제를 해결하였습니다. subscribe 버튼의 타입을 submit이 아닌 button으로 변경하여 해결하였습니다.
- 모달 창과 모바일 슬라이드의 html을 별도의 파일로 분리한 후 Javascript를 사용하여 불러오는 방식을 사용하려 시도하였으나, 크롬 내부의 보안 규약으로 인하여 index.html 파일에 통합하였습니다. 별개의 서버를 사용하지 않을 경우 파일을 분리할 수 없을 듯 하여 파일을 통합하였습니다.
- 내비게이션 바와 상단부 소개 페이지의 내용이 겹쳐 보이는 문제가 발생하였으나, 두 부분을 모두 헤더 부분으로 넣는 방식을 사용하여 문제를 해결하였습니다.
- 모바일에서 갤러리의 사진들이 줄 바꿈 되지 않는 문제가 발생하였으나, flex 관련 속성을 조절하여 해결하였습니다. 
- email 전송 시 서버가 존재하지 않아 콘솔 로그에 에러로 작성됩니다.
# 9. 개발하며 느낀 점
처음 html을 설계할 때까지만 해도 주어진 디자인이 이미 존재한다는 점에서 오랜 시간이 소요되지 않으리라 오판했습니다. 실제 개발 시 가장 오랜 기간이 소요되었고, 그리고 가장 마지막까지 수정을 거친 것은 CSS 부분이었습니다. 반응형 디자인에 대한 개념은 이미 알고 있었기에, 이를 적절히 적용한다면 기간 내에 충분히 끝마치리라 생각하였으나 실제로는 반응형은 커녕 정해진  PC 해상도에 맞는 CSS를 설계하는 것으로도 제법 긴 시간이 걸렸습니다. 추후 코드를 다시 다듬을 기회가 온다면 이러한 부분을 재구성해 완전한 반응형으로 제작하고 싶습니다.    
또한 한차례 CSS와 JS 코드를 리팩토링하였으나 전역 변수의 수를 줄이거나 코드의 길이 자체를 줄이는 데에 난항을 겪었습니다. 다른 언어들을 공부하면서도 느꼈던 것이지만, 최적화된 클린 코드를 작성하는 것은 언제나 쉽지 않은듯 합니다.