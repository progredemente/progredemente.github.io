export function getColors(keys) {
    let colors = [];
    for(let i = 0; i < keys.length; i++){
        colors.push({ key: keys[i], color: `hsl(${360 * i / keys.length}, 50%, 50%)`});
    }
    return colors;
}