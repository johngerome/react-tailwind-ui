import { darkenPallete, lightenPallete, colorName, colorScale } from './color'

test('Darken color pallete', () => {
  expect(darkenPallete('blue-100')).toBe('blue-200')
});

test('Lighten color pallete', () => {
  expect(lightenPallete('blue-200')).toBe('blue-100')
});

test('Darken 900', () => {
  expect(darkenPallete('blue-900')).toBe('blue-800')
});

test('Lighten 100', () => {
  expect(lightenPallete('blue-100')).toBe('blue-200')
});

test('toPalleteName()', () => {
  expect(colorName('blue-900')).toBe('blue')
})

test('colorScale()', () => {
  expect(colorScale('blue-900')).toBe('900')
})

test('colorScale() with empty scale', () => {
  expect(colorScale('blue')).toBe('')
})