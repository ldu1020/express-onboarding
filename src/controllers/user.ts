import { NextFunction, Request, Response } from "express";
import * as UserRepository from "../data/user";

export async function getUser(req: Request, res: Response) {
    const data = await UserRepository.get();
    res.status(200).json(data);
}

export async function updateUser(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const updated = await UserRepository.update(req.body);
    res.status(200).json(updated);
}
