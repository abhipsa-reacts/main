import React, { useState } from 'react';
import OrdersTable from '../OrdersTable/container'
import './index.scss';

const TabMenus = () => {
    const [showTable, setShowTable] = useState(true);
    const handleClick = () => {
        setShowTable(true);
    }
    return (<>
        <section className='tabs-container'>
            <button>Orders A</button>
            <button>Orders AA</button>
            <button className='active' onClick={handleClick}>Orders AAA</button>
            <button>Orders B</button>
            <button>Orders C</button>
        </section>
        <section>
            {
                showTable ? <OrdersTable /> : null
            }
        </section>
    </>
    );
};

export default TabMenus;