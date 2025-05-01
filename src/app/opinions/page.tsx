'use client'
import ReviewForm from "@/components/OpinionForm";
import Blog from "@/components/Blog";
import { useState } from "react";

export default function Opinion() {
    const [addReview, setAc] = useState<boolean>(false);
    const [reload,setReload]=useState<number>(0);
    return (
        <div className="w-full min-h-screen mt-10 bg-cream relative py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl text-center font-bold text-chestnut-warm mb-10">
                    Clients Reviews
                </h2>

                {addReview && (
                    <div className="mb-8 bg-beige border border-chestnut-light p-6 rounded-xl">
                        <ReviewForm setReload={setReload} setAc={setAc} />
                    </div>
                )}

                <div className="bg-beige border border-chestnut-light p-6 rounded-xl">
                    <Blog reload={reload} />
                </div>
            </div>

            <div className="fixed bottom-6 left-6">
                <button
                    className="bg-chestnut-rosewood text-cream px-6 py-2 rounded-lg hover:bg-chestnut-warm transition-all duration-300"
                    onClick={() => {setAc((el) => !el)
                        setReload((el)=> el+1)}
                    }
                >
                    {addReview ? "Cancel Review" : "Add Review"}
                </button>
            </div>
        </div>
    );
}
