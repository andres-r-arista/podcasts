import React from 'react'

export const Badge = ({label, className}) => {
  return (
    <div className={`px-1 rounded-lg self-center ${className}`}>{label}</div>
  )
}
