export const convertBaseWithSteps = (numStr: string, fromBase: number, toBase: number): string[] => {
    const steps: string[] = [];
    let decimal = parseInt(numStr, fromBase);
    steps.push(`Convertendo ${numStr} da base ${fromBase} para decimal: ${decimal}`);

    if (toBase === 10) return steps;

    let result = "";
    const digits = "0123456789ABCDEF";

    while (decimal > 0) {
        const remainder = decimal % toBase;
        steps.push(`${decimal} ÷ ${toBase} = ${Math.floor(decimal / toBase)}, resto: ${remainder}`);
        result = digits[remainder] + result;
        decimal = Math.floor(decimal / toBase);
    }

    steps.push(`<h3>Resultado final</h3>: ${result}`);
    return steps;
};
