import * as React from 'react';
import styled from 'styled-components';
import { DEBUG_LAYOUT, debugBorderWhite } from '../../global/layout-debug';

interface GridColumnProps {
    children: React.ReactNode;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number
    style?: React.CSSProperties;
}


export const GridColumn: React.StatelessComponent<
    GridColumnProps
> = (props: GridColumnProps) => {

    const xsClass = props.xs ? `col-xs-${props.xs}` : '';
    const smClass = props.sm ? `col-sm-${props.sm}` : '';
    const mdClass = props.md ? `col-md-${props.md}` : '';
    const lgClass = props.lg ? `col-lg-${props.lg}` : '';

    //let className = `col-xs-${props.xs} col-sm-${props.sm} col-md-${props.md} col-lg-${props.lg}`;
    const className = [xsClass, smClass, mdClass, lgClass].join(' ').trim();

    // This combines the incoming style with the debug border
    const style = { ...(props.style ? props.style : {}), ...(DEBUG_LAYOUT ? debugBorderWhite : {}) };


    return (
        <div className={className} style={style}>
            {props.children}
        </div>
    );
};
