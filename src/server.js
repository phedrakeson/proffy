const { subjects, weekdays, getSubject } = require('./utils/format')

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res) {
    const data = req.query
    const isNotEmpty = Object.keys(data).length != 0
    if (isNotEmpty) {
        data.subject = getSubject(data.subject)

        proffys.push(data)
        return res.redirect("/study")
    }
    return res.render("give-classes.html", {weekdays, subjects})
}

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
server.use(express.static("public"))

.get("/", pageLanding)

.get("/study", pageStudy)

.get("/give-classes", pageGiveClasses)

.listen(5500)