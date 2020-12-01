import React from 'react';
import Auxillary from '../../hoc/Auxillary';
import Toolbar from '../Toolbar/Toolbar'

const layout = (props) => (
    <Auxillary>
        <Toolbar />
        <main>
            {props.children}
        </main>
    </Auxillary>
);

export default layout