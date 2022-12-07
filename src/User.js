import bannerico from "./assets/p1.jpg";
import gamepics from "./assets/p4.jpg";
import freefire from "./assets/p3.jpg";
const games=[{
    id:1,
    name:"Elena",
    image:gamepics,
    Message:"hello friend",
   

},{id:2,
    name:"anduti",
    image:freefire,
    Message:"give me your pubg id",

},
{
    id:3,
    name:"michel",
    image:bannerico,
    Message:"i sent you my instagram",
}
]
export function getusers() {
    return games;
  }