import { PixooAPI, Color } from 'pixoo-api'


const pixoo = new PixooAPI('10.0.0.186', 64)
await pixoo.initialize()

// fetch number from https://api.we-two.de/api/user/count?token=made-with-love
const count = await fetch('https://api.we-two.de/api/user/count?token=made-with-love').then(res => res.json())
console.log(count)

pixoo.drawText("We-Two:", [5, 5, ], Color.White);
pixoo.drawText(count.toString(), [5, 12, 0], Color.White);
pixoo.drawText("User", [25, 12, 0], Color.Magenta);



//pixoo.drawText("Paystory:", [5, 20, ], Color.White);
//pixoo.drawText(count.toString(), [5, 28, 0], Color.White);
//pixoo.drawPixel(10, 10, [255, 0, 0], Color.White)
await pixoo.push()