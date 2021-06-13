import React from 'react'

export default () => {
  return (
    <div>
      <mfe-products
        config={JSON.stringify({
          historyType: 'memory',
        })}
      ></mfe-products>
    </div>
  )
}
