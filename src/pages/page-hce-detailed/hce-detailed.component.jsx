import React from 'react';
import { useSelector } from 'react-redux';
import HceDetailedEnemyList from '../../components/hce-detailed-enemy-list/hce-detailed-enemy-list.component';

import HceDetailedHeader from '../../components/hce-detailed-header/hce-detailed-header.component';
import HceDetailedMap from '../../components/hce-detailed-map/hce-detailed-map.component';
import SectionTitle from '../../components/section-title/section-title.component';

import './hce-detailed.styles.scss';

export default function HceDetailedPage({match}) {
  
  const {expeditions} = useSelector((state) => state.expedition);

  const searchedExpedition = expeditions.find((expedition) => expedition.uniqueName === match.params.uniqueName); 

  return (
    <div className='hce-detailed'>
      <HceDetailedHeader expedition={searchedExpedition}/>
      <SectionTitle content='Map'/>
      <HceDetailedMap/>
      <SectionTitle content='Enemies'/>
      <HceDetailedEnemyList expedition={searchedExpedition}/>
    </div>
  );
}