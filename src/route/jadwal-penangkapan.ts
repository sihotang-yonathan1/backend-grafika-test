import { Hono } from "hono";

export const jadwalPenangkapan = new Hono()

// TODO: extract into some files
jadwalPenangkapan.get('/', (c) => {
  return c.json({
    hello: "world"
  })
})

jadwalPenangkapan.post('/', (c) => {
  return c.json({
    "hello": "post"
  })
})

jadwalPenangkapan.patch('/', (c) => {
  return c.json({
    "hello": "patch"
  })
})

jadwalPenangkapan.delete('/', (c) => {
  return c.json({
    "hello": "delete"
  })
})