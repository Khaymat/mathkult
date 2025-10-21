"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface GcdStep {
    a: number;
    b: number;
    remainder: number;
    description: string;
}

const GcdSandbox: React.FC = () => {
    const [numA, setNumA] = useState<number>(48);
    const [numB, setNumB] = useState<number>(18);
    const [steps, setSteps] = useState<GcdStep[]>([]);
    const [gcd, setGcd] = useState<number | null>(null);
<<<<<<< HEAD
    const [error, setError] = useState<string>('');
=======
>>>>>>> main

    const handleClear = () => {
        setNumA(48);
        setNumB(18);
        setSteps([]);
        setGcd(null);
<<<<<<< HEAD
        setError('');
    };

    const runEuclideanAlgorithm = () => {
        setSteps([]);
        setGcd(null);
        setError('');

        if (!Number.isInteger(numA) || !Number.isInteger(numB)) {
            setError('Input harus berupa bilangan bulat.');
            return;
        }

=======
    };

    const runEuclideanAlgorithm = () => {
>>>>>>> main
        let a = Math.abs(numA);
        let b = Math.abs(numB);
        const newSteps: GcdStep[] = [];

<<<<<<< HEAD
        if (a === 0 && b === 0) {
            setError('Kedua angka tidak boleh nol.');
            return;
        }

=======
>>>>>>> main
        if (a === 0 || b === 0) {
            setGcd(a + b);
            newSteps.push({ a, b, remainder: 0, description: "Salah satu angka adalah 0. FPB adalah angka lainnya." });
            setSteps(newSteps);
            return;
        }

        if (b > a) {
            [a, b] = [b, a]; // ensure a >= b
        }

        while (b !== 0) {
            const remainder = a % b;
            newSteps.push({ a, b, remainder, description: `${a} = ${Math.floor(a / b)} * ${b} + ${remainder}` });
            a = b;
            b = remainder;
        }

        setGcd(a);
        newSteps.push({ a, b: 0, remainder: 0, description: `Sisa adalah 0. FPB adalah sisa non-nol terakhir, yaitu ${a}.` });
        setSteps(newSteps);
    };

    return (
        <Card className="max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Visualisasi Algoritma Euklides (FPB)</CardTitle>
                <CardDescription>Lihat bagaimana FPB dari dua angka ditemukan langkah demi langkah.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex gap-4">
                    <div>
                        <Label htmlFor="numA">Angka A</Label>
<<<<<<< HEAD
                        <Input id="numA" type="number" value={numA} onChange={e => setNumA(parseInt(e.target.value, 10))} />
                    </div>
                    <div>
                        <Label htmlFor="numB">Angka B</Label>
                        <Input id="numB" type="number" value={numB} onChange={e => setNumB(parseInt(e.target.value, 10))} />
=======
                        <Input id="numA" type="number" value={numA} onChange={e => setNumA(Number(e.target.value))} />
                    </div>
                    <div>
                        <Label htmlFor="numB">Angka B</Label>
                        <Input id="numB" type="number" value={numB} onChange={e => setNumB(Number(e.target.value))} />
>>>>>>> main
                    </div>
                </div>
                <div className="flex gap-4">
                    <Button onClick={runEuclideanAlgorithm}>Cari FPB</Button>
                    <Button variant="outline" onClick={handleClear}>Hapus</Button>
                </div>
<<<<<<< HEAD
                {error && <p className="text-sm text-red-500">{error}</p>}
=======
>>>>>>> main
                {steps.length > 0 && (
                    <div className="pt-4 space-y-2">
                        <h3 className="font-semibold">Langkah-langkah:</h3>
                        <ul className="list-disc pl-5 text-sm">
                            {steps.map((step, index) => (
                                <li key={index}>{step.description}</li>
                            ))}
                        </ul>
                        {gcd !== null && <p className="font-bold text-lg">FPB adalah: {gcd}</p>}
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default GcdSandbox;
