"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AnnuitySandbox: React.FC = () => {
    const [principal, setPrincipal] = useState<number>(100000);
    const [interestRate, setInterestRate] = useState<number>(5);
    const [years, setYears] = useState<number>(30);
    const [monthlyPayment, setMonthlyPayment] = useState<string>('');

    const calculateAnnuity = () => {
        const p = principal;
        const r = interestRate / 100 / 12;
        const n = years * 12;

        if (p > 0 && r > 0 && n > 0) {
            const payment = p * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            setMonthlyPayment(payment.toFixed(2));
        } else {
            setMonthlyPayment('Input tidak valid');
        }
    };

    return (
        <Card className="max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Kalkulator Pembayaran Anuitas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <Label htmlFor="principal">Jumlah Pinjaman (P)</Label>
                    <Input id="principal" type="number" value={principal} onChange={e => setPrincipal(Number(e.target.value))} />
                </div>
                <div>
                    <Label htmlFor="interest">Suku Bunga Tahunan (%)</Label>
                    <Input id="interest" type="number" value={interestRate} onChange={e => setInterestRate(Number(e.target.value))} />
                </div>
                <div>
                    <Label htmlFor="years">Jangka Waktu (Tahun)</Label>
                    <Input id="years" type="number" value={years} onChange={e => setYears(Number(e.target.value))} />
                </div>
                <Button onClick={calculateAnnuity}>Hitung Pembayaran Bulanan</Button>
                {monthlyPayment && (
                    <div className="pt-4">
                        <h3 className="font-semibold">Pembayaran Bulanan Anda:</h3>
                        <p className="text-2xl font-bold">${monthlyPayment}</p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default AnnuitySandbox;
