"use client";
import { useState } from "react";
import { extendedEuclid } from "@/utils/euclidean";

export const EuclideanAlgorithm = () => {
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [steps, setSteps] = useState<string[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "a") setA(value);
        else if (name === "b") setB(value);
    };

    const handleCalculate = () => {
        const result = extendedEuclid(parseInt(a), parseInt(b));
        setSteps(result);
    };

    const handleReset = () => {
        setA("");
        setB("");
        setSteps([]);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-r from-green-500 to-green-800">
            <h1 className="text-white text-3xl font-bold mb-4">Algoritmo Estendido de Euclides</h1>

            <div className="flex gap-2">
                <input
                    name="a"
                    type="number"
                    className="p-2 rounded"
                    placeholder="a"
                    value={a}
                    onChange={handleInputChange}
                />
                <input
                    name="b"
                    type="number"
                    className="p-2 rounded"
                    placeholder="b"
                    value={b}
                    onChange={handleInputChange}
                />
            </div>

            <div className="flex gap-2 mt-4">
                <button className="bg-blue-900 hover:bg-blue-700 text-white py-2 px-6 rounded-full" onClick={handleCalculate}>
                    Calcular
                </button>
                <button className="bg-red-700 hover:bg-red-600 text-white py-2 px-6 rounded-full" onClick={handleReset}>
                    Limpar
                </button>
            </div>

            <div className="text-white mt-4 text-center max-w-xl">
                {steps.map((step, i) => (
                    <p key={i}>{step}</p>
                ))}
            </div>
        </div>
    );
};
