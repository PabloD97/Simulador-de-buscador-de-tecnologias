import React from  "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../components/Home.jsx';
import Technologies from '../components/Technologies.jsx';
import TechnologyById from "../components/TechnologyById.jsx";


const Rutas = () =>{
    //TODO: Falta agregar la ruta de busqueda y crear su componente
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/technology/:id' component={TechnologyById}/>
                <Route path='/technologies' component={Technologies}/>
            

                <Route path='/' component={Home}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Rutas;