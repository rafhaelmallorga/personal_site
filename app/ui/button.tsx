import { JSX } from 'react';

interface Props {
    label: string;
    onClick?: () => void;
    width?: number;
    height?: number;
}

export default function Button({
    label,
    onClick,
    width,
    height,
}: Props): JSX.Element {
    return (
        <button className="bg-button text-text border-strokes oldschool-shadow mt-4 w-40 border-4 p-1 text-xl font-bold sm:mt-6">
            {label}
        </button>
    );
}
