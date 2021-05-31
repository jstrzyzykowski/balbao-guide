import React from 'react';
import PageHeader from '../../components/page-header/page-header.component';

import {headersData} from '../../api/headersData';
import HceList from '../../components/hce-list/hce-list.component';

import './hce.styles.scss';



export default function HcePage() {

  const {title, description} = headersData['hce']; 

  return (
    <div className='hce'>
      <PageHeader title={title} description={description}/>
      <HceList/>
    </div>
  );
}