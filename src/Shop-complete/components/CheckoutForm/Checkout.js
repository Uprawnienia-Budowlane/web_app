import React from 'react'

import { commerce } from '../../lib/commerce';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';

const steps = ['Adres dostawy', 'Szczegóły dotyczące płatności'];

const Checkout = () => {

  

    return (
      <div className="h-full w-full rounded-3xl bg-white flex flex-col overflow-hidden border-box checkout-form">
        <div className="steps">
          {steps.map((label) => (
              <div className="step" key={label}>
                <label>{label}</label>
              </div>
            ))}
            
        </div>
      </div>
    )
}

export default Checkout
