/* eslint-disable no-nested-ternary */
import React from 'react'

import styled from './Badge.module.css'

// sementara pakai nested ternary
const Badge = ({ badge }: { badge: string }) => {
  return badge === 'react' ? (
    <div className={styled.react}>React</div>
  ) : badge === 'bootstrap' ? (
    <div className={styled.bootstrap}>Bootstrap</div>
  ) : badge === 'express' ? (
    <div className={styled.express}>Express</div>
  ) : badge === 'nextjs' ? (
    <div className={styled.nextjs}>Next.js</div>
  ) : (
    <div className={styled.tailwindcss}>Tailwindcss</div>
  )
}

export default Badge
