import React from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg'
import './index.css'

const pagina = (
    <div className='container'>
        <img src={logo} alt="logo react" width="100px" />
        <h1 className='text-3xl font-bold underline'>Datos interesantes acerca de React</h1>
        <ul>
            <li>Fue liberado al publico en el año 2013</li>
            <li>Fue creado por Jordan Walke</li>
            <li>Tiene alrededor de 100k estrellas en github</li>
            <li>Es mantenido por facebook</li>
            <li>Funciona en aplicaciones de miles de empresas, incluyendo apps</li>
        </ul>
    </div>
)

ReactDOM.render(pagina, document.getElementById('root'));