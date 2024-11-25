import React, { useRef, useEffect, useState } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

const Map = () => {
  const mapRef = useRef(null); // 지도 DOM 요소를 참조
  const [mapInstance, setMapInstance] = useState(null); // 맵 인스턴스 저장
  const [userLocation, setUserLocation] = useState(null); // 사용자 위치 저장

  // 현재 위치 가져오기
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error fetching location:", error);
          alert("위치 정보를 가져올 수 없습니다.");
        }
      );
    } else {
      alert("Geolocation은 이 브라우저에서 지원되지 않습니다.");
    }
  }, []);

  // 지도 초기화
  useEffect(() => {
    if (mapRef.current && window.google && !mapInstance) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 37.5665, lng: 126.978 }, // 서울 좌표 (기본값)
        zoom: 16,
      });
      setMapInstance(map); // 맵 인스턴스 저장
    }
  }, [mapRef, mapInstance]);

  // 사용자 위치 마커 추가
  useEffect(() => {
    if (mapInstance && userLocation) {
      // 맵의 중심을 사용자 위치로 이동
      mapInstance.setCenter(userLocation);

      // 사용자 위치에 마커 추가
      new window.google.maps.Marker({
        position: userLocation,
        map: mapInstance,
        title: "내 위치",
      });
    }
  }, [mapInstance, userLocation]);

  return (
    <div
      ref={mapRef}
      style={{
        height: "100vh", // 전체 화면 높이
        width: "75%", // 화면의 70% 너비
        position: "absolute", // 위치 설정
        right: 0, // 오른쪽 정렬
        top: 0, // 상단 정렬
        marginTop: "4rem",
        overflow: "hidden" //스크롤 방지
      }}
    />
  );
};

const App = () => {
  return (
    <Wrapper apiKey={"AIzaSyAvOzbuZJPnUkTr96yMgT-FY1GhmC4KKao"}>
      {" "}
      <Map />
    </Wrapper>
  );
};

export default App;
