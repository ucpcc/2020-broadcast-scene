# ucpc2020-broadcast-scene

UCPC 2020 인터넷 방송 씬

- [활용 예](https://www.youtube.com/watch?v=ilhvcHJ8aQY)

OBS와 함께 사용할 수 있습니다.

*급하게 정신없이 작성한 프로젝트라 코드가 다소 더럽습니다. PR 환영합니다!*

## 실행 방법

`npm start`

- `/main`: 4분할 화면
  - 왼쪽: 4:3 스크린
  - 오른쪽: 위에서부터 차례로 4:3 스크린, 대회 시작/종료까지 남은 시간 타이머, 스폰서 크로스페이드
- `/timer`: 대회 시작/종료까지 남은 시간 전체화면 타이머
- `/scoreboard`: 전체화면 스코어보드
- 이외의 주소: 왼쪽 위 UCPC 로고만 존재하는 빈 화면
