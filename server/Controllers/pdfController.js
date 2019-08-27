
const pdf = require('html-pdf')
const pdfTemplate = require('../documents/')


module.exports = {
    createPdf: (req,res,next)=> {
        pdf.create(pdfTemplate(req.body), {})
        .toFile(`${__dirname}/result.pdf`,(err)=>{
            if (err) {
            res.send(Promise.reject())
               
            }
            res.send(Promise.resolve())
        })
    },
    fetchPdf:  (req,res) => {
        res.sendFile(`${__dirname}/result.pdf`)
    }
}