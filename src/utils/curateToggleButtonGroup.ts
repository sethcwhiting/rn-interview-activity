import { Toggle } from "@/components/ToggleButton";

export const curateToggleButtonGroup = ({ name, state, prev, cap }: Toggle & { prev: string[]; cap: number }): string[] => {
    if (state) {
        if (prev.includes(name)) return prev;
        if (prev.length >= cap) return prev;
        return [...prev, name];
    } else {
        return prev.filter(item => item !== name);
    }
};
