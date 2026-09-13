import { Suspense } from "react";
import Headers from "./Comonent/Header";
import Nev from "./Comonent/Nev";
import Tecnologi from "./Comonent/Tecnologi";
import Footer from "./Comonent/Footer";
import "./index.css";
import type { DataType } from "./Type";

const dataPromis = async (): Promise<DataType[]> => {
  const res = await fetch("/data.json");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: DataType[] = await res.json();

  return data;
};

function App() {
  return (
    <>
      <Nev />

      <Headers />

      <Suspense fallback={<p>Loading....</p>}>
        <Tecnologi dataPromis={dataPromis()} />
      </Suspense>

      <Footer />
    </>
  );
}

export default App;