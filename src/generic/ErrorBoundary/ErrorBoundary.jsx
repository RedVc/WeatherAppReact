import React, { PureComponent } from 'react'

/*
    PureComponent: compara el valor anterior con el actual para ahorrar recursos, es como memo, solo funciona para este tipo de componentes
*/

class ErrorBoundary extends PureComponent {

    /* 
        constructor, al extender de Component hay que usar el super() 
        se extiende super() solo si es para definir un estado
    */
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    /* funcion que no tiene acceso a la instancia del objeto de la clase, por ejemplo, no se puede usar this */
    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo){
        console.log("errorInfo", errorInfo)
    }

    /* this.props usa el parametro que se envía desde fuera */
    render() {
        return (
            this.state.hasError ?
                (<h1>Hubo un error</h1>)
                :
                (this.props.children)
        )
    }
}

export default ErrorBoundary