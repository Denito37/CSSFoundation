import CSS from '/Purple_CSS_Logo.svg.png'
export default function Home(){
    return(
        <article>
            <section className="my-2 p-6 md:mx-auto hero">
                    <h1 className="pt-6 px-4">
                        Learn the Foundations of
                        <span className=" transition-[color] hover:text-purple-800"> CSS </span>
                    </h1>
                    <p className='text-sm my-2 text-slate-700'>
                        
                    </p>
            </section>

            <section className="my-12 md:mx-auto">
                <div className="my-4 md:p-8">
                        <h2 className="p-2">
                            About
                        </h2>
                        <p className=" px-8 py-4 mx-auto">
                            This is an educational website in a mini-blog format
                            to showcase how a little bit of CSS
                            can greatly improve the look & feel of your websites.
                            I created this site because I enjoy using
                            CSS, but I've heard many new developers struggle 
                            with CSS & how to use it effectively. 
                        </p>
                </div>
            </section>

            <section className="my-12 md:mx-auto">
                <div className="my-4 md:p-8">
                    <h2>
                        Who is this For?
                    </h2>
                    <p className="px-8 py-4 mx-auto">
                        The target audience for the site are beginner web developers
                        & web developers who need a refresher on modern CSS.
                    </p>
                </div>
            </section>

            <section className="my-12 md:mx-auto">
                <div className="my-4 md:p-8">
                    <h2>
                        Recommended Use
                    </h2>
                    <p className="px-8 py-4 mx-auto ">
                        Each page is dedicated to a common component in nearly all applications
                        so that if you struggle with one you can get the help
                        you want. I recommend copying the CSS into your projects
                        & play with the values to see how they affect your component.
                        Doing this will increase your understanding of how each element property 
                        affects your component.
                    </p>
                </div>
            </section>
        </article>
    )
}