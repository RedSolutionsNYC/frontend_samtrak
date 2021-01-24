import React from 'react';
import { Route } from 'react-router-dom';


import SampleList from './containers/SampleListView';
import SampleDetail from './containers/SampleDetailView';


const BaseRouter = () => (
    <div>
        <Route exact path='/' component={SampleList} />
        <Route exact path='/:sampleID' component={SampleDetail} />

    </div>
);

export default BaseRouter;