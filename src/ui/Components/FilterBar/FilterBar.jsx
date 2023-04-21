import React from 'react'
import { Badge } from '../Badge/'

export const FilterBar = ({podcastsAmount, onChange}) => {
  return (
    <div className="flex justify-end mr-4">
        <Badge label={podcastsAmount} className='mr-2 bg-sky-800 text-white font-bold' />
        <input type="text" className="border text-sm px-2 py-1 w-64 rounded" onChange={onChange} placeholder='Filter podcasts...'/>
    </div>
  )
}
