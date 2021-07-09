import React from 'react'

export default () => {
  return (
    <div>
      <mfe-products
        config={encodeURIComponent(
          JSON.stringify({
            historyType: 'memory',
          })
        )}
      ></mfe-products>
    </div>
  )
}
