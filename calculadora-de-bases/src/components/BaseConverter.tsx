"use client";
import { useState } from "react";
import { convertBaseWithSteps } from "@/utils/baseConversion";

export const BaseConverter = () => {
    const [fromBase, setFromBase] = useState("10");
    const [toBase, setToBase] = useState("2");
    const [number, setNumber] = useState("");
    const [result, setResult] = useState<string[]>([]);

    const handleConvert = () => {
        const steps = convertBaseWithSteps(number, parseInt(fromBase), parseInt(toBase));
        setResult(steps);
    };

    const handleReset = () => {
        setFromBase("10");
        setToBase("2");
        setNumber("");
        setResult([]);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-r from-green-500 to-green-800">
            <h1 className="text-white text-4xl font-bold mt-10">Conversor de Base</h1>
            <p className="text-white mb-6">Selecione as bases, digite o número e clique em calcular</p>

            <div className="flex gap-4 mb-4 items-center my-4">
                <span className="text-white font-semibold">De:</span>
                <select className="p-2 rounded bg-green-900 text-white" value={fromBase} onChange={(e) => setFromBase(e.target.value)}>
                    <option value="2">Binário</option>
                    <option value="10">Decimal</option>
                    <option value="16">Hexadecimal</option>
                </select>

                <span className="text-white font-semibold">Para:</span>
                <select className="p-2 rounded bg-green-900 text-white" value={toBase} onChange={(e) => setToBase(e.target.value)}>
                    <option value="2">Binário</option>
                    <option value="10">Decimal</option>
                    <option value="16">Hexadecimal</option>
                </select>
            </div>

            <input
                type="text"
                className="w-80 text-center p-2 rounded mb-4"
                placeholder="Digite o número"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />

            <div className="flex gap-2">
                <button className="bg-blue-900 hover:bg-blue-700 text-white py-2 px-6 rounded-full" onClick={handleConvert}>
                    Converter
                </button>
                <button className="bg-red-700 hover:bg-red-600 text-white py-2 px-6 rounded-full" onClick={handleReset}>
                    Limpar
                </button>
            </div>

            <div className="text-white mt-4 max-w-xl text-center my-4">
                {result.map((step, i) => (
                    <p className="text-2xl font-medium" key={i}>{step}</p>
                ))}
            </div>
        </div>
    );
};
