/* Créditos por organização e desenvolvimento de algumas function: @Victor / @NPMJS 
    • Qualquer dúvida, verifique cada uma das const de exportações, são os módulos baixados, são elas: 
    Caxinha, (Usado nas logos de montagens, ou seja, são imagens criados por meio do servidor do módulo ou scrapper)
    Caxinha2,  (Tmb nas logos de montagens, ou seja, são imagens criados por meio do servidor do módulo ou scrapper)
    SabCanvasz (Usado para criação das logos de Welcome e também dos Ranks do Users). 
    • Direitos Autorais © Sab's Corporation •
*/

__path = process.cwd() /* Serve para localizar o diretório onde a pasta está, não apague. */

const fs = require('fs')
const canvafy = require("canvafy");
const path = require("path");
const { dirname } = require('path');
__dirname = dirname(__filename);

const Caxinha = require(__path+'/base de dados/modules/backend/canvas');
const Caxinha2 = require(__path+'/base de dados/modules/backend/canvas-2');
const SabCanvasz = require(__path+'/base de dados/modules/backend/sabrina-rank');

var key = JSON.parse(fs.readFileSync(__path+"/database/tokens.json"));
const usus_r = JSON.parse(fs.readFileSync(__path+"/database/usuarios.json"));

async function RG_US(token, req) {
var i4 = key.map(i => i?.token)?.indexOf(token)
if(i4 >= 0) {
key[i4].request -= 1;
fs.writeFileSync(__path+"/database/tokens.json", JSON.stringify(key, null, 2));
var IP = req.headers['x-real-ip'] || req.connection.remoteAddress || 0;
var i3 = usus_r.map(i => i.key).indexOf(token);
if(i3 < 0 && !usus_r.map(i => i.IP).includes(IP?.split(":")[3])){
usus_r.push({key: token, IP: [IP?.split(":")[3]]})
fs.writeFileSync(__path+"/database/usuarios.json", JSON.stringify(usus_r, null, 2));
} else if(i3 >= 0 && !usus_r[i3]?.IP.includes(IP?.split(":")[3])) {
usus_r[i3].IP.push(IP?.split(":")[3])
fs.writeFileSync(__path+"/database/usuarios.json", JSON.stringify(usus_r, null, 2));
}}}

async function comunismo(req, res) {
try {
const token = req.query.token;
const image = req.query.link;
if(!image) return res.json({message: "faltando o parâmetro image"})
if(!token)return res.json({status:false,message:'cade o parametro token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "../public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RG_US(token, req)
  img = await Caxinha.canvas.comunism(`${image}`);
  await fs.writeFileSync(__path+'/assets/Tempo/canvasimg.png', img)
  res.sendFile(__path+'/assets/Tempo/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'Ops, aconteceu um erro no servidor interno.', resultado: 'error'
		})
	}
}

async function bolsonaro(req, res) {
try {
const token = req.query.token;
const image = req.query.link;
if(!image) return res.json({message: "faltando o parâmetro image"})
if(!token)return res.json({status:false,message:'cade o parametro token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "../public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RG_US(token, req)
  img = await Caxinha.canvas.bolsonaro(`${image}`);
  await fs.writeFileSync(__path+'/assets/Tempo/canvasimg.png', img)
  res.sendFile(__path+'/assets/Tempo/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'Ops, aconteceu um erro no servidor interno.', resultado: 'error'
		})
	}
}

async function affect(req, res) {
try {
const token = req.query.token;
const image = req.query.link;
if(!image) return res.json({message: "faltando o parâmetro image"})
if(!token)return res.json({status:false,message:'cade o parametro token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "../public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RG_US(token, req)
  img = await Caxinha.canvas.affect(`${image}`);
  await fs.writeFileSync(__path+'/assets/Tempo/canvasimg.png', img)
  res.sendFile(__path+'/assets/Tempo/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'Ops, aconteceu um erro no servidor interno.', resultado: 'error'
		})
	}
}

async function beautiful(req, res) {
try {
const token = req.query.token;
const image = req.query.link;
if(!image) return res.json({message: "faltando o parâmetro image"})
if(!token)return res.json({status:false,message:'cade o parametro token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "../public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RG_US(token, req)
  img = await Caxinha.canvas.beautiful(`${image}`);
  await fs.writeFileSync(__path+'/assets/Tempo/canvasimg.png', img)
  res.sendFile(__path+'/assets/Tempo/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'Ops, aconteceu um erro no servidor interno.', resultado: 'error'
		})
	}
}

async function blurr(req, res) {
try {
const token = req.query.token;
const image = req.query.link;
if(!image) return res.json({message: "faltando o parâmetro image"})
if(!token)return res.json({status:false,message:'cade o parametro token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "../public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RG_US(token, req)
  img = await Caxinha.canvas.blur(`${image}`);
  await fs.writeFileSync(__path+'/assets/Tempo/canvasimg.png', img)
  res.sendFile(__path+'/assets/Tempo/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'Ops, aconteceu um erro no servidor interno.', resultado: 'error'
		})
	}
}

async function bnw(req, res) {
try {
const token = req.query.token;
const image = req.query.link;
if(!image) return res.json({message: "faltando o parâmetro image"})
if(!token)return res.json({status:false,message:'cade o parametro token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "../public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RG_US(token, req)
  img = await Caxinha.canvas.bnw(`${image}`);
  await fs.writeFileSync(__path+'/assets/Tempo/canvasimg.png', img)
  res.sendFile(__path+'/assets/Tempo/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'Ops, aconteceu um erro no servidor interno.', resultado: 'error'
		})
	}
}

async function circle(req, res) {
try {
const token = req.query.token;
const image = req.query.link;
if(!image) return res.json({message: "faltando o parâmetro image"})
if(!token)return res.json({status:false,message:'cade o parametro token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "../public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RG_US(token, req)
  img = await Caxinha.canvas.circle(`${image}`);
  await fs.writeFileSync(__path+'/assets/Tempo/canvasimg.png', img)
  res.sendFile(__path+'/assets/Tempo/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'Ops, aconteceu um erro no servidor interno.', resultado: 'error'
		})
	}
}

async function del(req, res) {
try {
const token = req.query.token;
const image = req.query.link;
if(!image) return res.json({message: "faltando o parâmetro image"})
if(!token)return res.json({status:false,message:'cade o parametro token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "../public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RG_US(token, req)
  img = await Caxinha.canvas.del(`${image}`);
  await fs.writeFileSync(__path+'/assets/Tempo/canvasimg.png', img)
  res.sendFile(__path+'/assets/Tempo/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'Ops, aconteceu um erro no servidor interno.', resultado: 'error'
		})
	}
}

async function dither(req, res) {
try {
const token = req.query.token;
const image = req.query.link;
if(!image) return res.json({message: "faltando o parâmetro image"})
if(!token)return res.json({status:false,message:'cade o parametro token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "../public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RG_US(token, req)
  img = await Caxinha.canvas.dither(`${image}`);
  await fs.writeFileSync(__path+'/assets/Tempo/canvasimg.png', img)
  res.sendFile(__path+'/assets/Tempo/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'Ops, aconteceu um erro no servidor interno.', resultado: 'error'
		})
	}
}

async function facepalm(req, res) {
try {
const token = req.query.token;
const image = req.query.link;
if(!image) return res.json({message: "faltando o parâmetro image"})
if(!token)return res.json({status:false,message:'cade o parametro token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "../public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RG_US(token, req)
  img = await Caxinha.canvas.facepalm(`${image}`);
  await fs.writeFileSync(__path+'/assets/Tempo/canvasimg.png', img)
  res.sendFile(__path+'/assets/Tempo/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'Ops, aconteceu um erro no servidor interno.', resultado: 'error'
		})
	}
}

async function gay(req, res) {
try {
const token = req.query.token;
const image = req.query.link;
if(!image) return res.json({message: "faltando o parâmetro image"})
if(!token)return res.json({status:false,message:'cade o parametro token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "../public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RG_US(token, req)
  img = await Caxinha.canvas.gay(`${image}`);
  await fs.writeFileSync(__path+'/assets/Tempo/canvasimg.png', img)
  res.sendFile(__path+'/assets/Tempo/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'Ops, aconteceu um erro no servidor interno.', resultado: 'error'
		})
	}
}

async function lgbt(req, res) {
try {
const token = req.query.token;
const image = req.query.link;
if(!image) return res.json({message: "faltando o parâmetro image"})
if(!token)return res.json({status:false,message:'cade o parametro token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "../public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RG_US(token, req)
  img = await Caxinha.canvas.gay(`${image}`);
  await fs.writeFileSync(__path+'/assets/Tempo/canvasimg.png', img)
  res.sendFile(__path+'/assets/Tempo/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'Ops, aconteceu um erro no servidor interno.', resultado: 'error'
		})
	}
}

async function invert(req, res) {
try {
const token = req.query.token;
const image = req.query.link;
if(!image) return res.json({message: "faltando o parâmetro image"})
if(!token)return res.json({status:false,message:'cade o parametro token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "../public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RG_US(token, req)
  img = await Caxinha.canvas.invert(`${image}`);
  await fs.writeFileSync(__path+'/assets/Tempo/canvasimg.png', img)
  res.sendFile(__path+'/assets/Tempo/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'Ops, aconteceu um erro no servidor interno.', resultado: 'error'
		})
	}
}

async function jail(req, res) {
try {
const token = req.query.token;
const image = req.query.link;
if(!image) return res.json({message: "faltando o parâmetro image"})
if(!token)return res.json({status:false,message:'cade o parametro token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "../public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RG_US(token, req)
  img = await Caxinha.canvas.jail(`${image}`);
  await fs.writeFileSync(__path+'/assets/Tempo/canvasimg.png', img)
  res.sendFile(__path+'/assets/Tempo/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'Ops, aconteceu um erro no servidor interno.', resultado: 'error'
		})
	}
}

async function magik(req, res) {
try {
const token = req.query.token;
const image = req.query.link;
if(!image) return res.json({message: "faltando o parâmetro image"})
if(!token)return res.json({status:false,message:'cade o parametro token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "../public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RG_US(token, req)
  img = await Caxinha.canvas.magik(`${image}`);
  await fs.writeFileSync(__path+'/assets/Tempo/canvasimg.png', img)
  res.sendFile(__path+'/assets/Tempo/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'Ops, aconteceu um erro no servidor interno.', resultado: 'error'
		})
	}
}

async function pixelate(req, res) {
try {
const token = req.query.token;
const image = req.query.link;
if(!image) return res.json({message: "faltando o parâmetro image"})
if(!token)return res.json({status:false,message:'cade o parametro token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "../public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RG_US(token, req)
  img = await Caxinha.canvas.pixelate(`${image}`);
  await fs.writeFileSync(__path+'/assets/Tempo/canvasimg.png', img)
  res.sendFile(__path+'/assets/Tempo/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'Ops, aconteceu um erro no servidor interno.', resultado: 'error'
		})
	}
}

async function rip(req, res) {
try {
const token = req.query.token;
const image = req.query.link;
if(!image) return res.json({message: "faltando o parâmetro image"})
if(!token)return res.json({status:false,message:'cade o parametro token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "../public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RG_US(token, req)
  img = await Caxinha.canvas.rip(`${image}`);
  await fs.writeFileSync(__path+'/assets/Tempo/canvasimg.png', img)
  res.sendFile(__path+'/assets/Tempo/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'Ops, aconteceu um erro no servidor interno.', resultado: 'error'
		})
	}
}

async function sepia(req, res) {
try {
const token = req.query.token;
const image = req.query.link;
if(!image) return res.json({message: "faltando o parâmetro image"})
if(!token)return res.json({status:false,message:'cade o parametro token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "../public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RG_US(token, req)
  img = await Caxinha.canvas.sepia(`${image}`);
  await fs.writeFileSync(__path+'/assets/Tempo/canvasimg.png', img)
  res.sendFile(__path+'/assets/Tempo/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'Ops, aconteceu um erro no servidor interno.', resultado: 'error'
		})
	}
}

async function rotate(req, res) {
try {
const token = req.query.token;
const image = req.query.link;
if(!image) return res.json({message: "faltando o parâmetro image"})
if(!token)return res.json({status:false,message:'cade o parametro token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "../public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RG_US(token, req)
  img = await Caxinha.canvas.rotate(`${image}`);
  await fs.writeFileSync(__path+'/assets/Tempo/canvasimg.png', img)
  res.sendFile(__path+'/assets/Tempo/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'Ops, aconteceu um erro no servidor interno.', resultado: 'error'
		})
	}
}

async function trash(req, res) {
try {
const token = req.query.token;
const image = req.query.link;
if(!image) return res.json({message: "faltando o parâmetro image"})
if(!token)return res.json({status:false,message:'cade o parametro token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "../public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RG_US(token, req)
  img = await Caxinha.canvas.trash(`${image}`);
  await fs.writeFileSync(__path+'/assets/Tempo/canvasimg.png', img)
  res.sendFile(__path+'/assets/Tempo/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'Ops, aconteceu um erro no servidor interno.', resultado: 'error'
		})
	}
}

async function wanted(req, res) {
try {
const token = req.query.token;
const image = req.query.link;
if(!image) return res.json({message: "faltando o parâmetro image"})
if(!token)return res.json({status:false,message:'cade o parametro token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "../public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RG_US(token, req)
  img = await Caxinha.canvas.wanted(`${image}`);
  await fs.writeFileSync(__path+'/assets/Tempo/canvasimg.png', img)
  res.sendFile(__path+'/assets/Tempo/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'Ops, aconteceu um erro no servidor interno.', resultado: 'error'
		})
	}
}

async function wasted(req, res) {
try {
const token = req.query.token;
const image = req.query.link;
if(!image) return res.json({message: "faltando o parâmetro image"})
if(!token)return res.json({status:false,message:'cade o parametro token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "../public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RG_US(token, req)
  img = await Caxinha.canvas.wasted(`${image}`);
  await fs.writeFileSync(__path+'/assets/Tempo/canvasimg.png', img)
  res.sendFile(__path+'/assets/Tempo/canvasimg.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'Ops, aconteceu um erro no servidor interno.', resultado: 'error'
		})
	}
}

async function bobross(req, res) {
try {
const token = req.query.token;
const image = req.query.link;
if(!image) return res.json({message: "faltando o parâmetro image"})
if(!token)return res.json({status:false,message:'cade o parametro token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "../public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RG_US(token, req)
imgr = await new Caxinha2.Bobross().getImage(`${image}`)
await fs.writeFileSync(__path +'/assets/Tempo/bobross.png', imgr)
res.sendFile(__path +'/assets/Tempo/bobross.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'Ops, aconteceu um erro no servidor interno.', resultado: 'error'
		})
	}
}

async function karaba(req, res) {
try {
const token = req.query.token;
const image = req.query.link;
if(!image) return res.json({message: "faltando o parâmetro image"})
if(!token)return res.json({status:false,message:'cade o parametro token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "../public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RG_US(token, req)
imgr = await new Caxinha2.Karaba().getImage(`${image}`)
await fs.writeFileSync(__path +'/assets/Tempo/karaba.png', imgr)
res.sendFile(__path +'/assets/Tempo/karaba.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'Ops, aconteceu um erro no servidor interno.', resultado: 'error'
		})
	}
}

async function mms(req, res) {
try {
const token = req.query.token;
const image = req.query.link;
if(!image) return res.json({message: "faltando o parâmetro image"})
if(!token)return res.json({status:false,message:'cade o parametro token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "../public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RG_US(token, req)
imgr = await new Caxinha2.Mms().getImage(`${image}`)
await fs.writeFileSync(__path +'/assets/Tempo/mms.png', imgr)
res.sendFile(__path +'/assets/Tempo/mms.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'Ops, aconteceu um erro no servidor interno.', resultado: 'error'
		})
	}
}

async function WLCM(req, res) {
try {
const token = req.query.token;
const nome = req.query.nome; 
const nomegp = req.query.nomegp; 
const perfil = req.query.perfil;
const membros = req.query.membros;
const titulo = req.query.titulo;  
const numero = req.query.numero;
const cor = req.query.cor;
const lcor = req.query.lcor;
const tcor = req.query.tcor;
const fundo = req.query.fundo;
if (nome === undefined || nomegp === undefined || titulo === undefined || membros === undefined || fundo === undefined || perfil === undefined || numero === undefined || cor === undefined || lcor === undefined || tcor === undefined) return res.json({status: false, message: "Você está usando de forma errada verifique a forma apresentada na documentação da api."})
if(!token)return res.json({status:false,message:'cade o parametro token'})    
if(!key.map(i => i.token)?.includes(token)) return res.sendFile(path.join(__dirname, "../public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})    
RG_US(token, req)
var image = await new SabCanvasz.Welcome()
  .setTextTitle(`${titulo}`)
  .setUsername(`${nome}`)
  .setDiscriminator(`${numero}`)
  .setMemberCount(`${membros}`)
  .setGuildName(`${nomegp}`)
  .setAvatar(`${perfil}`)
  .setColor("border", `#${cor}`)
  .setColor("username-box", `#${cor}`)
  .setColor("discriminator-box", `#${cor}`)
  .setColor("message-box", `#${cor}`)
  .setColor("title", `#${tcor}`)
  .setColor("avatar", `#${cor}`)
  .setColor("Username", `#${lcor}`)
  .setColor("Message", `#${lcor}`)
  .setColor("Discriminator", `#${lcor}`)
  .setColor("Hashtag", `#${lcor}`) 
  .setBackground(`${fundo}`)
  .toAttachment();
data = image.toBuffer();
await fs.writeFileSync(__path +'/assets/Tempo/bemvindov2.png', data)
res.sendFile(__path+'/assets/Tempo/bemvindov2.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'Ops, aconteceu um erro no servidor interno.', resultado: 'error'
		})
	}
}

async function RankUser(req, res) {
try {
token = req.query.token;
username = req.query.nome,
perfil = req.query.perfil,
fundo = req.query.fundo,  
xp = req.query.xp,  
fullxp = req.query.fullxp,  
level = req.query.level,
rank = req.query.rank,
discrim = req.query.contagem
cor = req.query.cor
if (username === undefined || xp === undefined || perfil === undefined || discrim === undefined || fundo === undefined || fullxp === undefined || level === undefined || rank === undefined || cor === undefined) return res.json({status: false, message: "Você está usando de forma errada verifique a forma apresentada na documentação da api."})
if(!token)return res.json({status:false,message:'cade o parametro token'})    
if(!key.map(i => i.token)?.includes(token)) return res.sendFile(path.join(__dirname, "../public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})    
RG_US(token, req)
let img = await SabCanvasz.rank({ 
    username, 
    discrim, 
    level: level, 
    rank: rank, 
    neededXP: xp, 
    currentXP: fullxp, 
    avatarURL: perfil,
    color: cor, 
    background: `${fundo}`
  });
await fs.writeFileSync(__path+'/assets/Tempo/rankingUser.png', img)
res.sendFile(__path+'/assets/Tempo/rankingUser.png')
	} catch(err) {
		console.log(err)
		res.status(500).send({
			status: 500, info: 'Ops, aconteceu um erro no servidor interno.', resultado: 'error'
		})
	}
}

module.exports = {WLCM, comunismo, bolsonaro, bnw, blurr, affect, beautiful, circle, del, gay, invert, facepalm, dither, jail, magik, pixelate, rip, sepia, rotate, trash, wanted, wasted, bobross, mms, lgbt, karaba, RankUser}