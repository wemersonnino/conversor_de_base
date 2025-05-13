export const extendedEuclid = (a: number, b: number): string[] => {
    const steps: string[] = [];
    let old_r = a, r = b;
    let old_s = 1, s = 0;
    let old_t = 0, t = 1;

    steps.push(`Iniciando com: a=${a}, b=${b}`);

    while (r !== 0) {
        const quotient = Math.floor(old_r / r);
        [old_r, r] = [r, old_r - quotient * r];
        [old_s, s] = [s, old_s - quotient * s];
        [old_t, t] = [t, old_t - quotient * t];

        steps.push(`${old_r} = ${old_s} * ${a} + ${old_t} * ${b}`);
    }

    steps.push(`MDC(${a},${b}) = ${old_r} = (${old_s})*${a} + (${old_t})*${b}`);
    return steps;
};
