const express = require("express")
const morgan = require ("morgan")
const app =express()
const port = 3500
const comidaRouter = require('./routes/comidaRouter')

app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.use(morgan('dev'))

//Rutas
app.use('/API', comidaRouter)

//Lista blanca
app.use((req,res)=>{
    res.status(400).json({message:'Ruta no encontrada'})
})

app.listen(port,()=>{
    console.log(`Aplicacion Corriendo en el puerto ${port}`)
})