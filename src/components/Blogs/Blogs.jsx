import { UpdateFollower } from 'react-mouse-follower'
import Blogs1 from '../../assets/Blogs/blog1.jpg'
import Blogs2 from '../../assets/Blogs/blog2.jpg'
import Blogs3 from '../../assets/Blogs/blog3.jpg'
import Blogs4 from '../../assets/Blogs/blog4.jpg'
// import { motion } from 'framer-motion'

const BlogsData = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit,",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corrupti cupiditate omnis tempore reiciendis magnam!",
    link: "#",
    img: Blogs1
  },

  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit,",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corrupti cupiditate omnis tempore reiciendis magnam!",
    link: "#",
    img: Blogs2
  },

  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit,",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corrupti cupiditate omnis tempore reiciendis magnam!",
    link: "#",
    img: Blogs3
  },

  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit,",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corrupti cupiditate omnis tempore reiciendis magnam!",
    link: "#",
    img: Blogs4
  },

]



const Blogs = () => {
  return (
    <>
     <section className='bg-gray-50'>
        <div className="container py-14">
          <h1 className='text-3xl font-bold text-center font-poppins pb-8 '>Blogs</h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
            {
              BlogsData.map((data) => {
                return (
                  <UpdateFollower 
                    key={data.id}
                    mouseOptions={{
                      backgroundColor: "black",
                      zIndex: 999,
                      followSpeed: 1.5,
                      text: "read",
                      textFontSize: "3px",
                      scale: 5
                    }}
                  >
                    <div className='flex flex-col items-center justify-center gap-6 p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300'>
                      <img src={data.img} alt="" />
                      <div className='space-y-2'>
                        <h1 className="text-lg font-bold line-clamp-2">{data.title}</h1>
                        <p className="line-clamp-2">{data.desc}</p>
                      </div>
                    </div>
                  </UpdateFollower>
                  
                )
              })
            }
          </div>
        </div>
     </section> 
    </>
  )
}

export default Blogs
