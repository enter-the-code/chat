# 소켓 프로젝트


## 👩‍🏫PROJECT 소개

---

소켓학습에 따른 채팅방 미니 프로젝트 

🗓️ **작업기간** : 2022/09.13 → 2022/09.17

👨‍💻 **투입인원** : 1명

📒 **주요업무** 

- 기능구현
- 소켓통신
- ui

🌱 **스킬 및 사용툴**

 `HTML5` `css3` `jquery` `git` `visualStudioCode` `Bootstrap` `JavaScript`

## 🖌️UI  및 기능

### 첫 입장페이지 및 체팅창 ui

입장시 웹소켓 연결 및 접속 알림 일반적인 체팅 기능 구현**( `jquery`**  `websocket` `javascript` `nodejs`)

- 프론트 엔드
    - 프론트 쪽에서 소켓 연결 및 체팅 텍스트와 닉네임을 소켓 io를 통해 전송
- 백엔드
    - 프론트에서 소켓을 연결할 경우 닉네임을 key 소켓 id를 value로 두고 유저관리
    - 다시 전송시 유저 닉네임과 텍스트를 broadcast로 본인 외에 전송

<img width="300" alt="스크린샷 2022-09-16 오후 2 42 27" src="https://user-images.githubusercontent.com/84896918/199922686-98bb89d9-8d74-40aa-8384-9d6867de8059.png">

![ezgif com-gif-maker (25)](https://user-images.githubusercontent.com/84896918/199922710-18c8a00a-ec80-4be6-8009-93a9ed9e182f.gif)


dm 기능 및 이미지 업로드 기능 ( **`jquery`**  `websocket` `javascript` `nodejs`)

- 프론트 엔드
    - 프론트 쪽에서 소켓 연결 및 체팅 텍스트와 dm 대상 닉네임과 유저 닉네임 소켓 io를 통해 전송
    - 프론트 쪽에서 file 타입의 input으로 사진 이름을 받아온후 백엔드에 전송
- 백엔드
    - 받은 데이터를 바탕으로 key값을 통해 알맞은 소켓 id를 찾아 전송
    - 알맞은 사진을 찾아 다시 대상 소켓 id로 전송

![ezgif com-gif-maker (28)](https://user-images.githubusercontent.com/84896918/199922741-fdbf2a41-a2d8-4581-8aea-62b1e6a6c04c.gif)


새로고침시 튕겨나감( **`jquery`**  `websocket` `javascript` `nodejs`)

- 프론트 엔드
    - 새로 고침시 다시 입장페이지로 돌아가게 구현
- 백엔드
    - 해당 소켓 아이디를 딕셔너리에서 제거


![ezgif com-gif-maker (27)](https://user-images.githubusercontent.com/84896918/199922752-6eae7e49-99ca-415d-b763-97a31c069252.gif)

비속어 필터링( **`jquery`**  `websocket` `javascript` `nodejs`)

- 프론트 엔드
    - 텍스트를 백엔드로 전송
- 백엔드
    - 해당 텍스트를 정규 표현식으로 검사해 비속어를 미리 지정된 언어로 치환 후 프론트로 전송

<img width="300" alt="스크린샷 2022-09-16 오후 2 55 41" src="https://user-images.githubusercontent.com/84896918/199922772-8a82dc32-573f-4819-aa03-e7bb34561387.png">


## 🖌️예상 이슈

- 이미지가 미리 벡엔드에 저장되어 있지 않다면 이미지가 깨지게 됨

