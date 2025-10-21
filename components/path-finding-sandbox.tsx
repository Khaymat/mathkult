"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Basic Priority Queue implementation for A*
class PriorityQueue {
    elements: { element: any; priority: number }[];
    constructor() {
        this.elements = [];
    }
    enqueue(element: any, priority: number) {
        this.elements.push({ element, priority });
        this.elements.sort((a, b) => a.priority - b.priority);
    }
    dequeue() {
        return this.elements.shift()?.element;
    }
    isEmpty() {
        return this.elements.length === 0;
    }
}

const GRID_SIZE = 20;
const START_NODE = { row: 2, col: 2 };
const END_NODE = { row: 17, col: 17 };

<<<<<<< HEAD
type Status = 'idle' | 'running' | 'success' | 'fail';

=======
>>>>>>> main
const PathfindingSandbox: React.FC = () => {
    const [grid, setGrid] = useState<number[][]>([]);
    const [path, setPath] = useState<{ row: number; col: number }[]>([]);
    const [visited, setVisited] = useState<Set<string>>(new Set());
<<<<<<< HEAD
    const [status, setStatus] = useState<Status>('idle');
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

=======
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Function to stop any running animation
>>>>>>> main
    const stopAnimation = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
<<<<<<< HEAD
        if (status === 'running') {
            setStatus('idle');
        }
=======
        setIsRunning(false);
>>>>>>> main
    };

    const resetGrid = () => {
        stopAnimation();
<<<<<<< HEAD
        setStatus('idle');
        const newGrid = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(0));
=======
        const newGrid = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(0));
        // Add some random walls
>>>>>>> main
        for (let i = 0; i < GRID_SIZE * GRID_SIZE * 0.2; i++) {
            const row = Math.floor(Math.random() * GRID_SIZE);
            const col = Math.floor(Math.random() * GRID_SIZE);
            if ((row !== START_NODE.row || col !== START_NODE.col) && (row !== END_NODE.row || col !== END_NODE.col)) {
<<<<<<< HEAD
                newGrid[row][col] = 1;
=======
                newGrid[row][col] = 1; // 1 represents a wall
>>>>>>> main
            }
        }
        setGrid(newGrid);
        setPath([]);
        setVisited(new Set());
    };

    useEffect(() => {
        resetGrid();
<<<<<<< HEAD
=======
        // Cleanup on unmount
>>>>>>> main
        return () => stopAnimation();
    }, []);

    const toggleWall = (row: number, col: number) => {
<<<<<<< HEAD
        if (status === 'running') return;
=======
        if (isRunning) return; // Don't allow changes while running
        // Prevent toggling start/end nodes
>>>>>>> main
        if ((row === START_NODE.row && col === START_NODE.col) || (row === END_NODE.row && col === END_NODE.col)) return;

        const newGrid = grid.map(r => [...r]);
        newGrid[row][col] = newGrid[row][col] === 0 ? 1 : 0;
        setGrid(newGrid);
    };

    const heuristic = (a: { row: number, col: number }, b: { row: number, col: number }) => {
        return Math.abs(a.row - b.row) + Math.abs(a.col - b.col);
    };

    const aStar = () => {
<<<<<<< HEAD
        stopAnimation();
        setPath([]);
        setVisited(new Set());
        setStatus('running');
=======
        stopAnimation(); // Clear previous animation
        setPath([]);
        setVisited(new Set());
        setIsRunning(true);
>>>>>>> main

        const frontier = new PriorityQueue();
        frontier.enqueue(START_NODE, 0);
        const cameFrom: { [key: string]: { row: number; col: number } | null } = { [`${START_NODE.row}-${START_NODE.col}`]: null };
        const costSoFar: { [key: string]: number } = { [`${START_NODE.row}-${START_NODE.col}`]: 0 };
        const visitedNodes = new Set<string>();
<<<<<<< HEAD
        let goalReached = false;

        intervalRef.current = setInterval(() => {
            if (frontier.isEmpty()) {
                if (!goalReached) {
                    setStatus('fail');
                }
=======

        intervalRef.current = setInterval(() => {
            if (frontier.isEmpty()) {
>>>>>>> main
                stopAnimation();
                return;
            }

            const current = frontier.dequeue();
            const currentKey = `${current.row}-${current.col}`;

            if (visitedNodes.has(currentKey)) return;

            visitedNodes.add(currentKey);
            setVisited(new Set(visitedNodes));

            if (current.row === END_NODE.row && current.col === END_NODE.col) {
<<<<<<< HEAD
                goalReached = true;
                setStatus('success');
=======
>>>>>>> main
                stopAnimation();
                let temp = current;
                const newPath = [];
                while (temp) {
                    newPath.push(temp);
                    temp = cameFrom[`${temp.row}-${temp.col}`];
                }
                setPath(newPath.reverse());
                return;
            }

            const neighbors = [
<<<<<<< HEAD
                { row: current.row - 1, col: current.col }, { row: current.row + 1, col: current.col },
                { row: current.row, col: current.col - 1 }, { row: current.row, col: current.col + 1 },
=======
                { row: current.row - 1, col: current.col },
                { row: current.row + 1, col: current.col },
                { row: current.row, col: current.col - 1 },
                { row: current.row, col: current.col + 1 },
>>>>>>> main
            ];

            for (const neighbor of neighbors) {
                const { row, col } = neighbor;
                if (row >= 0 && row < GRID_SIZE && col >= 0 && col < GRID_SIZE && grid[row][col] === 0) {
                    const newCost = costSoFar[currentKey] + 1;
                    const neighborKey = `${row}-${col}`;
                    if (!costSoFar[neighborKey] || newCost < costSoFar[neighborKey]) {
                        costSoFar[neighborKey] = newCost;
                        const priority = newCost + heuristic(END_NODE, neighbor);
                        frontier.enqueue(neighbor, priority);
                        cameFrom[neighborKey] = current;
                    }
                }
            }
        }, 25);
    };

    const getNodeClasses = (row: number, col: number) => {
        if (row === START_NODE.row && col === START_NODE.col) return 'bg-green-500';
        if (row === END_NODE.row && col === END_NODE.col) return 'bg-red-500';
        if (path.some(p => p.row === row && p.col === col)) return 'bg-yellow-400 animate-pulse';
        if (grid[row] && grid[row][col] === 1) return 'bg-gray-800';
        if (visited.has(`${row}-${col}`)) return 'bg-blue-200 dark:bg-blue-800 transition-colors duration-500';
        return 'bg-gray-200 dark:bg-gray-700';
    };

<<<<<<< HEAD
    const StatusMessage = () => {
        if (status === 'success') return <p className="text-green-500 font-semibold">Jalur ditemukan!</p>;
        if (status === 'fail') return <p className="text-red-500 font-semibold">Jalur tidak ditemukan.</p>;
        return null;
    };

=======
>>>>>>> main
    return (
        <Card className="max-w-max mx-auto">
            <CardHeader>
                <CardTitle>Path Finding Interaktif (A*)</CardTitle>
                <CardDescription>Klik pada sel untuk membuat rintangan, lalu mulai pencarian.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
                <div className="grid border" style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 20px)` }}>
                    {grid.map((row, rowIndex) =>
                        row.map((_, colIndex) => (
                            <div
                                key={`${rowIndex}-${colIndex}`}
                                onClick={() => toggleWall(rowIndex, colIndex)}
<<<<<<< HEAD
                                className={`w-5 h-5 ${getNodeClasses(rowIndex, colIndex)} ${status !== 'running' ? 'cursor-pointer' : ''}`}
=======
                                className={`w-5 h-5 ${getNodeClasses(rowIndex, colIndex)} ${!isRunning ? 'cursor-pointer' : ''}`}
>>>>>>> main
                            />
                        ))
                    )}
                </div>
                <div className="flex gap-4">
<<<<<<< HEAD
                    <Button onClick={aStar} disabled={status === 'running'}>Mulai A* Search</Button>
                    <Button variant="outline" onClick={resetGrid}>Reset Grid</Button>
                </div>
                <div className="h-6">
                    <StatusMessage />
                </div>
=======
                    <Button onClick={aStar} disabled={isRunning}>Mulai A* Search</Button>
                    <Button variant="outline" onClick={resetGrid}>Reset Grid</Button>
                </div>
>>>>>>> main
            </CardContent>
        </Card>
    );
};

export default PathfindingSandbox;
