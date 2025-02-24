import React from 'react'

const Dropdown = ({ options, label, onChange }) => {
  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value)
    }
  }

  return (
    <div className="dropdown">
      <label htmlFor={label}>{label}</label>
      <select id={label} onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown