import React from 'react';
import { useSelector } from 'react-redux';

import PageHeader from '../../components/page-header/page-header.component';
import HceList from '../../components/hce-list/hce-list.component';

import './hce.styles.scss';

export default function HcePage() {

  const {pageHeaders} = useSelector((state) => state.pageHeader);
  const {title, description} = pageHeaders['hce'];

  return (
    <div className='hce'>
      <PageHeader title={title} description={description}/>
      <HceList/>
    </div>
  );
}