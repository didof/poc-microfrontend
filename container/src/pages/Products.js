import React from 'react'

// import ProductsMounter from '../mfe.mount/ProductsMounter'

export default () => {
  return (
    <div>
      {/* <ProductsMounter /> */}
      <mfe-products
        config={JSON.stringify({
          historyType: 'memory',
        })}
      ></mfe-products>
    </div>
  )
}
