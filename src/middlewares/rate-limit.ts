import { RateLimiterMemory } from "rate-limiter-flexible";


export const rateLimiter = new RateLimiterMemory(
    {
        points: 8,
        duration: 2,
    });