import bestContrast from 'get-best-contrast-color';

export function getTailwindColorValue (themeConfig: any, tailwindColor: string) {
  return themeConfig.tailwind.theme.colors[tailwindColor.split('-')[0]][tailwindColor.split('-')[1]];
}

export function colorContrast(theme: any, color: string, isTailwindColor: boolean = false) {
  const colorHex = isTailwindColor ?
    getTailwindColorValue(theme, color)
    : getTailwindColorValue(theme, theme.palette[color]);

    // we'll be grabbing the tailwind color class after we determined the appropriate contrast
    const textColors = {
      [theme.palette['white']]: getTailwindColorValue(theme, theme.palette['white']),
      [theme.palette['black']]: getTailwindColorValue(theme, theme.palette['black']),
    }
  
    // determined the appropriate color contrast
    const colorContrastFromBg = bestContrast(colorHex, [
      getTailwindColorValue(theme, theme.palette['white']),
      getTailwindColorValue(theme, theme.palette['black'])
    ]);
  
    // grab the tailwind color class
    for (const color in textColors) {
      if (colorContrastFromBg === textColors[color]) {
        return color
      }
    }

    return color
}

/**
 * Darken or lighten the color e.g blue-300 -> blue-400
 * @param colorPallete color name e.g blue, green
 * @param inc numeric scale (100 - 900)
 */
export function darkenLightenPallete(type: string, colorPallete: string, scale: number = 100) {
  const colorName = colorPallete.split('-')[0] || colorPallete.split('-');
  const numericScale = Number(colorPallete.split('-')[1]) || 100
  let res = numericScale;

  if (type === 'lighten') {
    res = (numericScale - scale) <= 0 ?  numericScale + scale : (numericScale - scale)
  } else if (type === 'darken') {
    res = (numericScale + scale) >= 1000 ?  numericScale - scale : (numericScale + scale)
  } else {
    console.warn('missing type');
  }

  return `${colorName}-${res}`
}

/**
 * Darken color e.g blue-300 -> blue-400
 * @param colorPallete color name e.g blue, green
 * @param inc numeric scale (100 - 900)
 */
export function darkenPallete(colorPallete: string, scale: number = 100) {
  return darkenLightenPallete('darken', colorPallete, scale)
}

/**
 * Lighten color e.g blue-300 -> blue-200
 * @param colorPallete color name e.g blue, green
 * @param inc numeric scale (100 - 900)
 */
export function lightenPallete(colorPallete: string, scale: number = 100) {
  return darkenLightenPallete('lighten', colorPallete, scale)
}

/**
 * Get color's name (blue, red, green)
 * @param color 
 */
export function colorName(color: string) {
  return color.split('-')[0] || ''
}

/**
 * Get color's scale (100 - 900)
 * @param color 
 */
export function colorScale(color: string) {
  return color.split('-')[1] || ''
}