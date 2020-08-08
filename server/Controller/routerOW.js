const express = require('express');
const fetch = require("node-fetch");
const app = express();
const router = express.Router();
 
// parse application/json
app.use(express.json());
//parsea application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended: true
}));

router.get('/location', async (req, res) => {
    let text = ""

    const ip = process.env.PRODUCCIONMODE ? process.env.IPLOCAL : req.headers['x-forwarded-for'].split(":")[0] || (req.connection && req.connection.remoteAddress) || ''

    text = await fetch(`http://ip-api.com/json/${ip}`, { method: 'GET' })
        .then(res => res.text())
        .then(text => { return JSON.parse(text) })
        .catch(error => res.status(500).json(JSON.parse(error)))
    res.status(200).json(text)
});

router.get('/current/:city?', async (req, res) => {
    let ciudad = req.params.city
    if (ciudad !== undefined) {
        await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${process.env.OPENWEATHERID}&lang=es`)
            .then(res => res.text())
            .then(text => res.status(200).json(JSON.parse(text)))
            .catch(error => res.status(500).json(JSON.parse(error)))
    } else {
        const ip = process.env.PRODUCCIONMODE ? process.env.IPLOCAL : req.headers['x-forwarded-for'].split(":")[0] || (req.connection && req.connection.remoteAddress) || ''

        const respIp = await fetch(`http://ip-api.com/json/${ip}`, { method: 'GET' })
            .then(res => res.text())
            .then(text => { return JSON.parse(text) })
            .catch(error => res.status(500).json(JSON.parse(error)))

        if (respIp.countryCode != undefined && respIp.regionName != undefined && respIp.city != undefined) {

            const ciudad = `${respIp.city},${respIp.regionName},${respIp.countryCode}`
            await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${process.env.OPENWEATHERID}&lang=es`)
                .then(res => res.text())
                .then(text => res.status(200).json(JSON.parse(text)))
                .catch(error => res.status(500).json(JSON.parse(error)))
        }

    }
    res.status(400)
});

router.get('/forecast/:city?', async (req, res) => {
    let ciudad = req.params.city
    if (ciudad !== undefined) {
        await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${process.env.OPENWEATHERID}&lang=es`)
            .then(res => res.text())
            .then(text => res.status(200).json(JSON.parse(text)))
            .catch(error => res.status(500).json(JSON.parse(error)))
    } else {
        const ip = process.env.PRODUCCIONMODE ? process.env.IPLOCAL : req.headers['x-forwarded-for'].split(":")[0] || (req.connection && req.connection.remoteAddress) || ''

        const respIp = await fetch(`http://ip-api.com/json/${ip}`, { method: 'GET' })
            .then(res => res.text())
            .then(text => { return JSON.parse(text) })
            .catch(error => res.status(500).json(JSON.parse(error)))

        if (respIp.countryCode != undefined && respIp.regionName != undefined && respIp.city != undefined) {

            const ciudad = `${respIp.city},${respIp.regionName},${respIp.countryCode}`
            await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${process.env.OPENWEATHERID}&lang=es`)
                .then(res => res.text())
                .then(text => res.status(200).json(JSON.parse(text)))
                .catch(error => res.status(500).json(JSON.parse(error)))
        }
    }
    res.status(400)
});

app.use("/v1", router);

// .populate('usuario', 'nombre email') populate es la versión join de mongoose

module.exports = app;