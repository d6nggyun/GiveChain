# 💎 GiveChain - Web3 기반 투명 기부 플랫폼

> **GiveChain**은 스마트 컨트랙트를 기반으로 기부 내역을 온체인에 기록하고,  
> 오프체인 서버에서 랭킹 및 배지 발급 로직을 관리하는 Web3 기부 플랫폼입니다.

---

## 📌 프로젝트 소개

GiveChain은 기부의 투명성과 참여 동기를 동시에 강화하기 위해 설계된 플랫폼입니다.

- 기부 내역은 **블록체인에 기록**하여 누구나 검증 가능하도록 구성
- 랭킹, 통계, 배지 발급은 **백엔드 서버에서 관리**
- 온체인 상태와 오프체인 비즈니스 로직을 분리한 구조

Frontend(Next.js) – Backend(Spring Boot) – Smart Contract(Solidity)가  
유기적으로 연결되는 **Web3 기반 풀스택 프로젝트**입니다.

---

## 📱 자료

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/af1c2b7f-bce1-480b-a548-c7d235483102" width="450"/>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/82e92e5f-d4f2-4913-bbff-57d8db122951" width="450"/>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/21720de5-34c5-4d5a-97cc-0e0fdc5b6130" width="450"/>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/7cbb006f-3619-46f9-8b06-17456ab037d7" width="450"/>
    </td>
  </tr>
  <tr>
    <td align="center" colspan="2">
      <img src="https://github.com/user-attachments/assets/321e012d-2d2e-4662-83d6-11aecfd8662c" width="450"/>
    </td>
  </tr>
</table>

---

## 🏗 시스템 아키텍처

<img width="2290" height="1162" alt="architecture" src="https://github.com/user-attachments/assets/b701161a-d9f4-4984-b5e5-81a77611f966" />

---

## ⚙️ 주요 기능

| 기능 | 설명 |
|------|------|
| 🔐 Web3 인증 | Web3Auth 기반 소셜 로그인 → 지갑 자동 생성 |
| 💸 온체인 기부 | Sepolia 네트워크에서 스마트 컨트랙트 호출 |
| 🔎 기부 내역 조회 | 트랜잭션 해시 기반 Etherscan 조회 |
| 🏆 랭킹 시스템 | 국가/분야별 기부 랭킹 집계 |
| 🏅 배지 NFT 발급 | ERC-1155 기반 Soulbound 배지 발급 |
| 🌐 IPFS 메타데이터 | Pinata 기반 NFT 메타데이터 업로드 |
| 🔄 온체인–오프체인 연동 | 스마트 컨트랙트 상태와 서버 로직 분리 |

---

## 🔎 핵심 기술 설계 및 문제 해결

### 1️⃣ 분산 환경에서의 요청 흐름 설계

프론트엔드–백엔드–블록체인이 연결되는  
**다단계 요청 구조**를 직접 설계 및 구현했습니다.

#### 구현 내용

- 클라이언트 → 백엔드 → 블록체인으로 이어지는 요청 흐름 구성
- 트랜잭션 요청 → 서버 검증 → 컨트랙트 호출 → txHash 반환 → UI 반영
- 온체인 기부 데이터와 오프체인 랭킹 데이터를 결합하여 단일 API 응답 제공

#### 결과

✔ 단일 API 서버를 넘어 외부 상태 시스템과 연동되는 구조 설계 경험  
✔ 데이터 흐름 중심의 API 설계 역량 강화  
✔ 프론트엔드–백엔드–외부 네트워크 역할 분리 구조 확립  

---

### 2️⃣ Web3j 기반 온체인 트랜잭션 생성 및 서명 처리

스마트 컨트랙트의 `mintBadge()` 함수를  
백엔드에서 직접 호출하기 위해 Web3j 기반 트랜잭션 생성 로직 구현

#### 구현 내용

- ABI 기반 Function 정의 및 인코딩
- RawTransaction 생성
- ChainId 기반 EIP-155 서명
- `eth_sendRawTransaction` 직접 전송

#### 결과

✔ 서버에서 NFT 발급 트랜잭션 직접 생성 및 전송 구조 확립  
✔ 블록체인 트랜잭션 처리 흐름에 대한 이해 확보  
✔ 외부 네트워크와의 통신 구조 설계 경험  

---

## 🛠 기술 스택

| 영역 | 기술 |
|------|------|
| Backend | Spring Boot |
| Database | MySQL |
| Blockchain | Solidity, Web3j |
| Frontend | Next.js, TypeScript |
| Infra | Docker, EC2, Caddy |
| Storage | Amazon S3 |
| IPFS | Pinata |
| Auth | Web3Auth |

---

## 📈 프로젝트 성과

- 인천 블록체인 칼리지 팀프로젝트 **대상 수상**
- Web3 기반 기부 플랫폼 MVP 구현 및 배포
- 온체인 트랜잭션 → 서버 검증 → UI 반영까지 전체 흐름 정상 동작
- 풀스택 구현을 통한 시스템 전체 구조 이해
