import React from 'react'
import AppFrame from './AppFrame'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
    title: "AppFrame",
    component: AppFrame
}

export const AppFrameExample = () => (
    /* AppFrame es afectado por BrowserRouter */
        /* lo que se coloque dentro de AppFrame se hubicará en children */
    <Router>
        <AppFrame>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam a voluptates, aliquid cumque alias magni. At repellendus iusto maiores aperiam soluta eveniet in, quaerat recusandae, ex pariatur, deleniti vero nisi.
        </AppFrame>
    </Router>
)