import React, { useRef } from "react";
import "./PartnersSection.css";

const partners = [
  {
    logo: "/assets/partner1.png",
    name: "행복한사람들",
    description: "행복한 날, 행복한 사람들과 함께하는 특별한 날을 선사합니다.",
  },
  {
    logo: "/assets/partner2.png",
    name: "바른연결 실천연대",
    description: "바른연결 정직으로 아름다운 사회를 만들어 갑니다.",
  },
  {
    logo: "/assets/partner3.png",
    name: "아르티안",
    description: "설레임이 사회적, 놀이문화로 재현되는 상생 아트콜라보 프로젝트.",
  },
  {
    logo: "/assets/partner4.png",
    name: "대한민국육아위원회",
    description: "아이의 행복을 위한 연대, 육아에 함께 합니다.",
  },
  // Add more as needed
];

const PartnersSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="partners-wrapper">
      <article className="partners-inner">
        <div className="scroll-container">
            <button className="scroll-btn left" onClick={() => scroll("left")}>◀</button>
            <button className="scroll-btn right" onClick={() => scroll("right")}>▶</button>

            <div className="partners-scroll" ref={scrollRef}>
            {partners.map((partner, index) => (
                <div className="partner-card" key={index}>
                <img src={partner.logo} alt={partner.name} className="partner-logo" />
                <h4>{partner.name}</h4><br />
                <p>{partner.description}</p>
                </div>
            ))}
            </div>
        </div>
      </article>
    </section>
  );
};

export default PartnersSection;
