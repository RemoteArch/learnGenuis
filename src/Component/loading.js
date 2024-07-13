
export default function Loading(){
    return(
        <div className="flex flex-col items-center">
        <div className="text-4xl font-bold text-green-500 mb-6">LearnGénius</div>
        <div className="w-20 h-20 border-b border-t border-green-500 rounded-full animate-spin"></div>
        <div className="mt-6 text-gray-700 font-bold text-lg">Loading...</div>
        </div>
    )
}