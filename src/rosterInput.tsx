import React from 'react';

const RosterInput = ({value, onChange}: {value: string, onChange(e: string): void}) => {
  return (
    <input value={value} onChange={e => onChange(e.target.value)} type='text' />
    )
}

export default RosterInput;
