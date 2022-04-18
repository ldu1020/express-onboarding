/**
 * 유저 정보
 * @typedef {object} User
 * @property {string} name - 이름 - min-length: 2, max-length: 8
 * @property {string} nickname - 닉네임 - min-length: 2, max-length: 8
 * @property {string} email - 이메일 - format: "xxxx@xxx.xxx"
 * @property {string} profileImage - 프로필 이미지 - base64
 * @property {string} phone - 핸드폰 번호 - format: "/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/"
 */

/**
 * Error Type 400
 * @typedef {object} Error400
 * @property {string} message - 에러 메세지
 */
