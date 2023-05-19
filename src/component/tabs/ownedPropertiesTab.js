import React, { useState } from 'react';
import SearchInput from '../common/inputs/SearchInput';
import { ListIcon, ListIconI } from "../../assets/svgs";
import Filter from '../common/filter';
import Status from '../common/status';
import PurchaseHistory from '../common/purchaseHistory';
import OwnedTabContent from './ownedTabContent/index';
import ListingsTabContent from './listingTab';

const tabs = ['Owned', 'Listings', 'Favourite', 'Activity', 'More'];

const OwnedPropertiesTab = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleTabSelect = (index) => {
    setSelectedIndex(index);
  };

  const renderTabContent = () => {
    switch (selectedIndex) {
      case 0:
        return <OwnedTabContent />;
      case 1:
        return <ListingsTabContent />;
      case 2:
        return <FavouriteTabContent />;
      case 3:
        return <ActivityTabContent />;
      case 4:
        return <MoreTabContent />;
      default:
        return null;
    }
  };

  const FavouriteTabContent = () => (
    <div>
      Hello Fav
    </div>
  );

  const ActivityTabContent = () => (
    <div>
      Hello activity
    </div>
  );

  const MoreTabContent = () => (
    <div>
      Hello more
    </div>
  );

  return (
    <div className="h-120 w-full">
      <div className="flex gap-8">
        {tabs.map((tab, index) => (
          <div
            key={tab}
            className={`cursor-pointer text-[1rem] transition duration-300 pb-2 ${
              index === selectedIndex ? 'bg-gray-100 text-white border-b-2 border-white' : 'text-[#FFFFFF66]'
            }`}
            onClick={() => handleTabSelect(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="border-[0.5px] border-[#FFFFFF66]" />
      <div className='my-6 flex items-center justify-between'>
        <Filter />
        <Status />
        <div className='w-[40%]'>
          <SearchInput placeholder="Search by name" style={{ background: 'transparent' }} />
        </div>
        <PurchaseHistory />
        <div className='bg-transparent flex items-center justify-center border border-[#FFFFFF66] py-2 w-[5rem] rounded-lg'>
          <div>{ListIcon}</div>
          <div className="ml-2">{ListIconI}</div>
        </div>
      </div>
      <div className="my-20 bg-[#1E1A2F]" style={{ flex: '1' }}>
        {renderTabContent()}
      </div>
    </div>
  );
};

export default OwnedPropertiesTab;