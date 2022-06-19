export function mod(n: number, m: number) {
    const remainder = n % m;
    return Math.floor(remainder >= 0 ? remainder : remainder + m);
}
