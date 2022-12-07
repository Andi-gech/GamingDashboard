import bannerico from "./assets/pubg.jpg";
import gamepics from "./assets/city.jpg";
import freefire from "./assets/callof duty.jpg";
const groups=[{
    id:1,
    name:"Team-1",
    image:gamepics,
    Message:"9 people online",
   

},{id:2,
    name:"warzon fighters",
    image:freefire,
    Message:"3 people online",

},
{
    id:3,
    name:"talk",
    image:bannerico,
    Message:"2 people online ",
}
]
export function getgroups() {
    return groups;
  }