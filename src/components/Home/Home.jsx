import React, { useState } from 'react';
import HeroSection from '../HeroSection';
import PropertyDetails from '../PropertyDetails';
import BhkOptions from '../BhkOption';
import Description from '../Description';
import PropertyOverview from '../PropertyOverview';
import Amenities from '../Aminities';
import FloorPlans from '../FloorPlans';
import PropertyInformation from '../PropertyInformation';
import SimilarProperties from '../SimilarProperties';
import propertyData from '../../data/propertise.json';
import RightSidebar from '../RightSidebar';
import LoginPage from '../login/Login.jsx';

import { TextField, InputAdornment, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
  const [selectedProperty, setSelectedProperty] = useState(propertyData[0]);
  const [selectedBHK, setSelectedBHK] = useState(selectedProperty.apartments[0]);
  const [searchTerm, setSearchTerm] = useState('');

  // 🔍 Filter based on property name or location
  const filteredProperties = propertyData.filter((property) =>
    property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const handlePropertySelection = (property) => {
    if (!property) return;
    setSelectedProperty(property);
  };

  
  return (
    <div>

      {/* 🔍 Search Bar */}
      <div className="flex justify-center my-6">
        <Paper
          elevation={3}
          className="w-full max-w-xl p-2 rounded-full shadow-md"
          style={{ backgroundColor: '#f9f9f9' }}
        >
          <TextField
            fullWidth
            variant="standard"
            placeholder="Search by property name or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon className="text-gray-500" />
                </InputAdornment>
              ),
              style: {
                paddingLeft: 8,
                fontSize: '16px',
              },
            }}
          />
        </Paper>
      </div>

      <HeroSection images={selectedProperty.hero_images} />

      
      <div className="flex justify-between max-w-full mx-auto gap-10">
        <div className="w-[60%] p-4">
          <PropertyDetails property={selectedProperty} />
          <BhkOptions bhkOptions={selectedProperty.apartments} onSelectBHK={setSelectedBHK} />
          <Description text={selectedProperty.description} />
          <PropertyOverview details={selectedProperty.property_overview} />
          <Amenities list={selectedProperty.amenities} />
          <FloorPlans plans={selectedProperty.floor_plans} />
          <PropertyInformation mapUrl={selectedProperty.mapUrl} googleMapLink={selectedProperty.googleMapLink} />
        </div>

        <div className="w-[30%]">
          <RightSidebar agent_details={selectedProperty.agent} />
        </div>
      </div>

      <div>
        <SimilarProperties properties={filteredProperties} OnSelect={handlePropertySelection} />
      </div>
    </div>
  );
};

export default Home;
