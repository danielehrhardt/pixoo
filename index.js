import {PixooAPI, Color} from "pixoo-api";
import axios from 'axios'

async function main() {
  const pixoo = new PixooAPI("10.0.0.186", 64);
  await pixoo.initialize();

  // fetch number from https://api.we-two.de/api/user/count?token=made-with-love with axios
  const { data } = await axios.get(
    "https://api.we-two.de/api/user/count?token=made-with-love"
  );
  console.log(data);

  pixoo.drawText("We-Two:", [5, 5], Color.White);
  pixoo.drawText(data.toString(), [5, 12, 0], Color.White);
  pixoo.drawText("User", [25, 12, 0], Color.Magenta);

  const count = Math.floor(Math.random() * 100);
  pixoo.drawText(count.toString(), [5, 20], Color.White);

  //pixoo.drawText("Paystory:", [5, 20, ], Color.White);
  //pixoo.drawText(count.toString(), [5, 28, 0], Color.White);
  //pixoo.drawPixel(10, 10, [255, 0, 0], Color.White)
  await pixoo.push();
}
main();
