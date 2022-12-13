import bannerico from "./assets/p1.jpg";
import gamepics from "./assets/p4.jpg";
import freefire from "./assets/p3.jpg";
const games=[{
    id:1,
    name:"Elena",
    image:gamepics,
    Message:"hello friend",
    youtube:"https://www.youtube.com/embed/sUKwTVAc0Vo",
    popular:true
   

},{id:2,
    name:"anduti",
    image:freefire,
    Message:"give me your pubg id",
    youtube:"https://www.youtube.com/embed/sUKwTVAc0Vo",
    popular:true

},
{
    id:3,
    name:"michel",
    image:bannerico,
    Message:"i sent you my instagram",
    youtube:"https://www.youtube.com/embed/sUKwTVAc0Vo",
    popular:false,
}
]
export function getusers() {
    return games;
  }