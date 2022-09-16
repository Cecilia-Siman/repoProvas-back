import { Request, Response, NextFunction } from "express";
export default function errorHandler(error, req: Request, res: Response, next: NextFunction) {
    if (error.code === 'Not Found') {
        res.status(404).send(error.message);
    }
    if (error.code === 'Not Valid') {
        res.status(412).send(error.message);
    }
    if (error.code === 'Unauthorized') {
        res.status(401).send(error.message);
    }
    if (error.code === 'Bad request') {
        res.status(400).send(error.message);
    }
}