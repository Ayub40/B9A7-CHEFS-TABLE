import banner from "../../assets/images/banner.jpg"

const Banner = () => {
    return (
        // <div className="md:container md:mx-auto  border border-red-700 card w-full mt-6 grid sm:grid-cols-1 lg:grid-cols-1 bg-base-100 shadow-xl image-full relative">
        //     <figure><img width="1600px" src={banner} alt="Shoes" />
        //     </figure>

        //     <div className="bg-clip-content p-6 inset-x-40 bottom-96 lg:absolute border border-green-600">
        //         <h1 className="bg-clip-text text-white font-bold text-5xl pl-52">
        //             Discover an exceptional cooking <br /> class tailored for you!</h1>
        //         <p className="text-white mt-2">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding br <br /> problems to become an exceptionally well world-class Programmer.</p>
        //     </div>



        //     {/* <div className="card-body items-start my-52">
        //         <h2 className="card-title text-3xl font-extrabold text-black lg:mr-96">Professional Program</h2>
        //         <p className="text-black font-medium text-base">Embark on a transformative journey with our
        //             professional program. Elevate your skills under expert guidance, refine  strategies, and
        //             immerse
        //             yourself in a dynamic community that fosters continuous growth and success.</p>
        //         <div className="card-actions mt-6">
        //             <button className="btn bg-ticket-primary text-black border-none">Register Now!</button>
        //         </div>
        //     </div> */}
        // </div>







        // <div className="card w-full bg-base-100 shadow-xl image-full">
        //     <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">Shoes!</h2>
        //         <p>If a dog chews shoes whose shoes does he choose?</p>
        //         <div className="card-actions justify-end">
        //             <button className="btn btn-primary">Buy Now</button>
        //         </div>
        //     </div>
        // </div>



        <div className="md:container md:mx-auto border border-red-600 relative ">
            <img className="w-full" src={banner} alt="" />

            <div className="lg:h-[20vh] lg:w-2/3 mx-auto  rounded-lg inset-x-40 bottom-96 flex items-center justify-center lg:absolute border border-green-600">
                <div className="ml-8">
                    <h2 className="text-lg lg:text-5xl font-extrabold text-[#FFFFFF]" >Discover an exceptional cooking <br /> class tailored for you!</h2>
                    <p className="font-medium text-[#FFFFFF] mt-4 text-sm lg:text-base">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer. </p>
                    <div>
                        <button className="btn btn-accent">Accent</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;