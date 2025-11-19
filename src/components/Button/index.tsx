type ButtonProps = {
  label: string
  onClick: () => void
  color?: string
  hoverColor?: string
  textColor?: string
  disabled?: boolean
}

export default function Button({
  label,
  onClick,
  color = 'bg-blue-500',
  hoverColor = 'hover:bg-blue-600',
  textColor = 'text-white',
  disabled = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded ${color} ${hoverColor} ${textColor} 
        transition-transform duration-200 
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-105'}`}
    >
      {label}
    </button>
  )
}
