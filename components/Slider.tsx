"use client";
import * as RadixSlider from "@radix-ui/react-slider";
import React from "react";

interface SliderProps {
  value?: number;
  onChange?: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ value = 1, onChange }) => {
  const handleChange = (newValue: number[]) => {
    onChange?.(newValue[0]);
  };

  return (
    
      <RadixSlider.Root
        className="relative flex items-center select-none touch-none w-full h-10"
        defaultValue={[1]}
        value={[value]}
        onValueChange={handleChange}
        max={1}
        step={0.1}
        aria-label="Volume"
      >
        <RadixSlider.SliderTrack className="relative bg-neutral-600 rounded-full h-[3px] grow">
          <RadixSlider.SliderRange className="absolute bg-white h-full rounded-full" />
        </RadixSlider.SliderTrack>
      </RadixSlider.Root>
    
  );
};

export default Slider;
