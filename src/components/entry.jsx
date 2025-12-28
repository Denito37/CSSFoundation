import Copy from '/copy.svg'
export default function Entry({entry, element}){
    return(
        <article className="p-4 my-6 mx-6 grid place-content-center">
            {
            entry.intro && 
            <p className=" mx-auto px-4 my-6 max-w-[70ch] text-lg first-letter:text-5xl">
                {entry.intro}
            </p> 
            }
            <h2 className="text-4xl text-center md:text-left font-bold p-4">
                {entry.title}
            </h2>
            <div className=" grid md:grid-cols-3 md:max-w-3xl text-center md:text-left py-4">
                <div className="justify-self-center self-center">
                    {element}
                </div>
                <p className="p-4 text-lg md:col-span-2">
                    {entry.description}
                </p>
            </div>
            <code>
                <pre className=" relative md:my-4 py-4 px-8 mx-4 bg-slate-800 text-amber-400 border-2 rounded-xl max-w-[80vw] sm:w-full md:max-w-3xl overflow-scroll">
                    {entry.code}
                    <button 
                        onClick={() => {navigator.clipboard.writeText(entry.code)}} 
                        className=' p-2 bg-slate-500 rounded-xl absolute top-0 right-0 transition-[filter] hover:brightness-200 '>
                        <img title='Copy' src={Copy} alt="copy" width={50} height={50} />
                    </button>
                </pre>
            </code>
        </article>
    )
}