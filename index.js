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
  }, 1000 * 60 * 1);
}

async function update() {
  await pixoo.fill();
  const { data } = await axios.get(
    "https://api.we-two.de/api/user/count?token=made-with-love"
  );

  const today = new Date();
  const time = today.getHours() + ":" + today.getMinutes();
  console.log('time', time);
  await pixoo.drawText(time, [5, 5, 0], [0, 255, 255]);
  

  await pixoo.drawText("WeTwo", [5, 15], [255, 255, 255]);
  await pixoo.drawText(data.toString() + " User", [5, 22, 0], [255, 50, 80]);

  const random = Math.floor(Math.random() * 100);
  await pixoo.drawText(random.toString(), [53, 55, 0], [255, 255, 255]);



}
main();
