import * as React from 'react';
import styled from 'styled-components';
import './flexboxgrid.min.css';

import { DEBUG_LAYOUT, debugBorderRed } from '../../global/layout-debug';

interface GridRowProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
}

export const GridRow: React.StatelessComponent<
    GridRowProps
> = (props: GridRowProps) => {

    // This combines the incoming style with the debug border
    const style = { ...(props.style ? props.style : {}), ...(DEBUG_LAYOUT ? debugBorderRed : {}) };

    return (
        <div className='row' style={style}>
            {props.children}
        </div>
    );
};
