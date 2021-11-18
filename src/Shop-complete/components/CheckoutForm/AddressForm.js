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

    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
    
        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);
      };
    
      const fetchSubdivisions = async (countryCode) => {
        const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
    
        setShippingSubdivisions(subdivisions);
        setShippingSubdivision(Object.keys(subdivisions)[0]);
      };
    
      const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });
    
        setShippingOptions(options);
        setShippingOption(options[0].id);
      };
    
      useEffect(() => {
        fetchShippingCountries(checkoutToken.id);
      }, []);
    
      useEffect(() => {
        if (shippingCountry) fetchSubdivisions(shippingCountry);
      }, [shippingCountry]);
    
      useEffect(() => {
        if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
      }, [shippingSubdivision])


    return (
        <div className="--form address">
        <h1>Adres dostawy</h1>
        <form className="address-form" onSubmit={methods.handleSubmit((data) => next({ ...data, shippingCountry, shippingSubdivision, shippingOption }))}>
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

              
               <select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                {Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
                </select>
                <label>wojewodztwo</label>
                
                <select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                {Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
                </select>

                <label>opcja wysyłki</label>
                
                <select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                {shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` })).map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
                </select>


                <button className="payment-btn">przejdź do płatnosci</button>

                </FormProvider>
        </form>
        </div>
    )
}

export default AddressForm