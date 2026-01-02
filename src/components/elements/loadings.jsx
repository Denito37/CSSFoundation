import loading from '/loading.svg'
export function Spinner(){
    return(
        <>
            <img className=' animate-spin motion-reduce:animate-none' src={loading} alt="loading-spinner" width={'150px'} height={'150px'} />
        </>
    )
}
export function Skeleton(){
    return(
        <div className=" grid gap-4 min-w-[15rem]">
            <div className=" p-12 bg-gray-400 rounded-2xl animate-pulse"></div>
            <div className=" p-2 bg-gray-400 rounded-2xl animate-pulse"></div>
            <div className=" p-2 bg-gray-400 rounded-2xl animate-pulse"></div>
            <div className=" p-2 bg-gray-400 rounded-2xl animate-pulse"></div>
        </div>
    )
}