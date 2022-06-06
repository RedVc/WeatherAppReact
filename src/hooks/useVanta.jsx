import { useRef, useEffect, useState } from 'react'
import Clouds from "vanta/dist/vanta.clouds.min" /* es una libreria que no está preparada para React, por eso se importa de esta manera */
import * as THREE from 'three'

const useVanta = () => {
    const myRefDiv = useRef(null)
    const [vanta, setVanta] = useState(0)

    useEffect(() => {
        if (!vanta) {
            /* se inicializa el componente */
            /* se activa el efecto "clouds" */
            setVanta(Clouds({
                THREE,
                el: myRefDiv.current
            }))
        }

        /* al salir de WelcomeScreen detiene el efecto y se des-asocian los recursos (div + vanta effect) */
        return () => {
            if (vanta) {
                /* destruye dichos recursos */
                vanta.destroy()
            }
        }
    }, [vanta]) /* esto asegura que siga funcionando dentro del callBack aunque se modifique children como propiedad o si hubieran más propiedades del use state, de igual manera seguirá funcionando bien */

    return myRefDiv
}

export default useVanta