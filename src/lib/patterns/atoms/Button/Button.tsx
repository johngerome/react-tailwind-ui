import React from 'react'
import { useTheme } from '../../../theme';
import { colorContrast, darkenPallete, colorScale, lightenPallete } from '../../../utils/color';

type ButtonProps = {
  children?: React.ReactNode
  className?: string
  /**
   * Base from theme palletes
   */
  color?: string
  component?: string
  disabled?: boolean
  endIcon?: React.ReactNode
  fullWidth?: boolean
  href?: string
  size?: 'small' | 'medium' | 'large'
  startIcon?: React.ReactNode
  textColor?: string // override text color class
  variant?: 'contained' | 'outlined' | 'text'
  onClick?: () => void
}

const Button = ({
  children,
  className = '',
  color = 'default',
  component = 'button',
  disabled = false,
  endIcon,
  fullWidth = false,
  href,
  size = 'medium',
  startIcon,
  textColor,
  variant,
  onClick,
  ...rest
}: ButtonProps) => {
  const theme = useTheme();

  const baseClass = 'px-4 py-3';

  // BG and color
  let colorClass = `bg-${theme.palette[color]}`;
  let classes = className;

  if (textColor) {
    colorClass += ` text-${textColor}`
  } else {
    colorClass += ` text-${colorContrast(theme, color)}`
  }

  // Hover
  if ((Number(colorScale(theme.palette[color])) + 100) > 900) {
    colorClass += ` hover:bg-${lightenPallete(theme.palette[color])}`
    colorClass += ` hover:text-${colorContrast(theme, `${lightenPallete(theme.palette[color])}`, true)}`
  } else {
    colorClass += ` hover:bg-${darkenPallete(theme.palette[color])}`
    colorClass += ` hover:text-${colorContrast(theme, `${darkenPallete(theme.palette[color])}`, true)}`
  }

  if (disabled) {
    colorClass += ' bg-opacity-50 text-opacity-50 hover:bg-opacity-50 hover:text-opacity-50';
    classes += ' cursor-not-allowed'
  }

  return (
    <button
      type="button"
      className={`${baseClass} ${colorClass} ${classes}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children && children}
    </button>
  )
}

export default Button
