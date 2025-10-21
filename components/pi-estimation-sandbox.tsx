"use client"

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const PiEstimationSandbox: React.FC = () => {
    const [points, setPoints] = useState<{ x: number; y: number; inCircle: boolean }[]>([]);
    const [piEstimate, setPiEstimate] = useState<number | null>(null);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameId = useRef<number>();

    const SIZE = 200; // Canvas size

    const draw = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, SIZE, SIZE);

        // Draw square and circle quadrant
        ctx.strokeStyle = '#888';
        ctx.lineWidth = 1;
        ctx.strokeRect(0, 0, SIZE, SIZE);
        ctx.beginPath();
        ctx.arc(0, 0, SIZE, 0, Math.PI / 2);
        ctx.stroke();

        // Draw points
        for (const point of points) {
            ctx.fillStyle = point.inCircle ? '#34D399' : '#F87171';
            ctx.beginPath();
            ctx.arc(point.x * SIZE, point.y * SIZE, 2, 0, 2 * Math.PI);
            ctx.fill();
        }
    };

    useEffect(() => {
        draw();
    }, [points]);

    const addPoint = () => {
        const x = Math.random();
        const y = Math.random();
        const inCircle = x * x + y * y <= 1;

        setPoints(prevPoints => {
            const newPoints = [...prevPoints, { x, y, inCircle }];
            const inCircleCount = newPoints.filter(p => p.inCircle).length;
            setPiEstimate((4 * inCircleCount) / newPoints.length);
            return newPoints;
        });
    };

    const startSimulation = () => {
        setIsRunning(true);
        animationFrameId.current = window.setInterval(() => {
            addPoint();
        }, 50);
    };

    const stopSimulation = () => {
        setIsRunning(false);
        if (animationFrameId.current) {
            clearInterval(animationFrameId.current);
        }
    };

    const resetSimulation = () => {
        stopSimulation();
        setPoints([]);
        setPiEstimate(null);
    };

    useEffect(() => {
        return () => stopSimulation(); // Cleanup on unmount
    }, []);

    return (
        <div className="flex flex-col items-center gap-4">
            <canvas ref={canvasRef} width={SIZE} height={SIZE} className="border rounded-lg bg-background" />
            <div className="flex gap-4">
                <Button onClick={startSimulation} disabled={isRunning}>Mulai</Button>
                <Button onClick={stopSimulation} disabled={!isRunning}>Stop</Button>
                <Button variant="outline" onClick={resetSimulation}>Reset</Button>
            </div>
            <div className="text-center">
                <Label>Estimasi Pi:</Label>
                <p className="text-2xl font-bold">{piEstimate ? piEstimate.toFixed(6) : 'N/A'}</p>
                <Label>Jumlah Titik:</Label>
                <p className="font-mono">{points.length}</p>
            </div>
        </div>
    );
};

export default PiEstimationSandbox;
