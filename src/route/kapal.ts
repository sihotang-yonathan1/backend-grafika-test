import { Hono } from "hono";

export const kapal = new Hono()

// TODO: extract into some files
kapal.get('/', (c) => {
  return c.json({
    hello: "world"
  })
})

kapal.post('/', (c) => {
  return c.json({
    "hello": "post"
  })
})

kapal.patch('/', (c) => {
  return c.json({
    "hello": "patch"
  })
})

kapal.delete('/', (c) => {
  return c.json({
    "hello": "delete"
  })
})