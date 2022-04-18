import "express-async-errors";
import express from "express";
import { body } from "express-validator";
import { validate } from "../middlewares/validator";
import * as userController from "../controllers/user";

const router = express.Router();

const validateUserInfo = [
    body("name")
        .trim()
        .isLength({ min: 2, max: 8 })
        .withMessage("이름은 최소 2자 최대 8자를 입력해 주세요.")
        .optional({ nullable: true, checkFalsy: true }),
    body("nickname")
        .trim()
        .isLength({ min: 2, max: 8 })
        .withMessage("닉네임은 최소 2글자 최대 8자를 입력해 주세요.")
        .optional({ nullable: true }),

    body("phone")
        .trim()
        .custom(str => {
            const phoneRgx = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
            return phoneRgx.test(str);
        })
        .withMessage("올바르지 않은 휴대폰 형식입니다.")
        .optional({ nullable: true }),
    body("email")
        .trim()
        .isEmail()
        .withMessage("올바르지 않은 이메일 형식입니다.")
        .optional({ nullable: true }),
    body("profileImage") //
        .trim()
        .isBase64()
        .withMessage("올바르지 않은 이미지 포맷입니다.")
        .optional({ nullable: true }),
    validate,
];

/**
 * GET /user/info
 * @summary This is the summary of the endpoint
 * @tags User
 * @return {User} 200 - success response
 * @example response - 200 - example success response
 * {
 *    "name": "아무개",
 *    "nickname": "Amugae2232",
 *    "phone": "01000000000",
 *    "email": "amugae1101@gmail.com",
 *    "profileImage": "data"
 * }
 */
router.get("/info", userController.getUser);

/**
 * PUT /user/info
 * @summary This is the summary of the endpoint
 * @tags User
 * @param {User} request.body - user info
 * @return {User} 200 - success response
 * @return {Error400} 400 - bad request
 * @example request - other payload example
 * {
 *    "name": "새로운이름",
 *    "email": "newEmail@gmail.com"
 *  }
 * @example response - 200 - example success response
 * {
 *    "name": "새로운이름",
 *    "nickname": "Amugae2232",
 *    "phone": "01000000000",
 *    "email": "newEmail@gmail.com",
 *    "profileImage": "data:image/png;base64,iVBORw0KGgo"
 *  }
 * @example response - 400 - example error response
 * {
 *   "message": "올바르지 않은 휴대폰 형식입니다."
 * }
 */
router.put("/info", validateUserInfo, userController.updateUser);

export default router;
