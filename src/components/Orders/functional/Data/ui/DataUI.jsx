import React from 'react';
import './Data.scss';

export const DataUI = ({ tableHeads, tableRows }) => {
    return <div className="Wrapper">
        <table className="Table">
            <tr className="Table-Row">
                {tableHeads}
            </tr>
            {tableRows}
        </table>
    </div>;
}