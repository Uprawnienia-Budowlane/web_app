import React, { useState, useEffect } from 'react';


import { commerce } from '../../lib/commerce';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';

const steps = ['Adres dostawy', 'Szczegóły dotyczące płatności'];

const Checkout = ({ cart, onCaptureCheckout, order, error }) => {

  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setshippingData] = useState({})
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });

          setCheckoutToken(token);
        } catch (error) {
          
        }
      };

      generateToken();
    }
  }, [cart]);

  const next = (data) => {
    setshippingData(data)

    nextStep()
}

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);


  const Confirmation = () => (

    <div className="--form">
      <h1>Potwierdzenie</h1>
    </div>

  )

  const Form = () => activeStep === 0 
    ? <AddressForm 
      checkoutToken={checkoutToken} 
      next={next}
      />
    : <PaymentForm 
      checkoutToken={checkoutToken} 
      shippingData={shippingData}
      nextStep={nextStep} 
      backStep={backStep} 
      onCaptureCheckout={onCaptureCheckout} 
      />


    return (
      <div className="h-full w-full rounded-3xl bg-white flex flex-col overflow-hidden border-box checkout-form">
        <div className="steps">
          {steps.map((label) => (
              <div className="step" key={label}>
                <label>{label}</label>
              </div>
            ))}
        </div>
        {activeStep === steps.length ? <Confirmation /> : checkoutToken &&  <Form />}
      </div>
    )
}

export default Checkout
