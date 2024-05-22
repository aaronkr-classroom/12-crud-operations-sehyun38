// homeController.js
"use strict";

/**
 * Listing 18.7 (p. 266)
 * homeController.js에서의 액션 수정
 */
module.exports = {
  // 모든 컨트롤러 액션과 함께 객체 리터럴 익스포트
  /*
   * @TODO: showHome와 showTransportation 액션을 객체 리터럴로 묶어 익스포트
   */
  showHome : (req, res) => {
    res.render("index");
  },
  // 특정 라우트를 위한 콜백 함수 추가
  showTransportation : (req, res) => {
    res.render("transportation");
  }
};
