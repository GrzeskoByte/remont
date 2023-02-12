import React, { useState } from 'react';

import {
    ProFormDatePicker,
    ProFormSelect,
    ProFormText,
    QueryFilter
} from '@ant-design/pro-components';


const ProductFilter = ({ products, onFilter }) => {
  const categories = ["narzędzia","cement","ogród", "wykończenie","tynki","farby"];

  return (
    <QueryFilter layout="vertical" className='main_filters'>
        <ProFormText name="name" label="Wyszukaj" placeholder="Wyszukaj produkt"/>
        <ProFormDatePicker name="birth" label="Data" placeholder="Data wystawienia" />
        <ProFormSelect
            name="select"
            label="Select"
            valueEnum={categories}
            placeholder="Please select a country"
        />
    </QueryFilter>
  );
};

export default ProductFilter;
