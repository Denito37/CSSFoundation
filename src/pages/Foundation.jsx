export default function Foundation(){
    return(
        <main>
            <h2 className="p-2 mx-2 my-12">
                Foundations of CSS
            </h2>
            <h3 className="p-2 m-2 text-center md:text-left">
                Overview
            </h3>
            <p className="p-2 mx-auto my-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, totam repellendus. Cum laborum reiciendis non voluptatum eaque explicabo possimus itaque. Eos facere deserunt animi consequuntur veritatis. Facilis dolorem nostrum doloribus.
            </p>
            <h3 className="p-2 m-2 text-center md:text-left">
                Components: The Box Model
            </h3>
            <div className="box-model py-20 px-10 m-10 border-4 text-center font-bold sm:text-3xl">
                    CONTENT
            </div>
            <p className="p-2 mx-auto my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo natus reprehenderit laboriosam ullam quae provident beatae tempora debitis laborum cupiditate! Ad consectetur dolorem architecto maiores vitae ipsum similique, adipisci qui!
            </p>
            <h3 className="p-2 m-2 text-center md:text-left">
                Layouts: Flex & Grid
            </h3>
            <div className="flex-layout m-4 flex justify-center gap-2">
                <div className="p-12 border-2">Flex 1</div>
                <div className="p-12 border-2">Flex 2</div>
                <div className="p-12 border-2">Flex 3</div>
                <div className="p-12 border-2">Flex 4</div>
            </div>
            <p className="text-center text-sm w-full">
                Flex-box
            </p>
            <div className="grid-layout m-4 grid grid-cols-3 justify-center gap-2">
                <div className="p-12 border-2 text-center">Grid 1</div>
                <div className="p-12 border-2 text-center col-span-2">Grid 2</div>
                <div className="p-12 border-2 text-center col-span-2">Grid 3</div>
                <div className="p-12 border-2 text-center">Grid 4</div>
            </div>
            <p className="text-center text-sm w-full">
                Grid
            </p>
            <p className="p-2 mx-auto my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis consequatur assumenda alias architecto, officiis sapiente quae accusantium, nesciunt enim maiores dolore? Nemo est voluptate fugit ad possimus voluptatum vitae ea.
            </p>
        </main>
    )
}