import { Hono } from "hono";

export const lokasi = new Hono()

// TODO: extract into some files
lokasi.get('/', (c) => {
  return c.json({
    hello: "world"
  })
})

lokasi.post('/', (c) => {
  return c.json({
    "hello": "post"
  })
})

lokasi.patch('/', (c) => {
  return c.json({
    "hello": "patch"
  })
})

lokasi.delete('/', (c) => {
  return c.json({
    "hello": "delete"
  })
})