import React, { useEffect, useState } from 'react';
import { formatDate, formatTime } from '../utils/index';
const TableComponent = ({ orderDetails = {} }) => {
    const [tableDataSrc, setTableDataSrc] = useState([]);

    useEffect(() => {
        if (Object.keys(orderDetails).length) {
            const AAAOrders = orderDetails['orders_AAA'].sent;
            setTableDataSrc(AAAOrders);
        }
    }, [orderDetails]);
    return (
        <table>
            <thead>
                <tr>
                    <th>DATE and TIME</th>
                    <th>SUBJECT</th>
                    <th>COMMUNICATION TYPE</th>
                    <th>ORDER #</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    tableDataSrc.length ? tableDataSrc.map((item) => {
                        const displayDate = formatDate(item.sent_dt);
                        const displayTime = formatTime(`${item.sent_dt} ${item.sent_tm}`);
                        return (
                            <tr key={item.id}>
                                <td>
                                    <div>{displayDate}</div>
                                    <div>{displayTime}</div>
                                </td>
                                <td>
                                    <div>{item.subject.title}</div>
                                    <sub>{item.subject.email}</sub>
                                </td>
                                <td>{item.type}</td>
                                <td>{item.order_id}</td>
                                <td><button>Resend</button></td>
                            </tr>
                        )
                    }) : null
                }
            </tbody>
        </table>
    );
};

export default TableComponent;