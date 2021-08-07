import logo from "./logo.svg";
import Canvas from "./canvas/Canvas";
import "./App.css";
import { useState } from "react";

import noneImg from "./characters/none.png";

import backCapeGreen from "./characters/01back/01back_cape_green.png";

import bodyBlueFemale from "./characters/02body/02body_blue_female.png";
import bodyBlueMale from "./characters/02body/02body_blue_male.png";
import bodyGreenFemale from "./characters/02body/02body_green_female.png";
import bodyGreenMale from "./characters/02body/02body_green_male.png";
import bodySkeleton from "./characters/02body/02body_skeleton.png";
import bodyWhiteFemale from "./characters/02body/02body_white_female.png";
import bodyWhiteMale from "./characters/02body/02body_white_male.png";

import topArmorBarbarian from "./characters/03top/03top_armor_barbarian.png";
import topArmorOrc from "./characters/03top/03top_armor_orc.png";
import topSuitSpace from "./characters/03top/03top_suit_space.png";
import topVestRed from "./characters/03top/03top_vest_red.png";

import downArmorBarbarian from "./characters/04down/04down_armor_barbarian.png";
import downOrcLoincloth from "./characters/04down/04down_orc_loincloth.png";
import downSuitSpace from "./characters/04down/04down_suit_space.png";

import shoesBarbarian from "./characters/05shoes/05shoes_barbarian.png";
import shoesBlack from "./characters/05shoes/05shoes_black.png";
import shoesOrcBoots from "./characters/05shoes/05shoes_orc_boots.png";
import shoesSuitSpace from "./characters/05shoes/05shoes_suit_space.png";

import headBlue1 from "./characters/06head/06head_blue1.png";
import headOrc from "./characters/06head/06head_orc.png";
import headSkeleton from "./characters/06head/06head_skeleton.png";
import headWhite1 from "./characters/06head/06head_white1.png";

import eyesAlienBlue from "./characters/07eyes/07eyes_alien_blue.png";
import eyesSkeleton from "./characters/07eyes/07eyes_skeleton.png";
import eyesType1Blue from "./characters/07eyes/07eyes_type1_blue.png";
import eyesType1Orc from "./characters/07eyes/07eyes_type1_orc.png";
import eyesType2Lightblue from "./characters/07eyes/07eyes_type2_lightblue.png";

import eyebrowsType1Black from "./characters/08eyebrows/08eyebrows_type1_black.png";
import eyebrowsType2Black from "./characters/08eyebrows/08eyebrows_type2_black.png";

import mouthSmile1 from "./characters/10mouth/10mouth_smile1.png";

import hairBlonde1 from "./characters/11hair/11hair_blonde1.png";
import hairBrown1 from "./characters/11hair/11hair_brown1.png";
import hairPonytail from "./characters/11hair/11hair_ponytail.png";

import facialhairType1Brown from "./characters/12facial hair/12facialhair_type1_brown.png";

import headgearArmorBarbarian from "./characters/13headgear/13headgear_armor_barbarian.png";
import headgearHelmetAlien from "./characters/13headgear/13headgear_helmet_alien.png";
import hedgearBandanaRed from "./characters/13headgear/13hedgear_bandana_red.png";

import accessoryLeftAxeOrc from "./characters/14accessory left/14accessory_left_axe_orc.png";
import accessoryLeftMagicAlien from "./characters/14accessory left/14accessory_left_magic_alien.png";
import accessoryLeftSabreSkeleton from "./characters/14accessory left/14accessory_left_sabre_skeleton.png";
import accessoryLeftSpaceStaff from "./characters/14accessory left/14accessory_left_space_staff.png";
import accessoryLeftSwordBarbarian from "./characters/14accessory left/14accessory_left_sword_barbarian.png";

import accessoryRightShieldBarbarian from "./characters/15accessory right/15accessory_right_shield_barbarian.png";

const createImage = (src) => {
  const img = new Image();
  img.src = src;

  return img;
};

// we should probably import images directly here via React so we'll get
// data-uri conversion oout of the box, still we might need to change
// IMAGE_INLINE_SIZE_LIMIT, see https://create-react-app.dev/docs/adding-images-fonts-and-files/
const none = createImage(noneImg);
const images = {
  back: {
    capeGreen: createImage(backCapeGreen),
    none: none,
  },
  body: {
    blueFemale: createImage(bodyBlueFemale),
    blueMale: createImage(bodyBlueMale),
    greenFemale: createImage(bodyGreenFemale),
    greenMale: createImage(bodyGreenMale),
    skeleton: createImage(bodySkeleton),
    whiteFemale: createImage(bodyWhiteFemale),
    whiteMale: createImage(bodyWhiteMale),
  },
  top: {
    armorBarbarian: createImage(topArmorBarbarian),
    armorOrc: createImage(topArmorOrc),
    suitSpace: createImage(topSuitSpace),
    vestRed: createImage(topVestRed),
    none: none,
  },
  down: {
    armorBarbarian: createImage(downArmorBarbarian),
    orcLoincloth: createImage(downOrcLoincloth),
    suitSpace: createImage(downSuitSpace),
    none: none,
  },
  shoes: {
    barbarian: createImage(shoesBarbarian),
    black: createImage(shoesBlack),
    orcBoots: createImage(shoesOrcBoots),
    suitSpace: createImage(shoesSuitSpace),
    none: none,
  },
  head: {
    blue1: createImage(headBlue1),
    orc: createImage(headOrc),
    skeleton: createImage(headSkeleton),
    white1: createImage(headWhite1),
  },
  eyes: {
    alienBlue: createImage(eyesAlienBlue),
    skeleton: createImage(eyesSkeleton),
    type1Blue: createImage(eyesType1Blue),
    type1Orc: createImage(eyesType1Orc),
    type2Lightblue: createImage(eyesType2Lightblue),
    none: none,
  },
  eyebrows: {
    type1Black: createImage(eyebrowsType1Black),
    type2Black: createImage(eyebrowsType2Black),
    none: none,
  },
  eyegear: {},
  mouth: {
    mouthSmile1: createImage(mouthSmile1),
    none: none,
  },
  hair: {
    blonde1: createImage(hairBlonde1),
    brown1: createImage(hairBrown1),
    ponytail: createImage(hairPonytail),
    none: none,
  },
  facialHair: {
    type1Brown: createImage(facialhairType1Brown),
    none: none,
  },
  headGear: {
    armorBarbarian: createImage(headgearArmorBarbarian),
    helmetAlien: createImage(headgearHelmetAlien),
    bandanaRed: createImage(hedgearBandanaRed),
    none: none,
  },
  accessoryLeft: {
    axeOrc: createImage(accessoryLeftAxeOrc),
    magicAlien: createImage(accessoryLeftMagicAlien),
    sabreSkeleton: createImage(accessoryLeftSabreSkeleton),
    spaceStaff: createImage(accessoryLeftSpaceStaff),
    swordBarbarian: createImage(accessoryLeftSwordBarbarian),
    none: none,
  },
  accessoryRight: {
    shieldBarbarian: createImage(accessoryRightShieldBarbarian),
    none: none,
  },
};

function App() {
  const [back, setBack] = useState("capeGreen");
  const [body, setBody] = useState("blueFemale");
  const [top, setTop] = useState("none");
  const [down, setDown] = useState("none");
  const [shoes, setShoes] = useState("none");
  const [head, setHead] = useState("blue1");
  const [eyes, setEyes] = useState("skeleton");
  const [eyebrows, setEyebrows] = useState("none");
  // const [eyegear, setEyegear] = useState('none')
  const [mouth, setMouth] = useState("mouthSmile1");
  const [hair, setHair] = useState("none");
  const [facialHair, setFacialHair] = useState("none");
  const [headGear, setHeadGear] = useState("none");
  const [accessoryLeft, setAccessoryLeft] = useState("magicAlien");
  const [accessoryRight, setAccessoryRight] = useState("none");

  const bodyPartToUpdateFunctionMap = {
    back: setBack,
    body: setBody,
    top: setTop,
    down: setDown,
    shoes: setShoes,
    head: setHead,
    eyes: setEyes,
    eyebrows: setEyebrows,
    mouth: setMouth,
    hair: setHair,
    facialHair: setFacialHair,
    headGear: setHeadGear,
    accessoryLeft: setAccessoryLeft,
    accessoryRight: setAccessoryRight,
  };

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(95, 90, 70 * Math.sin(frameCount * 0.03) ** 2, 0, 2 * Math.PI);
    ctx.fillStyle = "#aa8e29";
    ctx.fill();

    ctx.drawImage(images["back"][back], 0, 0);
    ctx.drawImage(images["body"][body], 0, 0);
    ctx.drawImage(images["top"][top], 0, 0);
    ctx.drawImage(images["down"][down], 0, 0);
    ctx.drawImage(images["shoes"][shoes], 0, 0);
    ctx.drawImage(images["head"][head], 0, 0);
    ctx.drawImage(images["eyes"][eyes], 0, 0);
    ctx.drawImage(images["eyebrows"][eyebrows], 0, 0);
    // ctx.drawImage(images['eyegear'][eyegear], 0, 0);
    ctx.drawImage(images["mouth"][mouth], 0, 0);
    ctx.drawImage(images["hair"][hair], 0, 0);
    ctx.drawImage(images["facialHair"][facialHair], 0, 0);
    ctx.drawImage(images["headGear"][headGear], 0, 0);
    ctx.drawImage(images["accessoryLeft"][accessoryLeft], 0, 0);
    ctx.drawImage(images["accessoryRight"][accessoryRight], 0, 0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>ATM Character Generator</p>
        <div>
          <Canvas draw={draw} options={{ width: 512, height: 512 }} />
          {Object.entries(images).map(([bodyPartName, bodyPartyImages]) => (
            <div>
              <p>{bodyPartName}</p>
              {Object.entries(bodyPartyImages).map(([name, image]) => (
                <button
                  onClick={() =>
                    bodyPartToUpdateFunctionMap[bodyPartName](name)
                  }
                >
                  {name}
                </button>
              ))}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
