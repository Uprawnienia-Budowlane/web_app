import React, { useState, useEffect } from 'react'
import { useForm, FormProvider } from 'react-hook-form';

import { commerce } from '../../lib/commerce'

const AddressForm = ({ checkoutToken, next }) => {  
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState(''); 
    const methods = useForm(); 

    

    return (
        <div className="--form address">
        <h1>Adres dostawy</h1>
        <form className="address-form" onSubmit="">
                <FormProvider {...methods}>
                <label>imie</label>
                <input required name="firstName" label="First name" />
                <label>nazwisko</label>
                <input required name="lastName" label="Last name" />
                <label>adres e-mail</label>
                <input required name="address1" label="Address line 1" />
                <label>numer domu/mieszkania</label>
                <input required name="email" label="Email" />
                <label>ulica</label>
                <input required name="city" label="City" />
                <label>kod pocztowy</label>
                <input required name="zip" label="Zip / Postal code" />

              
               


                <button className="payment-btn">przejdź do płatnosci</button>

                </FormProvider>
        </form>
        </div>
    )
}

export default AddressForm
