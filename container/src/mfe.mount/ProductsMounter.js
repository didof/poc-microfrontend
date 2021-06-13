import React from 'react'

import mount from 'products/bootstrap/mount'

export default () => {
  const ref = React.useRef()

  React.useEffect(() => {
    mount(ref.current)
  }, [])

  return <div ref={ref} />
}
