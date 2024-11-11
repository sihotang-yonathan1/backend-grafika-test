import { Hono } from 'hono'

// TODO: sort the import
import { 
  lokasi, 
  hargaIkan, 
  kapal, 
  jadwalPenangkapan,
  perkiraanCuaca,
  stokIkan,
  hasilPenangkapan
} from "./route/_index";
import { login } from './route/login';

const app = new Hono()
const api = app.basePath('/api')


app.get('/', (c) => {
  return c.text('Hello Hono!')
})


// Main route
api.route('/harga', hargaIkan)
api.route('/lokasi', lokasi)
api.route('/kapal', kapal)
api.route('/jadwal', jadwalPenangkapan)
api.route('/cuaca', perkiraanCuaca)
api.route('/stok', stokIkan)

// Route `/rekap` instead of `/hasil`
api.route('/rekap', hasilPenangkapan)

// Login
app.route('/', login)

export default app

