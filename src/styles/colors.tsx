export const rgba = (hex: any, alpha=1) => {
    return `rgba(${[...hex.slice(1).match(/.{1,2}/g).map( (g: any) => parseInt(g, 16)), alpha ].join(', ')})`
}

export const light_grey = '#E5E5E5';
export const blue_grey = '#7f818E';
