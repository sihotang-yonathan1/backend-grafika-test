import { Hono } from "hono";

export const perkiraanCuaca = new Hono()

// TODO: extract into some files
perkiraanCuaca.get('/', (c) => {
  return c.json({
    hello: "world"
  })
})

perkiraanCuaca.post('/', (c) => {
  return c.json({
    "hello": "post"
  })
})

perkiraanCuaca.patch('/', (c) => {
  return c.json({
    "hello": "patch"
  })
})

perkiraanCuaca.delete('/', (c) => {
  return c.json({
    "hello": "delete"
  })
})