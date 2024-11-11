import { Hono } from "hono";

export const hasilPenangkapan = new Hono()

// TODO: extract into some files
hasilPenangkapan.get('/', (c) => {
  return c.json({
    hello: "world"
  })
})

hasilPenangkapan.post('/', (c) => {
  return c.json({
    "hello": "post"
  })
})

hasilPenangkapan.patch('/', (c) => {
  return c.json({
    "hello": "patch"
  })
})

hasilPenangkapan.delete('/', (c) => {
  return c.json({
    "hello": "delete"
  })
})