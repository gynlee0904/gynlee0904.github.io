const DATA = {
  hero: {
    name: "이기윤",
    role: "Full Stack Developer",
    tagline: "문제를 끝까지 이해하고 팀과 함께 성장하는 풀스택 개발자입니다.",
  },

  skills: [
    {
      category: "Frontend",
      items: ["HTML / CSS", "JavaScript", "React", "Thymeleaf", "AJAX"],
    },
    {
      category: "Backend",
      items: [
        "Java",
        "Spring Boot",
        "Spring",
        "MyBatis",
        "Hibernate",
        "QueryDSL",
        "JWT",
        "Spring Security",
        "REST API",
      ],
    },
    {
      category: "Database",
      items: ["Oracle", "MySQL", "MariaDB"],
    },
    {
      category: "DevOps & Cloud",
      items: ["Docker", "Nginx", "AWS EC2", "Google Cloud Platform"],
    },
    {
      category: "Tools",
      items: ["Git / GitHub", "Figma", "Notion", "VSCode", "Eclipse", "STS"],
    },
  ],

  projects: [
    {
      name: "zipDDak · 집수리 통합 플랫폼",
      desc: "자재 구매, 공구 대여, 전문가 견적 매칭, 시공 요청을 하나의 플랫폼에서 처리하는 집수리 통합 서비스",
      stack: ["React", "Java", "Spring Boot", "MariaDB", "JWT", "WebSocket", "Toss Payments"],
      role: "자재 판매자 관리자 화면 전담 / 팀 4인 · 8주",
      result: "상품 CRUD·주문·반품 상태 흐름 전담, 기간별 매출 집계 쿼리 설계",
      github: "https://github.com/gynlee0904",
      demo: "",
    },
    {
      name: "Amara Dazzle · 화장품 판매 플랫폼",
      desc: "피부타입·퍼스널 컬러 기반 맞춤 상품 추천과 타겟 이메일 마케팅이 가능한 뷰티 브랜드 전용 쇼핑몰",
      stack: ["HTML / CSS / JS", "Java", "Servlets & JSP", "MyBatis", "MariaDB", "Toss Payments"],
      role: "플랫폼 관리자 화면 전담 / 팀 4인 · 8주",
      result: "Listener·Batch 기반 자동 정산 처리 구현, 관리자 통계 대시보드 구축",
      github: "https://github.com/gynlee0904",
      demo: "",
    },
    {
      name: "ERP 생산 관리 시스템",
      desc: "재고 입출고·BOM(자재 명세서) 기반 생산 계획 및 거래처 관리를 지원하는 웹 ERP 시스템",
      stack: ["Thymeleaf", "Java", "Spring Boot", "MyBatis", "Oracle", "Docker", "GCP"],
      role: "입출고·재고 관리 파트 / 팀 3인 · 8주",
      result: "FIFO 재고 차감 로직 설계, 창고 출납 이력 트랜잭션 처리 구현",
      github: "https://github.com/gynlee0904",
      demo: "",
    },
    {
      name: "Realty · 부동산 사이트",
      desc: "매물 정보 제공, 모델하우스 방문 예약, 분양 상담 신청 기능을 갖춘 부동산 플랫폼 (개인 프로젝트)",
      stack: ["HTML / CSS / JS", "Java", "Spring", "MyBatis", "MySQL"],
      role: "백엔드 전담 / 1인 개발 · 4주",
      result: "카카오 로그인 연동, 방문예약·상담 신청 프로세스 전체 구현",
      github: "https://github.com/gynlee0904",
      demo: "",
    },
  ],

  about: [
    "문제를 끝까지 이해하고 <strong>팀과 함께 성장</strong>하는 풀스택 개발자입니다.",
    "이해한 내용을 공유하며 팀의 판단에 기여하고, 사용자 경험을 기준으로 흐름을 설계합니다. 배운 것을 나누며 함께 성장하는 개발 환경을 중요하게 생각합니다.",
    "사용자 관점에서 흐름을 고민하고 <strong>결과를 신뢰할 수 있는 로직</strong>을 생각하며 개발합니다. 복잡한 역할 구조와 상태 흐름을 정확하게 설계하는 것을 즐깁니다.",
  ],

  contact: {
    email: "giyunlee01@gmail.com",
    github: "https://github.com/gynlee0904",
    linkedin: "",
  },
};
