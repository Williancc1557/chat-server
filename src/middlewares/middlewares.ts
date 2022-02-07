import { RateLimiterMemory } from "rate-limiter-flexible";


export const rateLimiter = new RateLimiterMemory(
    {
        points: 3, // 5 points
        duration: 1, // per second
    });