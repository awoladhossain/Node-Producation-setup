import { Request, Response } from 'express';
import config from '../config/config';
import { EApplicationEnvironment } from '../constant/application';
import { THttpResponse } from '../types/types';

export default (req: Request, res: Response, responseStatusCode: number, responseMessage: string, data: unknown = null): void => {
    const response: THttpResponse = {
        success: true,
        statusCode: responseStatusCode,
        request: {
            ip: req.ip || null,
            method: req.method,
            url: req.originalUrl
        },
        message: responseMessage,
        data: data
    };

    // log
    // console.info(`Controller_Response`, {
    //     meta: response
    // });
    if (config.ENV === EApplicationEnvironment.Production) {
        delete response.request.ip;
    }
    res.status(responseStatusCode).json(response);
};
