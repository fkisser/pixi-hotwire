import { Application, Assets, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

Assets.add("Clampy", "./clampy.png");
Assets.add("Spider", "./spider.png");

Assets.load(["Clampy", "Spider"]).then(()=>{

	const clampy: Sprite = Sprite.from("Spider");
	console.log ("Hola mundo!", clampy.width, clampy.height);

	app.stage.addChild(clampy);

});
