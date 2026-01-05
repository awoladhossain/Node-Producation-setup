import dotenvFlow from 'dotenv-flow';
dotenvFlow.config();

export default {
    PORT: process.env.PORT,
    ENV: process.env.ENV,
    SERVER_URL: process.env.SERVER_URL,
    DATABASE_URL: process.env.DATABASE_URL
};
