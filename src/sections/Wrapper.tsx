import React, { ComponentType } from "react"

const Wrapper = (Component: ComponentType) => {
  return function WrappedComponent() {
    return (
      <div className="content">
        <Component />
      </div>
    )
  }
}

export default Wrapper
