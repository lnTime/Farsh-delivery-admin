import React, { useState, useEffect } from 'react';
import { DataUI } from '../ui/DataUI';

const tableHeadOptions = [
    { id: 1, content: 'Order No.' },
    { id: 2, content: 'Date' },
    { id: 3, content: 'Status' },
    { id: 4, content: 'Total' },
    { id: 5, content: 'Pickup' },
    { id: 6, content: 'Drop off' },
];

const tableRowOptions = [
    {
        id: 1, orderNumber: 1101101, date: '24 May',
        status: 'Pending', total: 'SAR 24,000',
        pickup: 'C/122412, Al Safrat, Riyadh',
        dropOff: 'Centria Mall, Olaya St, Riyadh 12241'
    },
    {
        id: 2, orderNumber: 1101101, date: '24 May',
        status: 'Pending', total: 'SAR 24,000',
        pickup: 'C/122412, Al Safrat, Riyadh',
        dropOff: 'Centria Mall, Olaya St, Riyadh 12241'
    },
    {
        id: 3, orderNumber: 1101101, date: '24 May',
        status: 'Pending', total: 'SAR 24,000',
        pickup: 'C/122412, Al Safrat, Riyadh',
        dropOff: 'Centria Mall, Olaya St, Riyadh 12241'
    },
    {
        id: 4, orderNumber: 1101101, date: '24 May',
        status: 'Pending', total: 'SAR 24,000',
        pickup: 'C/122412, Al Safrat, Riyadh',
        dropOff: 'Centria Mall, Olaya St, Riyadh 12241'
    },
    {
        id: 5, orderNumber: 1101101, date: '24 May',
        status: 'Pending', total: 'SAR 24,000',
        pickup: 'C/122412, Al Safrat, Riyadh',
        dropOff: 'Centria Mall, Olaya St, Riyadh 12241'
    },
];

export const DataContainer = () => {
    const [tableHeads, setTableHeads] = useState(null);
    const [tableRows, setTableRows] = useState(null);

    useEffect(() => {
        const heads = tableHeadOptions.map(head => <th key={head.id} className="Table-Head">{head.content}</th>);
        const rows = tableRowOptions.map(row => {
            return (<tr key={row.id} className="Table-Row">
                <td className="Table-Data">{row.orderNumber}</td>
                <td className="Table-Data">{row.date}</td>
                <td className="Table-Data">
                    <span className="Table-Data_rounded" />
                    {row.status}
                </td>
                <td className="Table-Data">{row.total}</td>
                <td className="Table-Data">{row.pickup}</td>
                <td className="Table-Data">{row.dropOff}</td>
            </tr>)
        });
        setTableHeads(heads);
        setTableRows(rows);
    }, []);

    return <DataUI tableHeads={tableHeads} tableRows={tableRows} />;
}