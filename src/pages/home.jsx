import CSS from '/Purple_CSS_Logo.svg.png'
export default function Home(){
    return(
        <article>
            <section className=" my-12 p-6 md:max-w-5xl md:mx-auto hero">
                <img className=' mx-auto' width={150} src={CSS} alt="vector image of the CSS logo" />
                    <h2 className=" pt-6 px-4 text-4xl text-center font-bold md:text-6xl">
                        Learn the foundations of
                        <span className=" transition-[color] hover:text-purple-800"> CSS </span>
                    </h2>    
            </section>

            <section className=" my-12 md:max-w-5xl md:mx-auto">
                <div className="  my-4 items-center justify-items-center flex flex-col md:p-8">
                        <h2 className=" p-2 text-3xl text-center font-bold">
                            About
                        </h2>
                        <p className=" px-8 py-4 mx-auto text-lg max-w-[40ch] md:max-w-[60ch]">
                            This is an educational website in a mini-blog format
                            to showcase how a little bit of CSS
                            can greatly improve the look & feel of your websites.
                            I created this site because I enjoy using
                            CSS, but I've heard many new developers struggle 
                            with CSS & how to use it effectively. 
                        </p>
                </div>
            </section>

            <section className=" my-12 md:max-w-5xl md:mx-auto">
                <div className="  my-4 md:p-8">
                    <h2 className=" text-3xl text-center font-bold">
                        Who is this For?
                    </h2>
                    <p className=" px-8 py-4 mx-auto text-lg max-w-[40ch] md:max-w-[60ch]">
                        The target audience for the site are beginner web developers
                        & web developers who need a refresher on modern CSS.
                    </p>
                </div>
            </section>

            <section className=" my-12 md:max-w-5xl md:mx-auto">
                <div className="  my-4 md:p-8">
                    <h2 className=" text-3xl text-center font-bold">
                        Recommended Use
                    </h2>
                    <p className=" px-8 py-4 mx-auto text-lg max-w-[40ch] md:max-w-[60ch]">
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