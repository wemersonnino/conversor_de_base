export const sieveOfEratosthenes = (n: number): { steps: string[], primes: number[] } => {
    const steps: string[] = [];
    const primes = Array(n).fill(true);
    primes[0] = primes[1] = false;

    for (let i = 2; i < Math.sqrt(n); i++) {
        if (primes[i]) {
            steps.push(`Número primo encontrado: ${i}`);
            for (let j = i * i; j < n; j += i) {
                primes[j] = false;
                steps.push(`Marcando múltiplo ${j} de ${i} como não primo`);
            }
        }
    }

    const primeNumbers = primes.map((prime, idx) => prime ? idx : null).filter(Number) as number[];
    steps.push(`Primos encontrados: ${primeNumbers.join(", ")}`);

    return { steps, primes: primeNumbers };
};