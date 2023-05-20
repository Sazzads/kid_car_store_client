import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryToyCard from './CategoryToyCard';


const CategoryToy = () => {
    const [allToys, setAllToys] = useState([])
    const [activeTab, setActiveTab] = useState("bus");
    useEffect(() => {
        fetch(`https://server-site-pi.vercel.app/alltoys/${activeTab}`)
            .then(res => res.json())
            .then(result => {
                setAllToys(result);
                // console.log(result);
            })
    }, [activeTab])

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    return (
        <div >
            <Tabs >
                <TabList >
                    <Tab onClick={() => handleTabClick("bus")} className={`tab activeTab = "bus"`}>bus</Tab>
                    <Tab onClick={() => handleTabClick("car")} className={`tab activeTab = "car"`}>car</Tab>
                    <Tab onClick={() => handleTabClick("truck")} className={`tab activeTab = "truck`}>truck</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
                        {
                            allToys.map(toy => <CategoryToyCard  key={toy._id} toy={toy}></CategoryToyCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                        {
                            allToys.map(toy => <CategoryToyCard key={toy._id} toy={toy}>{toy.name}</CategoryToyCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                        {
                            allToys.map(toy => <CategoryToyCard key={toy._id} toy={toy}>{toy.name}</CategoryToyCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CategoryToy;