// import { PixooAPI, Color } from "pixoo-api";
import axios from "axios";
import Pixoo from 'pixoo';

let pixoo;

async function main() {
  pixoo = new Pixoo.Pixoo("10.0.0.186", 64);
  pixoo.init();

  await update();
  setInterval(async () => {
    await update();
  }, 1000 * 60 * 5);
}

async function update() {
  await pixoo.fill();
  
  const { data } = await axios.get(
    "https://api.we-two.de/api/user/count?token=made-with-love"
  );

  await pixoo.drawText("WeTwo", [5, 5], [255, 255, 255]);
  await pixoo.drawText(data.toString() + " User", [5, 12, 0], [255, 50, 80]);

  const count = Math.floor(Math.random() * 100);
  console.log('count', count);
  await pixoo.drawText(count.toString(), [5, 20, 0], [255, 255, 255]);
  // await pixoo.drawChar(count.toString(), [5, 20, 0], [255, 255, 255]);

}
main();
