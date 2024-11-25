import React from "react";
import { FaSearch } from "react-icons/fa";
import PalImage from "../components/assets/gyeongbokgung palace night 3.jpg";
import PalImage2 from "./assets/changdeokgung.jpg"

const Sidebar = () => {
  return (
    <div
      style={{
        width: "25%", // 사이드바 너비 설정
        height: "100vh", // 전체 화면 높이
        backgroundColor: "#343a40", // 배경색
        color: "#fff", // 텍스트 색상
        padding: "20px", // 내부 여백
        boxSizing: "border-box", // 테두리와 패딩 포함 크기 계산
        position: "fixed", // 화면에 고정
        top: "4rem", // 상단 여백 포함
        left: 0, // 화면 왼쪽에 맞춤
        overflowY: "auto", // 스크롤 활성화
      }}
    >
      {/* 검색창 추가 */}
      <div style={{ marginBottom: "20px", display: "flex" }} className="items-center">
        <input
          type="text"
          placeholder="검색어를 입력해주세요."
          style={{
            width: "80%", // 입력 필드가 사이드바 너비를 채움
            padding: "10px",
            borderRadius: "5px", // 둥근 모서리
            border: "none",
            outline: "none",
            fontSize: "16px",
            color: "black"
          }}
        />
         <button
    className="border-solid border-2 p-1.5 ml-2 hover:bg-black"
    style={{
      height: "40px", // input 높이와 동일하게 설정
      padding: "20px", // 동일한 내부 여백
      borderRadius: "5px", // 둥근 모서리
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <FaSearch className="text-2xl" />
  </button>
        
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ margin: "10px 0" }}>
          <a href="#menu1" style={{ color: "#fff", textDecoration: "none" }}>
            <img src={PalImage} alt="" className="rounded-md" />
          </a>
        </li>
        <li style={{ margin: "10px 0" }}>
          <h3
            style={{
              color: "#fff",
              textDecoration: "none",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            근정전(勤政殿)은 경복궁의 정전으로 왕의 즉위식, 신하들의 하례, 외국 사신의 접견, 궁중연회 등 중요한 국가행사를 치르던 곳이다. 근정전은 궁궐 내에서도 가장 규모가 크고 격식을 갖춘 건물로 면적도 가장 넓게 차지하고 있다. 근정전 앞마당은 다른 궁궐의 정전과 같이 박석이 깔려있고, 중앙에는 삼도(三道)를 두어 궁궐의 격식을 갖추었으며 조정에는 품계석을 놓았다.
          </h3>
        </li>
<li style={{ margin: "10px 0" }}>
            <a href="#menu1" style={{ color: "#fff", textDecoration: "none" }}>
            <img src={PalImage2} alt="" className="rounded-md" />
          </a>
            
        </li>
        
         <li style={{ margin: "10px 0" }}>
          <h3
            style={{
              color: "#fff",
              textDecoration: "none",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            조선 - 대한제국 시대의 궁궐. 서울특별시 종로구 율곡로 99 (와룡동)에 있다. 지번주소로는 서울특별시 종로구 와룡동 2-71이다. 경복궁이 상징적인 정궁이라면 창덕궁은 실질적인 정궁이었다. 조선 정사 대부분이 창덕궁에서 일어났다.
대한민국의 사적으로 지정되었으며[4] 1997년 12월 4일 이탈리아 나폴리에서 개최된 제21차 세계유산위원회(World Heritage Committee)[5]에서 유네스코 세계유산으로 등재되었다
          </h3>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
