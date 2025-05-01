"use client"
import Loading from "@/app/loading";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

interface Review {
userName: string;
rate: number;
opinion: string;
createdAt: string;
}

export default function Blog({reload}:{reload:number}) {
const [reviews, setReviews] = useState<Review[]>([]);
const [averageRate, setAverageRate] = useState<number>(0);
const [loading, setLoading] = useState<boolean>(true); // Loading state

useEffect(() => {
    const blogData = async () => {
    try {
        const res = await fetch(`/api/blog`, { method: "GET" });
        if (res.ok) {
        const data = await res.json();
        setReviews(data);
        const total = data.reduce((sum: number, r: Review) => sum + r.rate, 0);
        const avg = data.length > 0 ? total / data.length : 0;
        setAverageRate(Number(avg.toFixed(1)));
        } else {
        console.log("Error fetching data");
        }
    } catch (e) {
        console.error("Failed to fetch blog data");
    } finally {
        setLoading(false); 
    }
    };
    blogData();
}, [reload]);


if (loading) {
    return (
    <Loading/>
    );
}

return (
    <div className="w-full min-h-screen bg-cream py-8 px-4">
    <div className="max-w-3xl mx-auto">
        <div className="bg-beige border border-chestnut-light rounded-lg p-5 text-center mb-8">
        <h2 className="text-2xl font-bold text-chestnut-warm mb-2">Total Rate</h2>
        <p className="text-xl font-semibold text-chestnut-rosewood">{averageRate} / 5</p>
        <div className="flex justify-center mt-2 space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
            <Star
                key={star}
                className={`w-6 h-6 ${
                star <= Math.round(averageRate)
                    ? "text-yellow-400 fill-yellow-300"
                    : "text-gray-300"
                }`}
            />
            ))}
        </div>
        </div>

        <div className="bg-beige border border-chestnut-light rounded-lg p-4 max-h-[400px] overflow-y-auto space-y-4">
        {reviews.map((data, index) => (
            <div key={index} className="border-b border-chestnut-mahogany pb-4">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-chestnut-dark">{data.userName}</h3>
                <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                    key={star}
                    className={`w-5 h-5 ${
                        star <= data.rate
                        ? "text-yellow-400 fill-yellow-300"
                        : "text-gray-300"
                    }`}
                    />
                ))}
                </div>
            </div>
            <p className="text-chestnut-DEFAULT mb-1">{data.opinion}</p>
            <p className="text-sm text-chestnut-rosewood italic">{data.createdAt}</p>
            </div>
        ))}
        </div>
    </div>
    </div>
);
}
