import { Request, Response } from 'express';
export default {
    self: (req: Request, res: Response) => {
        try {
            res.sendStatus(200);
        } catch (error) {
            res.sendStatus(500);
        }
    }
};
