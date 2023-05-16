import { Client } from "boardgame.io/react"
import { BangGame } from "../Game/BangGame"

const BangClient = Client({
  game: BangGame
});

export const TestClient = () => {
  return (
    <BangClient/>
  )
}