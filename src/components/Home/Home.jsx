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
import propertyData from '../../data/propertise.json'
import RightSidebar from '../RightSidebar';


const Home = () => {
  const [selectedProperty, setSelectedProperty] = useState(propertyData[0]);
  const [selectedBHK, setSelectedBHK] = useState(selectedProperty.apartments[0]);

  return (
    <div>
      <HeroSection images={selectedProperty.hero_images} />
      <div class="flex">
        <div class="w-2/3">
      <PropertyDetails property={selectedProperty} />
      <BhkOptions bhkOptions={selectedProperty.apartments} onSelectBHK={setSelectedBHK} />
      <Description text={selectedProperty.description} />
      <PropertyOverview details ={selectedProperty.property_overview} />
      <Amenities list={selectedProperty.amenities} />
      <FloorPlans plans={selectedProperty.floor_plans} />
      <PropertyInformation mapUrl={selectedProperty.mapUrl} googleMapLink={selectedProperty.googleMapLink} />
      
      
      </div>

      <div class="w-1/3">
      <RightSidebar agent_details={selectedProperty.agent}/>
      </div >
      </div>
      <div>
      <SimilarProperties properties={selectedProperty.similar_projects}  />
      </div>
      
    
    </div>
  );
};

export default Home;
