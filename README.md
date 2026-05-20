# zinnli.dev

배우고, 기록하고, 나누기 위한 개인 기술 블로그입니다.

프론트엔드 개발을 하며 공부한 내용, 문제를 해결한 과정, 회고를 MDX 기반 글로 정리합니다. 단순한 메모 저장소보다는 시간이 지나도 다시 읽을 수 있는 개발 로그를 목표로 운영하고 있습니다.

## 주요 내용

- `Study`: 공식 문서, 기술 개념, 라이브러리 사용법 정리
- `TroubleShooting`: 개발 중 마주친 문제와 해결 과정 기록
- `Retrospect`: 프로젝트나 학습 과정에 대한 회고
- `WIL`: 주간 학습과 작업 기록

## 기술 스택

- Next.js App Router
- TypeScript
- MDX
- Tailwind CSS
- next-mdx-remote
- gray-matter
- rehype-pretty-code
- giscus

## 프로젝트 구조

```bash
src
├── app                  # 라우트, 메타데이터, sitemap, robots
├── assets               # 아이콘 에셋
├── components           # 헤더, 푸터, 목록, 게시글, 댓글 컴포넌트
├── lib                  # MDX 파일 파싱 및 게시글 목록 생성
├── markdown             # 블로그 글 원본
│   ├── Retrospect
│   ├── Study
│   ├── TroubleShooting
│   └── WIL
├── styles               # 폰트 스타일
└── types                # MDX 관련 타입
```

## 로컬 실행

패키지 매니저는 `pnpm`을 기준으로 사용합니다.

```bash
pnpm install
pnpm dev
```

개발 서버가 실행되면 브라우저에서 `http://localhost:3000`으로 접속합니다.

## 사용 가능한 스크립트

```bash
pnpm dev      # 개발 서버 실행
pnpm build    # 프로덕션 빌드
pnpm start    # 빌드 결과 실행
pnpm lint     # 린트 실행
```

## 글 작성 방법

글은 `src/markdown/{category}/{slug}.mdx` 형식으로 작성합니다.

예시:

```bash
src/markdown/TroubleShooting/20260520.mdx
```

각 MDX 파일 상단에는 다음 front matter가 필요합니다.

```mdx
---
title: 글 제목
date: 2026-05-20
desc: 글 목록과 메타데이터에 노출될 설명
---
```

파일이 추가되면 `src/lib/mdx.ts`에서 카테고리와 게시글 목록을 읽어 정렬하고, 각 글 상세 페이지의 메타데이터와 Open Graph 정보도 함께 생성합니다.

## 배포

CI 환경에서는 `next.config.mjs` 설정에 따라 정적 export가 활성화되고, GitHub Pages 주소인 `https://zinnli.github.io`를 asset prefix로 사용합니다.
