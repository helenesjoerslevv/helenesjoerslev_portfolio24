import { ref } from 'vue'

import image1 from '@/assets/photography/1.jpg'
import image2 from '@/assets/photography/2.jpg'
import image3 from '@/assets/photography/3.jpg'
import image4 from '@/assets/photography/4.jpg'
import image5 from '@/assets/photography/5.jpg'
import image6 from '@/assets/photography/6.jpg'
import image7 from '@/assets/photography/7.jpg'
import image9 from '@/assets/photography/9.jpg'
import image10 from '@/assets/photography/10.jpg'
import image11 from '@/assets/photography/11.jpg'
import image13 from '@/assets/photography/13.jpg'
import image14 from '@/assets/photography/14.jpg'
import image15 from '@/assets/photography/15.jpg'
import image16 from '@/assets/photography/16.jpg'
import image17 from '@/assets/photography/17.jpg'
import image18 from '@/assets/photography/18.jpg'
import image20 from '@/assets/photography/20.jpg'
import image21 from '@/assets/photography/21.jpg'
import image22 from '@/assets/photography/22.jpg'
import image23 from '@/assets/photography/23.jpg'
import image24 from '@/assets/photography/24.jpg'
import image25 from '@/assets/photography/25.jpg'
import image26 from '@/assets/photography/26.jpg'
import image27 from '@/assets/photography/27.jpg'
import image28 from '@/assets/photography/28.jpg'
import image29 from '@/assets/photography/29.jpg'
import image30 from '@/assets/photography/30.jpg'
import image31 from '@/assets/photography/31.jpg'
import image32 from '@/assets/photography/32.jpg'
import image33 from '@/assets/graphic/1.jpg'
import image34 from '@/assets/graphic/2.jpg'
import image35 from '@/assets/graphic/3.jpg'
import image36 from '@/assets/graphic/4.jpg'
import image37 from '@/assets/graphic/5.jpg'
import image38 from '@/assets/graphic/6.jpg'
import image39 from '@/assets/graphic/7.jpg'
import image40 from '@/assets/graphic/8.jpg'
import image41 from '@/assets/graphic/9.jpg'
import image42 from '@/assets/graphic/10.jpg'
import image43 from '@/assets/graphic/11.jpg'
import image44 from '@/assets/graphic/12.jpg'
import image45 from '@/assets/graphic/13.jpg'
import image46 from '@/assets/graphic/14.jpg'
import image47 from '@/assets/graphic/15.jpg'
import image48 from '@/assets/graphic/16.jpg'
import image49 from '@/assets/print/1.jpg'
import image50 from '@/assets/print/2.jpg'
import image51 from '@/assets/print/3.jpg'
import image52 from '@/assets/print/4.jpg'
import image53 from '@/assets/print/5.jpg'
import image54 from '@/assets/print/6.jpg'
import image55 from '@/assets/print/7.jpg'
import image56 from '@/assets/print/8.jpg'
import image57 from '@/assets/print/9.jpg'
import image58 from '@/assets/print/10.jpg'
import image59 from '@/assets/print/11.jpg'
import image60 from '@/assets/print/12.jpg'
import image61 from '@/assets/print/13.jpg'
import image62 from '@/assets/print/14.jpg'
import image63 from '@/assets/print/15.jpg'


const getPortfolioItems = () => {
    const portfolioItems = ref([
        { 
            image: image1,
            category: 'photo'
        },
        { 
            image: image2,
            category: 'photo'
        },
        { 
            image: image3,
            category: 'photo'
        },
        { 
            image: image4,
            category: 'photo'
        },
        { 
            image: image5,
            category: 'photo'
        },
        { 
            image: image6,
            category: 'photo'
        },
        { 
            image: image7,
            category: 'photo'
        },
        { 
            image: image9,
            category: 'photo'
        },
        { 
            image: image10,
            category: 'photo'
        },
        { 
            image: image11,
            category: 'photo'
        },
        { 
            image: image13,
            category: 'photo'
        },
        { 
            image: image14,
            category: 'photo'
        },
        { 
            image: image15,
            category: 'photo'
        },
        { 
            image: image16,
            category: 'photo'
        },
        { 
            image: image17,
            category: 'photo'
        },
        { 
            image: image18,
            category: 'photo'
        },
        { 
            image: image20,
            category: 'photo'
        },
        { 
            image: image21,
            category: 'photo'
        },
        { 
            image: image22,
            category: 'photo'
        },
        { 
            image: image23,
            category: 'photo'
        },
        { 
            image: image24,
            category: 'photo'
        },
        { 
            image: image25,
            category: 'photo'
        },
        { 
            image: image26,
            category: 'photo'
        },
        { 
            image: image27,
            category: 'photo'
        },
        { 
            image: image28,
            category: 'photo'
        },
        { 
            image: image29,
            category: 'photo'
        },
        { 
            image: image30,
            category: 'photo'
        },
        { 
            image: image31,
            category: 'photo'
        },
        { 
            image: image32,
            category: 'photo'
        },
        { 
            image: image33,
            category: 'graphic'
        },
        { 
            image: image34,
            category: 'graphic'
        },
        { 
            image: image35,
            category: 'graphic'
        },
        { 
            image: image36,
            category: 'graphic'
        },
        { 
            image: image37,
            category: 'graphic'
        },
        { 
            image: image38,
            category: 'graphic'
        },
        { 
            image: image39,
            category: 'graphic'
        },
        { 
            image: image40,
            category: 'graphic'
        },
        { 
            image: image41,
            category: 'graphic'
        },
        { 
            image: image42,
            category: 'graphic'
        },
        { 
            image: image43,
            category: 'graphic'
        },
        { 
            image: image44,
            category: 'graphic'
        },
        { 
            image: image45,
            category: 'graphic'
        },
        { 
            image: image46,
            category: 'graphic'
        },
        { 
            image: image47,
            category: 'graphic'
        },
        { 
            image: image48,
            category: 'graphic'
        },
        { 
            image: image49,
            category: 'print'
        },
        { 
            image: image50,
            category: 'print'
        },
        { 
            image: image51,
            category: 'print'
        },
        { 
            image: image52,
            category: 'print'
        },
        { 
            image: image53,
            category: 'print'
        },
        { 
            image: image54,
            category: 'print'
        },
        { 
            image: image55,
            category: 'print'
        },
        { 
            image: image56,
            category: 'print'
        },
        { 
            image: image57,
            category: 'print'
        },
        { 
            image: image58,
            category: 'print'
        },
        { 
            image: image59,
            category: 'print'
        },
        { 
            image: image60,
            category: 'print'
        },
        { 
            image: image61,
            category: 'print'
        },
        { 
            image: image62,
            category: 'print'
        },
        { 
            image: image63,
            category: 'print'
        },
    ]);
    
    return { portfolioItems }; // Flyt return-erklæringen herinde
};

export { getPortfolioItems };

