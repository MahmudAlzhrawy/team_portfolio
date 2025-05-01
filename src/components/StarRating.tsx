import React from "react";
import { Star } from "lucide-react";

const StarRating = ({ value, onChange }: { value: number; onChange: (val: number) => void }) => {
    return (
        <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    className={`w-8 h-8 cursor-pointer transition ${
                        star <= value ? "text-yellow-400 fill-yellow-400" : "text-gray-400"
                    }`}
                    onClick={() => onChange(star)}
                />
            ))}
        </div>
    );
};

export default StarRating;
