import React from "react";
import styles from "./footer.module.css";
import {
  FaApple,
  FaGooglePlay,
  FaFacebookF,
  FaInstagram,
  FaExclamation,
  FaCommentAlt,
  FaHamburger,
} from "react-icons/fa";
function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        <section className={styles.top}>
          <div className={styles.customer_center}>
            <a>고객센터 {">"} </a>
            <span className={styles.call}>1670-0876</span>
            <span className={styles.hours}>
              평일 09:00 ~ 18:00 (주말 & 공휴일 제외)
            </span>
          </div>
          <div>
            <ul className={styles.icons}>
              <li>
                <FaApple fontSize="1.5rem" />
              </li>
              <li>
                <FaGooglePlay fontSize="1.5rem" />
              </li>
              <li>
                <FaExclamation fontSize="1.5rem" color="#757575" />
              </li>
              <li>
                <FaFacebookF fontSize="1.5rem" color="#757575" />
              </li>
              <li>
                <FaInstagram fontSize="1.7rem" color="#757575" />
              </li>

              <li>
                <FaCommentAlt fontSize="1.3rem" color="#757575" />
              </li>
              <li>
                <FaHamburger fontSize="1.3rem" color="#757575" />
              </li>
            </ul>
          </div>
        </section>
        <section className={styles.shortcut}>
          <ul className={styles.shortcut_list}>
            <li>
              <a href={"/"}>브랜드 스토리</a>
            </li>
            <li>
              <a href={"/"}>회사소개</a>
            </li>
            <li>
              <a href={"/"}>채용정보</a>
            </li>
            <li>
              <a href={"/"}>이용약관</a>
            </li>
            <li>
              <a href={"/"}>개인정보처리방침</a>
            </li>
            <li>
              <a href={"/"}>공지사항</a>
            </li>
            <li>
              <a href={"/"}>고객센터</a>
            </li>
            <li>
              <a href={"/"}>고객의 소리</a>
            </li>
            <li>
              <a href={"/"}>전문가 등록</a>
            </li>
            <li>
              <a href={"/"}>사업자 구매회원</a>
            </li>
            <li>
              <a href={"/"}>제휴/광고 문의</a>
            </li>
            <li>
              <a href={"/"}>입점신청 문의</a>
            </li>
          </ul>
        </section>
        <address className={styles.info_wrap}>
          <dl className={styles.info}>
            <a href="http://bucketplace.co.kr/">
              <dt>상호명 : </dt>
              <dd>(주)버킷플레이스</dd>
            </a>
            <span>
              <dt>이메일 : </dt>
              <dd>
                (고객문의){" "}
                <a href="mailto:cs@bucketplace.net"> cs@bucketplace.net </a>
                (제휴문의){" "}
                <a href="mailto:contact@bucketplace.net">
                  contact@bucketplace.net
                </a>
              </dd>
            </span>
            <span>
              <dt>대표이사 :</dt>
              <dd>이승재</dd>
            </span>
            <span>
              <dt>사업자등록번호 :</dt>
              <dd>119-86-91245</dd>
            </span>
            <span>
              <dt>통신판매업신고번호 :</dt>
              <dd>
                제2018-서울서초-0580호 <b>사업자정보확인</b>
              </dd>
            </span>
          </dl>
          <dl className={styles.info}>
            <span>
              <dt>주소 : </dt>
              <dd>서울 서초구 서초대로74길 4 삼성생명서초타워 25, 27층</dd>
            </span>
            <span>
              <dt>우리은행 채무지급보증안내 : </dt>
              <dd>
                (주)버킷플레이스는 고객님이 현금결제한 금액에 대해 우리은행과
                채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다.{" "}
                <b>서비스가입사실 확인</b>
              </dd>
            </span>
          </dl>
          <span className={styles.info}>
            오늘의집은 개별 판매자가 상품을 판매하는 오픈마켓이며
            (주)버킷플레이스는 통신판매중개자로 거래 당사자가 아니므로, 판매자가
            등록한 상품정보 및 거래 등에 대해 일체 책임을 지지 않습니다.
            <br />단 ㈜버킷플레이스가 판매자로 등록 판매한 상품의 경우는
            판매자로서 책임을 부담합니다.
          </span>
        </address>
        <p className={styles.copyright}>
          Copyright 2014. bucketplace, Co., Ltd. All rights reserved
        </p>
        <div className={styles.certification}>
          <img
            src="http://www.eland.co.kr/wp-content/uploads/2020/01/notice_2019_800_isms.jpg"
            alt="isms"
          />
          <div>
            <span>오늘의집 서비스 운영</span>
            <span>2021.09/08 ~ 2024.09.07</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
