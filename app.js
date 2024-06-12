const express = require("express")
const app =express()
const port = 3500

app.get("/", (req,res)=>{
    res.json({mensaje:"Aplicacion Funcionando Correctamente"})
})

app.listen(port,()=>{
    console.log(`Aplicacion Corriendo en el puerto ${port}`)
})