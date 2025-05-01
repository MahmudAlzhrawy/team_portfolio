// components/Loading.tsx
export default function Loading() {
return (
    <div className="w-full min-h-screen flex justify-center items-center bg-cream py-8 px-4">
    <div className="text-center">
        <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-solid border-chestnut-dark border-t-transparent rounded-full mb-4"></div>
        <p className="text-chestnut-warm text-xl font-semibold">Loading...</p>
    </div>
    </div>
);
}
