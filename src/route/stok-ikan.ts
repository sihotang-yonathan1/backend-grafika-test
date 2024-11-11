import { Hono } from "hono";

export const stokIkan = new Hono()

// TODO: extract into some files
stokIkan.get('/', (c) => {
  return c.json({
    hello: "world"
  })
})

stokIkan.post('/', (c) => {
  return c.json({
    "hello": "post"
  })
})

stokIkan.patch('/', (c) => {
  return c.json({
    "hello": "patch"
  })
})

stokIkan.delete('/', (c) => {
  return c.json({
    "hello": "delete"
  })
})