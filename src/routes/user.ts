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
        .withMessage("올바르지 않은 이메일 포맷입니다.")
        .optional({ nullable: true }),
    validate,
];

/**
 * @openapi
 * /user/info:
 *   get:
 *     description: 유저 정보 가져오기
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get("/info", userController.getUser);

/**
 * @openapi
 * /user/info:
 *   put:
 *     tags: [User]
 *     description: 유저 정보 수정하기
 *     parameters:
 *       - name: requestBody
 *         in: body
 *         description: User's name.
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.put("/info", validateUserInfo, userController.updateUser);

export default router;
