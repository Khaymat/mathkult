"use client"

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

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

const PathfindingSandbox: React.FC = () => {
    const [grid, setGrid] = useState<number[][]>([]);
    const [path, setPath] = useState<{ row: number; col: number }[]>([]);
    const [visited, setVisited] = useState<Set<string>>(new Set());

    const createInitialGrid = () => {
        const newGrid = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(0));
        // Add some random walls
        for (let i = 0; i < GRID_SIZE * GRID_SIZE * 0.2; i++) {
            const row = Math.floor(Math.random() * GRID_SIZE);
            const col = Math.floor(Math.random() * GRID_SIZE);
            if ((row !== START_NODE.row || col !== START_NODE.col) && (row !== END_NODE.row || col !== END_NODE.col)) {
                newGrid[row][col] = 1; // 1 represents a wall
            }
        }
        setGrid(newGrid);
        setPath([]);
        setVisited(new Set());
    };

    useEffect(() => {
        createInitialGrid();
    }, []);

    const heuristic = (a: { row: number, col: number }, b: { row: number, col: number }) => {
        return Math.abs(a.row - b.row) + Math.abs(a.col - b.col);
    };

    const aStar = () => {
        const frontier = new PriorityQueue();
        frontier.enqueue(START_NODE, 0);
        const cameFrom: { [key: string]: { row: number; col: number } | null } = { [`${START_NODE.row}-${START_NODE.col}`]: null };
        const costSoFar: { [key: string]: number } = { [`${START_NODE.row}-${START_NODE.col}`]: 0 };
        const visitedNodes = new Set<string>();

        const interval = setInterval(() => {
            if (frontier.isEmpty()) {
                clearInterval(interval);
                return;
            }

            const current = frontier.dequeue();
            const currentKey = `${current.row}-${current.col}`;
            visitedNodes.add(currentKey);
            setVisited(new Set(visitedNodes));

            if (current.row === END_NODE.row && current.col === END_NODE.col) {
                clearInterval(interval);
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
                { row: current.row - 1, col: current.col },
                { row: current.row + 1, col: current.col },
                { row: current.row, col: current.col - 1 },
                { row: current.row, col: current.col + 1 },
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
        }, 20); // visualization delay
    };

    const getNodeClasses = (row: number, col: number) => {
        if (row === START_NODE.row && col === START_NODE.col) return 'bg-green-500';
        if (row === END_NODE.row && col === END_NODE.col) return 'bg-red-500';
        if (path.some(p => p.row === row && p.col === col)) return 'bg-yellow-400';
        if (grid[row] && grid[row][col] === 1) return 'bg-gray-800';
        if (visited.has(`${row}-${col}`)) return 'bg-blue-200 dark:bg-blue-800';
        return 'bg-gray-200 dark:bg-gray-700';
    };

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="grid" style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 20px)` }}>
                {grid.map((row, rowIndex) =>
                    row.map((_, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className={`w-5 h-5 border border-gray-400 ${getNodeClasses(rowIndex, colIndex)}`}
                        />
                    ))
                )}
            </div>
            <div className="flex gap-4">
                <Button onClick={aStar}>Mulai A* Search</Button>
                <Button variant="outline" onClick={createInitialGrid}>Reset Grid</Button>
            </div>
        </div>
    );
};

export default PathfindingSandbox;
