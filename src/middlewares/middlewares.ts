import rateLimit from "express-rate-limit";


export const setRateLimitServer = (minutes: number) => {
    const seconds = 60;
    const miliseconds = 1000;

    const rateLimitConfig = rateLimit({
        windowMs: minutes * seconds * miliseconds,
        max: 100,
        message:
            "Muitas requisições foram solicitadas nesse IP, por favor, aguarde 3 minutos",
    });

    return rateLimitConfig;
};
