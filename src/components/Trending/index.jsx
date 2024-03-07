import batman from'../../assets/batman.jpg'
import dune from'../../assets/dune.jpg'
import sing2 from'../../assets/sing_2.jpg'
import spide_man from'../../assets/spider_man.jpg'
import rises from'../../assets/the_dark_knight_rises.jpg'
import tdt from'../../assets/the_dark_knight.jpg'
import MovieCart from './MovieCart'

const carts=[
    {
        src:batman,
        title: 'BatmanBegin',
        main:'Christian Bale',
        runtime: '120m'
    },
    {
        src:dune,
        title: 'BatmanBegin',
        main:'Christian Bale',
        runtime: '120m'
    },
    {
        src:sing2,
        title: 'BatmanBegin',
        main:'Christian Bale',
        runtime: '120m'
    },
    {
        src:spide_man,
        title: 'BatmanBegin',
        main:'Christian Bale',
        runtime: '120m'
    },
    {
        src:rises,
        title: 'BatmanBegin',
        main:'Christian Bale',
        runtime: '120m'
    },
    {
        src:tdt,
        title: 'BatmanBegin',
        main:'Christian Bale',
        runtime: '120m'
    },
]


function index() {
  return (
    <div>
        <h3 className="mt-12 pb-6 mb-4 border-b border-primary">Trending</h3>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-10 mb-12'>
            {carts.map((cart, index)=>(
                <MovieCart cart={cart} index={index}/>
            ))}
        </div>
        <div className="flex justify-center">
            <button className="btn hover:scale-125 transition ease-out duration-500">
                loadmore
            </button>
        </div>
    </div>
  )
}

export default index