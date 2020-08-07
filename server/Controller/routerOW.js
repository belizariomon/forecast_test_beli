const express = require('express');
const fetch = require("node-fetch");
const app = express();

const base = "/v1";

// parse application/json
app.use(express.json());
//parsea application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended: true
}));

// .populate('usuario', 'nombre email') populate es la versión join de mongoose
app.get(`${base}/location`, async (req, res) => {
    let text = ""

    //Reemplaze por su id correspondiente ya que en desarrollo se devuelve ::1
    const ip = process.env.PRODUCCIONMODE ? "190.229.248.230" : req.headers['x-forwarded-for'] || (req.connection && req.connection.remoteAddress) || ''

    text = await fetch(`http://ip-api.com/json/${ip}`, { method: 'GET' })
        .then(res => res.text())
        .then(text => { return JSON.parse(text) })
        .catch(error => res.status(500).json(JSON.parse(error)))
    res.status(200).json(text)
});

app.get(`${base}/current/:city?`, async (req, res) => {
    let ciudad = req.params.city
    if (ciudad !== undefined) {
        await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${process.env.OPENWEATHERID}&lang=es`)
            .then(res => res.text())
            .then(text => res.status(200).json(JSON.parse(text)))
            .catch(error => res.status(500).json(JSON.parse(error)))
    } else {
        const ip = process.env.PRODUCCIONMODE ? "190.229.248.230" : req.headers['x-forwarded-for'] || (req.connection && req.connection.remoteAddress) || ''

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

app.get(`${base}/forecast/:city?`, async (req, res) => {
    let ciudad = req.params.city
    if (ciudad !== undefined) {
        await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${process.env.OPENWEATHERID}&lang=es`)
            .then(res => res.text())
            .then(text => res.status(200).json(JSON.parse(text)))
            .catch(error => res.status(500).json(JSON.parse(error)))
    } else {
        const ip = process.env.PRODUCCIONMODE ? "190.229.248.230" : req.headers['x-forwarded-for'] || (req.connection && req.connection.remoteAddress) || ''

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


module.exports = app;