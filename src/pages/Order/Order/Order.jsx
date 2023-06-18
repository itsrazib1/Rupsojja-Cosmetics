import { useState } from 'react';
import orderCoverImg from '../../../assets/shop/order.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['salad', 'pizza', 'soap', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    
    const KidsZone = menu.filter(item => item.category === 'KidsZone');
    const Makeup = menu.filter(item => item.category === 'Makeup');
    const soap = menu.filter(item => item.category === 'soap');
    const cream = menu.filter(item => item.category === 'cream');
    const Parfum = menu.filter(item => item.category === 'Parfum');
    const other = menu.filter(item => item.category === 'other');

    return (
        <div>
            <Helmet>
                <title>Rupsojja Cosmetics | Order Product</title>
            </Helmet>
            <Cover img={orderCoverImg} title="Order Food"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Kids Zone</Tab>
                    <Tab>Makeup</Tab>
                    <Tab>Soap</Tab>
                    <Tab>cream</Tab>
                    <Tab>Parfum</Tab>
                    <Tab>Other</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={KidsZone}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={Makeup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soap}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={cream}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={Parfum}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={other}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;