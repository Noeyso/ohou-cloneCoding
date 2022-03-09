import React, { useCallback, useEffect, useState } from "react";
import styles from "./header.module.css";
import LogoImg from "../../common/images/logoImg.png";
import { RiSearchLine } from "react-icons/ri";
import { BsCart } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import SubHeader from "./subHeader/subHeader";
import { community, interior, store } from "./itemData";

function Header() {
  const [clickIdx, setClickIdx] = useState(0);
  const [hovIdx, setHovIdx] = useState(0);
  const [subMenu, setSubMenu] = useState(community);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    switch (hovIdx) {
      case 0:
        setSubMenu(community);
        break;
      case 1:
        setSubMenu(store);
        break;
      case 2:
        setSubMenu(interior);
        break;
      default:
        setSubMenu(community);
    }
  }, [hovIdx]);

  function updateScroll() {
    console.log(`scrollTop: ${document.documentElement.scrollTop}`);
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  useEffect(() => {
    scrollPosition < 50 ? setIsScroll(false) : setIsScroll(true);
    window.addEventListener("scroll", updateScroll);
  });

  function clickMenu(num: number) {
    setClickIdx(num);
  }
  function mouseEnter(num: number) {
    setHovIdx(num);
  }
  function mouseLeave() {
    setHovIdx(clickIdx);
  }

  return (
    <header className={styles.container}>
      <div className={styles.header_top}>
        <div className={styles.top_container}>
          <div className={styles.nav__logo}>
            <img className={styles.logo} src={LogoImg} alt="logo" />
          </div>
          <nav className={styles.nav__menu}>
            <ul className={styles.menu}>
              <li
                className={
                  clickIdx === 0
                    ? `${
                        hovIdx === 0 && !isScroll
                          ? `${styles.menu_item} ${styles.menu_item_clicked} ${styles.menu_item_hovered}`
                          : `${styles.menu_item} ${styles.menu_item_clicked}`
                      }`
                    : `${
                        hovIdx === 0 && !isScroll
                          ? `${styles.menu_item} ${styles.menu_item_hovered}`
                          : styles.menu_item
                      }`
                }
                onClick={() => clickMenu(0)}
                onMouseEnter={() => mouseEnter(0)}
                onMouseLeave={mouseLeave}
              >
                커뮤니티
              </li>
              <li
                className={
                  clickIdx === 1
                    ? `${
                        hovIdx === 1 && !isScroll
                          ? `${styles.menu_item} ${styles.menu_item_clicked} ${styles.menu_item_hovered}`
                          : `${styles.menu_item} ${styles.menu_item_clicked}`
                      }`
                    : `${
                        hovIdx === 1 && !isScroll
                          ? `${styles.menu_item} ${styles.menu_item_hovered}`
                          : styles.menu_item
                      }`
                }
                onClick={() => clickMenu(1)}
                onMouseEnter={() => mouseEnter(1)}
                onMouseLeave={mouseLeave}
              >
                스토어
              </li>
              <li
                className={
                  clickIdx === 2
                    ? `${
                        hovIdx === 2 && !isScroll
                          ? `${styles.menu_item} ${styles.menu_item_clicked} ${styles.menu_item_hovered}`
                          : `${styles.menu_item} ${styles.menu_item_clicked}`
                      }`
                    : `${
                        hovIdx === 2 && !isScroll
                          ? `${styles.menu_item} ${styles.menu_item_hovered}`
                          : styles.menu_item
                      }`
                }
                onClick={() => clickMenu(2)}
                onMouseEnter={() => mouseEnter(2)}
                onMouseLeave={mouseLeave}
              >
                인테리어시공
              </li>
            </ul>
          </nav>
          <div className={styles.nav__end}>
            <form className={styles.form}>
              <input className={styles.input} placeholder="오늘의집 통합검색" />
              <button className={styles.search}>
                <RiSearchLine size="1.3rem" color="#757575" />
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
      </div>
      <div
        className={
          scrollPosition < 50 ? styles.sub_header : styles.sub_header_hide
        }
      >
        <SubHeader menu={subMenu} />
      </div>
    </header>
  );
}

export default Header;
