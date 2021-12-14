import React, { useState, useEffect } from 'react';

import { CircularProgress } from '@material-ui/core'

import { commerce } from '../../lib/commerce';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';

const steps = ['Adres dostawy', 'Szczegóły dotyczące płatności'];

const Checkout = ({ cart, onCaptureCheckout, order, error }) => {

  const [checkoutToken, setCheckoutToken] = useState(null);
   const [shippingData, setShippingData] = useState({});
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
    setShippingData(data)

    nextStep()
}

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);


  let Confirmation = ()  => (order.customer ? (
  <>
    <div className="--form">
      <h1 style={{ textAlign: 'center', margin: '25px' }}>Potwierdzenie</h1>
    </div>
  </>
  ): (
    <div className="--form">
      <CircularProgress/>
    </div>
  ));

  if (error) {
    Confirmation = () => (
      <>
        <div className="--form">
        <h1 style={{ textAlign: 'center', margin: '25px' }}>Niestety możemy zrelizować twojego zamównienia :/ {error}</h1>
        </div>
        
      </>
    );
  }

  const Form = () => activeStep === 0 
    ? <AddressForm 
      checkoutToken={checkoutToken} 
      setShippingData={setShippingData}
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
      <div className="h-full w-full xl:rounded-3xl bg-white flex flex-col overflow-hidden border-box checkout-form">
        <div className="steps">
          {steps.map((label) => (
              <div className="step" key={label}>
                <label><a>{label}</a></label>
              </div>
            ))}
        </div>
        {activeStep === steps.length ? <Confirmation /> : checkoutToken &&  <Form />}
      </div>
    )
}

export default Checkout
