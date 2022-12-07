import bannerico from "./assets/gamepic1.jpg";
import gamepics from "./assets/eldering.jpg";
import freefire from "./assets/freefire.jpg";
const games=[{
    id:1,
    name:"eldering",
    image:gamepics,
    size:"70gb",
    details:"the Elden Ring pc specs of a GeForce GTX 660 or an Radeon HD 7850 GPU you can ensure your gaming experience is free from stuttering or crashing. However to experience Elden Ring the developers intended, your computer should meet the system recommended requirements of a GTX 1070 or an Radeon RX Vega 56 GPU to ensure a flawless rendition of the games",
    cpu:"Intel Core i5-8400 | AMD Ryzen 3 3300X",
    ram:" 12 GB",
    SPACE:"74 GB",
    VIDEOCARD:"Nvidia GeForce GTX 1060, 3GB | AMD Radeon RX 580, 4GB",
    link:"http://google.com/andi"

},{
    id:2,
    name:"freefire",
    image:freefire,
    size:"2gb",
    details:"the freefire pc specs of a GeForce GTX 660 or an Radeon HD 7850 GPU you can ensure your gaming experience is free from stuttering or crashing. However to experience Elden Ring the developers intended, your computer should meet the system recommended requirements of a GTX 1070 or an Radeon RX Vega 56 GPU to ensure a flawless rendition of the games",
    cpu:"Intel Core i3-8400 | AMD Ryzen 3 3300X",
    ram:" 4 GB",
    SPACE:"2gb",
    VIDEOCARD:"Nvidia GeForce GTX 950,2Gb",
    link:"http://google.com/andi"

},
{
    id:3,
    name:"sword",
    image:bannerico,
    size:"70gb",
    details:"the sword pc specs of a can ensure your gaming experience is free from stuttering or crashing. However to experience Elden Ring the developers intended, your computer should meet the system recommended requirements of a GTX 1070 or an Radeon RX Vega 56 GPU to ensure a flawless rendition of the games",
    cpu:"Intel Core i5-8400 | AMD Ryzen 3 3300X",
    ram:" 12 GB",
    SPACE:"74",
    VIDEOCARD:"Nvidia GeForce GTX 1060, 3GB | AMD Radeon RX 580, 4GB",
    link:"http://google.com/andi"

}
]
export function getGames() {
    return games;
  }