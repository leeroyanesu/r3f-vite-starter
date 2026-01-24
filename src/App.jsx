import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Perf } from "r3f-perf";
import { Leva } from "leva";

function App() {
  return (
    <>
      <Leva collapsed={true} />
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <Perf position="top-left" />
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
