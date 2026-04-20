"use client"

import Button from "../Button/Button"


const HeroBanner = () => {
  return (
    <section className='flex w-full md:p-8 bg-[url("/hero.png")] bg-contain bg-center bg-no-repeat items-center justify-center h-full min-h-150 grayscale-100 relative md:flex md:justify-start md:items-center'>
        
        <div className=" p-6 md:p-0  flex flex-col justify-start">
            <div>
                <h1 className="text-4xl text-white font-serif uppercase">Stalish <strong>yourself</strong> with us;</h1>
            </div>

            <div className="flex justify-start w-full mt-8">
                <Button
                    className="cursor-pointer bg-tertiary px-12 py-3 rounded-sm transition-400 ease-in-out hover:bg-neutral hover:text-primary" 
                    title="Shop Now" 
                />
            </div>
        </div>
    </section>
  )
}
export default HeroBanner