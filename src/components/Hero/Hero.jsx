import { useState } from 'react'
import Headphone1 from '../../assets/headphone.png'
import Headphone2 from '../../assets/headphone2.png'
import Headphone3 from '../../assets/headphone3.png'
import { FaWhatsapp } from 'react-icons/fa'

const headphoneData = [
    {
        id: 1,
        image: Headphone1,
        title: "Headphones Wireless",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipsicing elit. Nullam in dui mauris. Vivamus hendrerit, lacus et eos minima ad ut id eos ad ut id eos",
        price: "$100",
        modal: "Modal Brown",
        bgColor: "#8b5958"
    },

    
    {
        id: 2,
        image: Headphone2,
        title: "Headphones Wireless",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipsicing elit. Nullam in dui mauris. Vivamus hendrerit, lacus et eos minima ad ut id eos ad ut id eos",
        price: "$100",
        modal: "Lime Green",
        bgColor: "#638153"
    },

    {
        id: 3,
        image: Headphone3,
        title: "Headphones Wireless",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipsicing elit. Nullam in dui mauris. Vivamus hendrerit, lacus et eos minima ad ut id eos ad ut id eos",
        price: "$100",
        modal: "Blue",
        bgColor: "#5d818c"
    }

]

const Hero = () => {

    const [activeData, setActiveData] = useState(headphoneData[0])

    const handleActiveData = (data) => {
        setActiveData(data)
    }

  return (
    <section className='bg-brandDark text-white font-varela'>
      <div className='container grid grid-cols-2 md:-grid-cols-1 min-h-[520px]'>
        {/*_____Brand Info_____*/}
        <div className='flex flex-col justify-center py-14 md_py-0 xl:max-w-[500px]'>
            <div className='space-y-5 md:text-left'>
                <h1 className='text-3xl lg:text-6xl font-bold font-varela'>{activeData.title}</h1>
                <p className='text-sm leading-loose text-white/80'>{activeData.subtitle}</p>
                <button style={{backgroundColor: activeData.bgColor}} className='px-4 py-2 inline-block font-normal rounded-sm'>Buy and Listen</button>

                {/*_____HeadPhone List Separator_____*/}
                <div className='flex items-center justify-center md:justify-start gap-4 !mt-20'>
                    <div className='w-20 h-[1px] bg-white'></div>
                    <p className='uppercase text-sm'>Top Headphone for you</p>
                    <div className='w-20 h-[1px] bg-white'></div>
                </div>
                {/*Headphone list switcher*/}
                <div className='grid grid-cols-3 gap-10'>
                    {headphoneData.map((item) => {
                        return (
                            <div key={item.id} onClick={() => handleActiveData(item)} className='grid grid-cols-2 place-items-center cursor-pointer'>
                                <div>
                                    <img src={item.image} alt="headphone" className='w-[200px]'/>
                                </div>
                                <div className='space-y-2'>
                                    <p className='text-base font-bold'>{item.price}</p>
                                    <p className='text-xs font-normal text-nowrap'>{item.modal}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>  
        </div>
        {/*_____Hero Image_____*/}
        <div className='flex flex-col justify-end items-center'>
            <img src={activeData.image} alt=""  className='w-[300px] md:w-[400px] xl:w-[550px]'/>
        </div>
        {/*_____WhatsApp Info_____*/}
        <div className='text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference'>
            <a href="">
                <FaWhatsapp  />
            </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
