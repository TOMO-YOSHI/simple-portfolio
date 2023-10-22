import React from 'react'

export interface ExperienceProps {
  percentage?: number;
}


export function Experience({ percentage = 100 }: ExperienceProps) {
  return (
    <div>{percentage}</div>
  )
}

export default Experience;
