import { Hono } from "hono";

export const login = new Hono()

login.post('/login', (c) => {
    return c.text("Login - POST")
})