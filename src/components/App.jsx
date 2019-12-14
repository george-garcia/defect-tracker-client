import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import DefectsCreate from "./defects/DefectsCreate";
import DefectsDelete from "./defects/DefectsDelete";
import DefectsEdit from "./defects/DefectsEdit";
import DefectsList from "./defects/DefectsList";
import DefectsShow from "./defects/DefectsShow";
import DefectsShowSingle from "./defects/DefectsShowSingle";
import '../sass/main.scss';
import Navigation from "./Navigation";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={DefectsList}/>
                    <Route path="/defects/new" exact component={DefectsCreate}/>
                    <Route path="/defects/edit/:id" exact component={DefectsEdit}/>
                    <Route path="/defects/delete" exact component={DefectsDelete}/>
                    <Route path="/defects/show/" exact component={DefectsShow}/>
                    <Route path="/defects/show/:id" exact component={DefectsShowSingle}/>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;