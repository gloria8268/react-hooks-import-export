import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import { trees as parkTrees, wildlife as parkWildlife } from "./parks/RockyMountain";
import * as RMFunctions from "./parks/RockyMountain"

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  console.log(parkTrees)
  console.log(RMFunctions.trees)
  parkWildlife()
  RMFunctions.wildlife()

  return (
    <div>
      <h1>Colorado State Parks!</h1>
      <MesaVerde />
    </div>
  )
}

export default ColoradoStateParks
