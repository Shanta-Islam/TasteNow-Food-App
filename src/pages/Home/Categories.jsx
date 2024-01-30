import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import img3 from '../../assets/images/img3.png';
import img4 from '../../assets/images/img4.png';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid, Pagination, Navigation} from 'swiper/modules';
const Categories = () => {
    const sliderContent = [
        {
            id: 1,
            title: 'Pepperoni Pizza',
            sub: 'Di napoles',
            img: img1,
            price: 11.99
        },
        {
            id: 2,
            title: 'Pepperoni Pizza',
            sub: 'Di napoles',
            img: img2,
            price: 15.99
        },
        {
            id: 3,
            title: 'Pepperoni Pizza',
            sub: 'Di napoles',
            img: img3,
            price: 11.99
        },
        {
            id: 4,
            title: 'Pepperoni Pizza',
            sub: 'Di napoles',
            img: img4,
            price: 19.99
        },
        {
            id: 5,
            title: 'Pepperoni Pizza',
            sub: 'Di napoles',
            img: img1,
            price: 11.99
        },
        {
            id: 6,
            title: 'Pepperoni Pizza',
            sub: 'Di napoles',
            img: img2,
            price: 11.99
        },
        {
            id: 7,
            title: 'Pepperoni Pizza',
            sub: 'Di napoles',
            img: img1,
            price: 11.99
        },
        {
            id: 8,
            title: 'Pepperoni Pizza',
            sub: 'Di napoles',
            img: img2,
            price: 15.99
        },
        {
            id: 9,
            title: 'Pepperoni Pizza',
            sub: 'Di napoles',
            img: img3,
            price: 11.99
        },
        {
            id: 10,
            title: 'Pepperoni Pizza',
            sub: 'Di napoles',
            img: img4,
            price: 19.99
        },
        {
            id: 11,
            title: 'Pepperoni Pizza',
            sub: 'Di napoles',
            img: img1,
            price: 11.99
        },
        {
            id: 12,
            title: 'Pepperoni Pizza',
            sub: 'Di napoles',
            img: img2,
            price: 11.99
        }
    ]
    return (
        <section className='categories'>
            <h2>Our Popular Categories</h2>
            <Swiper
                slidesPerView={4}
                grid={{
                    rows: 2,
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Grid, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    sliderContent?.map(s => 
                        <SwiperSlide key={s._id}><div className="card">
                        <img src={s.img} alt="Avatar" />
                        <div className="container">
                            <h4><b>{s.title}</b></h4>
                            <p>{s.sub}</p>
                            <p>${s.price}</p>
                        </div>
                    </div></SwiperSlide>)
                }

            </Swiper>
        </section>
    );
};

export default Categories;