import React, { useState, useEffect } from 'react';


import { commerce } from '../../lib/commerce';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';



const steps = ['Adres dostawy', 'Szczegóły dotyczące płatności'];

const Checkout = ({ cart, onCaptureCheckout, order, error }) => {

  const [checkoutToken, setCheckoutToken] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  const Confirmation = () => (

    <div className="--form">
      <h1>Potwierdzenie</h1>
    </div>

  )

  const Form = () => activeStep == 0 
    ? <AddressForm />
    : <PaymentForm />


    return (
      <div className="h-full w-full rounded-3xl bg-white flex flex-col overflow-hidden border-box checkout-form">
        <div className="steps">
          {steps.map((label) => (
              <div className="step" key={label}>
                <label>{label}</label>
              </div>
            ))}
        </div>
        {activeStep === steps.length ? <Confirmation /> :  <Form />}
      </div>
    )
}

export default Checkout
