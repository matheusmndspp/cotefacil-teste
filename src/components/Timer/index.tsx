'use client'

import { useState, useEffect } from 'react'
import { formatTime } from '@/utils/formatTime'
import Button from '@/components/Button'

type Mode = 'down' | 'up'

export default function Timer() {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [mode, setMode] = useState<Mode>('down')

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>
    if (isRunning) {
      timer = setInterval(() => {
        setTime(prev => {
          if (mode === 'down') {
            if (prev > 0) {
              return prev - 1
            } else {
              setIsRunning(false)
              setMode('down')
              return 0
            }
          } else {
            return prev + 1
          }
        })
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [isRunning, mode])

  return (
    <div className='flex flex-col items-center gap-6'>
      <h1 className='text-3xl font-bold'>
        {isRunning
          ? mode === 'down'
            ? 'Timer regressivo'
            : 'Cronômetro'
          : 'Contador'}
      </h1>

      <div
        className={`text-6xl font-bold ${time % 2 === 0 ? 'text-green-500' : 'text-black'} ${
          !isRunning ? 'cursor-pointer hover:scale-105 transition-transform' : ''
        }`}
        onClick={() => !isRunning && setTime(prev => prev + 1)}
      >
        {isRunning ? formatTime(time) : time}
      </div>

      <div className='flex gap-4'>
        <Button
          label={isRunning ? 'Parar' : 'Iniciar cronômetro'}
          onClick={() => {
            if (!isRunning && time === 0) return
            setIsRunning(!isRunning)
          }}
          color={isRunning ? 'bg-red-500' : 'bg-green-500'}
          hoverColor={isRunning ? 'hover:bg-red-600' : 'hover:bg-green-600'}
          disabled={!isRunning && time === 0}
        />

        <Button
          label='Resetar'
          onClick={() => {
            setTime(0)
            setIsRunning(false)
            setMode('down')
          }}
          color='bg-blue-500'
          hoverColor='hover:bg-blue-600'
        />

        {isRunning && (
          <Button
            label={mode === 'down' ? 'Mudar para Cronômetro' : 'Mudar para Timer'}
            onClick={() => setMode(mode === 'down' ? 'up' : 'down')}
            color='bg-purple-500'
            hoverColor='hover:bg-purple-600'
          />
        )}
      </div>
    </div>
  )
}
