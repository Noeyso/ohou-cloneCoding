import React from "react";
import styles from "./homeStory.module.css";
import Profile from "../../../../common/images/user.png";
function HomeStory() {
  return (
    <div className={styles.container}>
      <header>
        <h2>오늘의 스토리</h2>
      </header>
      <ul className={styles.list}>
        <li>
          <div className={styles.thumbnail}>
            <img
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/164266314464284036.jpg?gif=1&w=1536"
              alt="thumbnail"
            />
          </div>
          <div>
            <span className={styles.story_title}>숨어있는 화이트 원룸</span>
            <div className={styles.user}>
              <img
                className={styles.profile}
                src="https://i.pinimg.com/564x/5d/5b/99/5d5b99642de87fbdad3e5203c0378c3f.jpg"
                alt="profile"
              />
              <span>hey.place</span>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.thumbnail}>
            <img
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/164196086312051006.jpg?gif=1&w=2560"
              alt="thumbnail"
            />
          </div>
          <div>
            <span className={styles.story_title}>디자인한 단독주택 THE봄</span>
            <div className={styles.user}>
              <img
                className={styles.profile}
                src="https://i.pinimg.com/564x/10/33/cc/1033ccac4763aaf348146f9da9c31274.jpg"
                alt="profile"
              />
              <span>To데이</span>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.thumbnail}>
            <img
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/164058805281320015.jpg?gif=1&w=1536"
              alt="thumbnail"
            />
          </div>
          <div>
            <span className={styles.story_title}>
              확 바뀐 남향 화이트 40평대
            </span>
            <div className={styles.user}>
              <img className={styles.profile} src={Profile} alt="profile" />
              <span>디벨로퍼</span>
            </div>
          </div>
        </li>
        <li className={styles.menu}>
          <div className={styles.menu_entry}>
            <div className={styles.menu_text}>
              <span>예쁜 집 구경하기</span>
              <span>집들이</span>
            </div>
            <span>{">"}</span>
          </div>
          <div className={styles.menu_entry}>
            <div className={styles.menu_text}>
              <span>전문가 시공사례</span>
              <span>전문가 집들이</span>
            </div>
            <span>{">"}</span>
          </div>
          <div className={styles.menu_entry}>
            <div className={styles.menu_text}>
              <span>인테리어 꿀팁 총 집합</span>
              <span>노하우</span>
            </div>
            <span>{">"}</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default HomeStory;
