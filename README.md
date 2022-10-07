# mini project - React shop

미니프로젝트로 react를 이용해 쇼핑몰을 만들었습니다.

---

### 사용한 기술

사용한 기술 스택은 아래와 같습니다.

```
  const skill = [
    react,
    redux,
    typescript,
    tailwind css
  ]
```

---

### 배포

vercel을 이용하여 배포하였으며 주소는 아래와 같습니다.

[react-shop](https://project-shopping-mall.vercel.app/)

---

### 설명

다양한 디스플레이에서 접속되는 것을 염두하여 반응형 웹을 적용하였고

어두운 환경에서 접속하는 사용자 눈의 피로를 덜 수 있게 다크모드를 사용할 수 있습니다.

상품들을 장바구니에 담을 때 redux를 사용해 전역으로 관리할 수 있게 했고

localstorage에도 장바구니 목록을 저장하여 페이지에 재접속했을 때 기존 장바구니 목록을 불러옵니다.

---

### 향후 계획

1. ~~로그인 페이지~~
2. ~~페이지 옆에 기존에 봤던 상품 목록 보이기~~
3. 데이터베이스 연결 (firebase로 진행중)
4. 사용자 프로필 페이지
5. 로그인 시 사용자 프로필 페이지에서 구매한 상품 목록 보이기 
6. redux toolkit 직렬화에 대해 공부하고 middleware 수정

---

### 프로젝트 개선 과정

1. devDependencies 와 dependencies 정리 [tistory](https://gaanuu.tistory.com/entry/dependencies-%EC%99%80-devDependencies-%EC%96%B4%EB%94%94%EC%97%90-%EC%84%A4%EC%B9%98%ED%95%B4%EC%95%BC-%ED%95%A0%EA%B9%8C)

---

### 시작

```
// step 1 관련 패키지 설치
npm init

// step 2 실행
npm run dev

```
