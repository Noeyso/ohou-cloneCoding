import React from "react";
import styles from "./header.module.css";
import Logo from "../../common/images/logo.png";
import Search from "../../common/images/search.png";
import { BsCart } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import SubHeader from "./subHeader/subHeader";
function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.header_top}>
        <div className={styles.nav__logo}>
          <img className={styles.logo} src={Logo} alt="logo" />
        </div>
        <nav className={styles.nav__menu}>
          <ul className={styles.menu}>
            <li className={styles.menu_item}>커뮤니티</li>
            <li className={styles.menu_item}>스토어</li>
            <li className={styles.menu_item}>인테리어시공</li>
          </ul>
        </nav>
        <div className={styles.nav__end}>
          <form className={styles.form}>
            <input className={styles.input} placeholder="오늘의집 통합검색" />
            <button>
              <img className={styles.search} src={Search} alt="search" />
            </button>
          </form>

          <button className={styles.cart_button}>
            <BsCart className={styles.cart} />
          </button>

          <ul className={styles.personal}>
            <li className={styles.personal_item}>로그인</li>
            <li className={styles.personal_item}>회원가입</li>
            <li className={styles.personal_item}>고객센터</li>
          </ul>

          <button className={styles.write}>
            글쓰기
            <IoIosArrowDown className={styles.arrowDown} />
          </button>
        </div>
      </div>
      <SubHeader
        menu={[
          "홈",
          "팔로잉",
          "사진",
          "집들이",
          "노하우",
          "전문가집들이",
          "셀프가이드",
          "질문과답변",
          "이벤트",
        ]}
      />
    </header>
  );
}

export default Header;
