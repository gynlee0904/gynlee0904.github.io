# gynlee0904.github.io

개인 개발자 포트폴리오 사이트. GitHub Pages로 배포되는 정적 HTML 사이트.

## 배포

- **URL**: https://gynlee0904.github.io
- **플랫폼**: GitHub Pages (`main` 브랜치 자동 배포)
- `main`에 푸시하면 1~2분 내 반영됨

## 구조

```
index.html            # 전체 포트폴리오 (단일 페이지)
portfolio-concept.md  # 디자인 컨셉 참고 문서
```

## 디자인 시스템

| 역할 | HEX |
|------|-----|
| 배경 | `#0F172A` |
| 서피스 (카드) | `#1E293B` |
| 보더 | `#334155` |
| 본문 텍스트 | `#F8FAFC` |
| 액센트 (포인트) | `#378ADD` |
| 보조 텍스트 | `#94A3B8` |

- 폰트: `Inter` (본문), `JetBrains Mono` (레이블/코드)
- 최대 너비: `1100px`

## 페이지 섹션

1. **Hero** — 이름, 직군, CTA 버튼
2. **Skills** — 카테고리별 태그 (퍼센트 막대 사용 금지)
3. **Projects** — 2열 카드 (모바일 1열), 최대 4개
4. **About** — 짧은 자기소개
5. **Contact** — 이메일 링크, GitHub, LinkedIn

## 수정 시 주의사항

- 스킬 숙련도 퍼센트 막대(%) 추가 금지 (`portfolio-concept.md` 참고)
- 배경 파티클, 동영상, 과한 3D 효과 추가 금지
- 프로젝트 카드는 4개 이하로 유지
- 모바일 레이아웃 반드시 확인
