export default function Navbar(){
    return(
        <div className="nav h-14 bg-cream">
            <div className="content px-4 h-full items-center flex justify-between ">
            <div className="logo text-[#654321] text-3xl">
                    <span className="font-serif text-4xl text-[#7B5E57] inline-block animate-flipY">C</span>
                    ode
                    <span className="font-serif text-4xl text-[#7B5E57] inline-block animate-flipX">V</span>
                    erse
                    </div>
                    <div className="linkes ">
                        <ul className=" flex justify-between">
                            <a href=""><li className="pr-8 text-xl text-[#7B5E57] hover:text-[#4E2C20] font-serif duration-500">About</li></a>
                            <a href=""><li className="pr-8 text-xl text-[#7B5E57] hover:text-[#4E2C20] font-serif duration-500">Service</li></a>
                            <a href=""><li className="pr-8 text-xl text-[#7B5E57] hover:text-[#4E2C20] font-serif duration-500">Contact</li></a>
                        </ul>
                </div>
            </div>
        </div>
    )
}