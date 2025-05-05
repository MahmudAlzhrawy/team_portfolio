    "use client";
    import Loading from "@/app/loading";
    import { Star } from "lucide-react";
    import { useEffect, useState } from "react";

    interface Review {
    userName: string;
    rate: number;
    opinion: string;
    createdAt: string;
    }

    export default function Blog({ reload }: { reload: number }) {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [averageRate, setAverageRate] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);

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
            console.error("Failed to fetch blog data", e);
        } finally {
            setLoading(false);
        }
        };
        blogData();
    }, [reload]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="w-full py-8 px-4 bg-[#FAFAFA]">
        <div className="max-w-3xl mx-auto space-y-6">
            {/* Average Rating Card */}
            <div className="bg-white border border-gray-light rounded-2xl p-6 shadow-sm text-center">
            <h2 className="text-2xl font-bold text-primary-dark mb-1">Total Rate</h2>
            <p className="text-xl font-semibold text-primary">{averageRate} / 5</p>
            <div className="flex justify-center mt-2 space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    className={`w-6 h-6 ${
                    star <= Math.round(averageRate)
                        ? "text-yellow-500 fill-yellow-300"
                        : "text-gray-300"
                    }`}
                />
                ))}
            </div>
            </div>

            {/* Reviews List */}
            <div className="bg-white border border-gray-light rounded-2xl p-6 max-h-[400px] overflow-y-auto space-y-6 shadow-sm">
            {reviews.map((data, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-center mb-1">
                    <h3 className="text-lg font-semibold text-gray-dark">{data.userName}</h3>
                    <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                        key={star}
                        className={`w-5 h-5 ${
                            star <= data.rate
                            ? "text-yellow-500 fill-yellow-300"
                            : "text-gray-300"
                        }`}
                        />
                    ))}
                    </div>
                </div>
                <p className="text-gray-DEFAULT">{data.opinion}</p>
                <p className="text-sm text-gray-dark italic mt-1">{data.createdAt}</p>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
    }
