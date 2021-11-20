import React from 'react'

const Review = ({ checkoutToken }) => {
    return (
        <>
            <ul style={{ margin: '15px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                {checkoutToken.live.line_items.map((product) => (
                    <li style={{ alignSelf: 'center', textAlign: 'center' }} key={product.name}>
                        <ul>
                            <li>{product.name}</li>
                            <li>{`ilość: ${product.quantity}`}</li>
                            <li>{`Łączna cena: ${product.line_total.formatted_with_symbol}`}</li>
                        </ul>
                        
                    </li>
                    
                ))}
                <span style={{ margin: '15px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <h1 style={{ alignSelf: 'center', textAlign: 'center' }}>Calosc:</h1>
                <p style={{ alignSelf: 'center', textAlign: 'center' }}>{checkoutToken.live.subtotal.formatted_with_symbol}</p>
                </span>
            </ul>
        </>
    )
}

export default Review