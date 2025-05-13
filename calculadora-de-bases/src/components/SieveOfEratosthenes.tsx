"use client";
import { useState } from "react";
import { sieveOfEratosthenes } from "@/utils/sieve";

export const SieveOfEratosthenes = () => {
    const [limit, setLimit] = useState("");
    const [steps, setSteps] = useState<string[]>([]);
    const [primes, setPrimes] = useState<number[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLimit(e.target.value);
    };

    const handleCalculate = () => {
        const { steps, primes } = sieveOfEratosthenes(parseInt(limit));
        setSteps(steps);
        setPrimes(primes);
    };

    const handleReset = () => {
        setLimit("");
        setSteps([]);
        setPrimes([]);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-r from-green-500 to-green-800">
            <h1 className="text-white text-3xl font-bold mb-4">Crivo de Eratóstenes</h1>

            <input
                type="number"
                className="w-80 p-2 rounded mb-4 text-center"
                placeholder="Digite um número"
                value={limit}
                onChange={handleInputChange}
            />

            <div className="flex gap-2">
                <button className="bg-blue-900 hover:bg-blue-700 text-white py-2 px-6 rounded-full" onClick={handleCalculate}>
                    Calcular
                </button>
                <button className="bg-red-700 hover:bg-red-600 text-white py-2 px-6 rounded-full" onClick={handleReset}>
                    Limpar
                </button>
            </div>

            <div className="text-white mt-4 text-center max-w-xl overflow-auto">
                {steps.map((step, i) => (
                    <p key={i}>{step}</p>
                ))}
            </div>
            <div className="text-white mt-4 text-center max-w-xl">
                {primes.length > 0 && (
                    <p className="text-2xl font-medium font-sans">Primos encontrados: {primes.join(", ")}</p>
                )}
            </div>
        </div>
    );
};
