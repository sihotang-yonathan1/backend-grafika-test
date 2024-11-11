import { Hono } from "hono";

export const hargaIkan = new Hono()

// TODO: extract into some files
hargaIkan.get('/', (c) => {
  return c.json({
    hello: "world"
  })
})

hargaIkan.post('/', (c) => {
  return c.json({
    "hello": "post"
  })
})

hargaIkan.patch('/', (c) => {
  return c.json({
    "hello": "patch"
  })
})

hargaIkan.delete('/', (c) => {
  return c.json({
    "hello": "delete"
  })
})