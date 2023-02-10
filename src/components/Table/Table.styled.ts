import styled from "styled-components";

interface TableHeaderProps {
    height: number;
    stripped: boolean;
}

interface TableRowProps {
    height: number;
    stripped: boolean;
}

interface TableDataProps {
    highlighted: boolean;
    stripped: boolean;
}

interface TableProps {
    stripped: boolean
}

export const CSTable = styled.table<TableProps>`
    position: relative;
    border: ${props => props.stripped ? '2px solid #ebebeb': 'none'};
    border-collapse:  ${props => props.stripped ? 'collapse': 'unset'};
`;

export const CSHeader = styled.th<TableHeaderProps>`
    background-color: #747bdf;
    color: white;
    padding: 10px 30px;
    height: ${props => props.height}px;
    position: sticky;
    top: 0;
    border: ${props => props.stripped ? '2px solid #ebebeb': 'none'};
    border-collapse:  ${props => props.stripped ? 'collapse': 'unset'};
`;

export const CSRow = styled.tr<TableRowProps>`
    height: ${props => props.height}px;
    border: ${props => props.stripped ? '2px solid #ebebeb': 'none'};
    border-collapse:  ${props => props.stripped ? 'collapse': 'unset'};
`;

export const CSTableData = styled.td<TableDataProps>`
    height: ${props => props.height}px;
    background-color: ${props => props.highlighted ? '#c8cff7' : 'none'};
    padding: 5px 10px;
    border: ${props => props.stripped ? '2px solid #ebebeb': 'none'};
    border-collapse:  ${props => props.stripped ? 'collapse': 'unset'};
    &:first-child {
        text-align: center;
     };
     &not(:first-child) {
        text-align: left;
    }
`;

export const CSTableContainer = styled.div`
    max-height: 750px;
    overflow-y: scroll;
    overflow-x: hidden;
`;