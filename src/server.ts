import app from './app';
import config from './config/config';
import logger from './utils/logger';

const server = app.listen(config.PORT, () => {
    logger.info(`Server running on http://localhost:${config.PORT}`);
});

// Graceful shutdown & error handling
(() => {
    try {
        process.on('uncaughtException', (error) => {
            logger.error('Uncaught Exception:', error);
            server.close(() => process.exit(1));
        });

        process.on('unhandledRejection', (reason) => {
            logger.error('Unhandled Rejection:', reason);
            server.close(() => process.exit(1));
        });

        process.on('SIGTERM', () => {
            logger.info('SIGTERM received. Shutting down gracefully...');
            server.close(() => process.exit(0));
        });
    } catch (error) {
        logger.error('Fatal error during startup:', error);
        process.exit(1);
    }
})();
