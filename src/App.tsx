
import { Suspense } from 'react'
import Headers from './Comonent/Header'


import Nev from './Comonent/Nev'
import Tecnologi from './Comonent/Tecnologi'
import './index.css'
import type { DataType } from './Type'
import Footer from './Comonent/Footer'

 const dataPromis =async():Promise<DataType> =>{
    const res = await fetch('/public/data.json') ;
    const data = await res.json();
    return data;

 }


function App() {

  return (
  <>
   <Nev></Nev>

   <Headers></Headers>

   <Suspense fallback={<p> Loding....</p>}>

   <Tecnologi dataPromis={dataPromis()} ></Tecnologi>
   </Suspense>
   <Footer></Footer>
  </>
  )
}

export default App
