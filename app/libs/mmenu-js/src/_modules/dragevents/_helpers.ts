/**
 * Calculate a distance from a percentage.
 * @param  {string|number}   position   The percentage (e.g. "75%").
 * @param  {number}          size       The available width or height in pixels.
 * @return {number}                     The calculated distance.
 */
export const percentage2number = (position: string | number, size: number) => {
    if (typeof position == 'string') {
        if (position.slice(-1) == '%') {
            position = parseInt(position.slice(0, -1), 10);
            position = size * (position / 100);
        }
    }
    return position;
};
