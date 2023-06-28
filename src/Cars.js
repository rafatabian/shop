  
 import model_sagain from "./assets/model_s-again.png"
 import model_x from "./assets/modex_x.jpg" 
 import model_y from "./assets/model_y.jpg"  
 import bmw_x5 from "./assets/bmw_5series.jpg"
 import audi_etron from "./assets/audi_e-tron.png"  
 import audi_q8 from "./assets/audi_q8.png"  
 import audi_a4 from "./assets/audi_a4.png"  
 import audi_q2 from "./assets/audi_q2.png"  
 import mer__ from "./assets/mer__.jpg" 
 import mercedes_gla from "./assets/mer_gla.jpg"
 import mercedes_c from "./assets/mer_c.jpg"
 import lr from "./assets/lr_evoque.jpg"
 import v from "./assets/v_s90.jpg"



 import t_audiEtron1 from "./assets/t_audi_Etron.jpg"
 import t_audiEtron2 from "./assets/t_audi-etron.png"
 import t_v_s90 from "./assets/v_s90.jpg"
 import t_v901 from "./assets/t_volvo901.jpg"
 import t_v90 from "./assets/t_volvo90.jpg"
 import t_range_evoque1 from "./assets/t_range_evoque1.jpg"
 import t_range_evoque from "./assets/t_range_evoque.jpg"
 import t_model_y1 from "./assets/t_model_y1.jpg"
 import t_model_y from "./assets/t_model_y.png"
 import t_model_x1 from "./assets/t_model_x1.jpg"
 import t_model_x from "./assets/t_model_x.jpg"
 import t_model_s2 from "./assets/t_model_s2.jpg"
 import t_model_s from "./assets/t_model_s.jpg"
 import t_model_32 from "./assets/t_model_32.jpg"
 import t_model_31 from "./assets/t_model_31.jpg"
 import t_model_3 from "./assets/t_model_3.jpg"
 import t_mercedes_gla1 from "./assets/t_mercedes_gla1.jpg"
 import t_mercedes_gla from "./assets/t_mercedes_gla.jpg"
 import t_mer_cla1 from "./assets/t_mer_cla1.jpg"
 import t_mer_cla from "./assets/t_mer_cla.png"
 import t_mer_c1 from "./assets/t_mer_c1.jpg"
 import t_mer_c from "./assets/t_mer_c.jpg"
 import t_bmw_x6m1 from "./assets/t_bmw_x6m1.jpg"
 import t_bmw_x6m from "./assets/t_bmw_x6m.jpg"
 import t_bmw_i7 from "./assets/t_bmw_i7.jpg"
 import t_audi_q81 from "./assets/t_audi_q81.jpeg"
 import t_audi_q2 from "./assets/t_audi_q2.jpg"


 export const Cars = [
    {
        id:16,
        name: "Volvo S90",
        imaa: [v, t_v90, t_v901, t_v_s90],
        year:2019,
        miles: 23.549,
        hp:263,
        price:"£19.750" ,
        type:"petrol",
        owners:1,
        intro:" Immerse yourself in Scandinavian elegance and cutting-edge technology, as the Volvo S90 redefines luxury sedan with its sleek aesthetics and intelligent features.",
        good:"very good price",
    },
    {
        id:14,
        name: "Mercedes-Benz GLA",
        imaa: [mercedes_gla, t_mercedes_gla, t_mercedes_gla1],
        year:2019,
        miles:34.000,
        hp: 203,
        price: "£20.300",
        type:"petrol",
        owners:1,
        intro:"Experience the perfect blend of versatility and refinement in the Mercedes-Benz GLA, a compact SUV that exudes style and delivers a thrilling driving experience.",
        good:"very good price",

    },
    {
        id:15,
        name: "Range Rover Evoque",
        imaa: [lr, t_range_evoque1, t_range_evoque],
        year:2019,
        miles:46.356,
        hp:243,
        price:"£19.200" ,
        type:"diesel",
        owners:1,
        intro:"With its captivating design and legendary off-road capabilities, the Range Rover Evoque ensures you embark on every journey with confidence and sophistication",
        good:"good price",

    },
    
    {
        id:2,
        name: "Tesla model-S",
        imaa: [model_sagain, t_model_s, t_model_s2],
        year: 2023,
        miles:0,
        hp:1020,
        price:"£96,000",
        type:"electric",
        owners:0,
        intro:"Unleash the power of electric mobility with the Tesla Model-S, boasting exceptional range, stunning acceleration, and an unmatched commitment to sustainable driving.",
        good:"average price",

    },
    {
        id:3,
        name: "Tesla Model-X",
        imaa: [model_x, t_model_x, t_model_x1],
        year:2022,
        miles:1677,
        hp:1020,
        price:"£89.000",
        type:"electric",
        owners:0,
        intro:" Elevate your adventures with the Tesla Model-X, a groundbreaking all-electric SUV that offers ample space, impressive performance, and futuristic features.",
        good:"good price",

    },
    {
        id:13,
        name: "Mercedes-Benz C",
        imaa: [mercedes_c, t_mer_c1, t_mer_c],
        year:2018,
        miles:40.000,
        hp:243,
        price:"£19.300" ,
        type:"petrol",
        owners:1,
        intro:"Immerse yourself in pure luxury and dynamic driving with the Mercedes-Benz C-Class, where every detail is crafted to exceed your expectations.",
        good:"very good price",

    },
    {
        id:4,
        name: "Tesla Model-Y",
        imaa: [model_y, t_model_y1, t_model_y],
        year:2022,
        miles: 13.459,
        hp: 800,
        price:"£43.999",
        type:"electric",
        owners:1,
        intro:"Embrace the future of electric SUVs with the Tesla Model-Y, combining versatility, range, and advanced technology in a sleek and stylish package.",
        good:"good price",

    },
    {
        id:5,
        name: "BMW X6 M",
        imaa: [t_bmw_x6m, t_bmw_x6m1],
        year:2023,
        miles:0,
        hp:620,
        price:"£129.550",
        type:"petrol",
        owners:0,
        intro:"Discover the epitome of high-performance luxury in the BMW X6 M, where athleticism and sophistication converge to create a thrilling driving experience.",
        good:"average price",

    },
    {
        id:7,
        name: "BMW 5 Series",
        imaa: [bmw_x5],
        year:2019,
        miles: "54.700",
        hp:478,
        price:"£25.497",
        type:"petrol",
        owners:1,
        intro:"Uncompromising style and advanced technology define the BMW 5 Series, a premium sedan that delivers comfort, agility, and unmatched driving pleasure.",
        good:"average price",

    },
    {
        id:8,
        name: "Audi RS e-tron GT",
        imaa: [t_audiEtron1, t_audiEtron2, audi_etron],
        year:2023,
        miles:0,
        hp:522,
        price:"£113.990",
        type:"electric",
        owners:0,
        intro:"Experience the electrifying power of Audi's flagship electric vehicle, the RS e-tron GT, combining breathtaking performance, exceptional craftsmanship, and sustainable driving.",
        good:"average price",

    },
    {
        id:9,
        name: "Audi Q8",
        imaa: [t_audi_q81, audi_q8],
        year:2023,
        miles:0,
        hp:370,
        price:"£72.233",
        type:"petrol",
        owners:0,
        intro:"Elevate your SUV experience with the Audi Q8, featuring a bold design, luxurious amenities, and a perfect balance between athleticism and elegance.",
        good:"average price",

    },
    {
        id:6,
        name: "BMW i7",
        imaa: [t_bmw_i7],
        year:2023,
        miles:0,
        hp:544,
        price:"£113.970",
        type:"electric",
        owners:0,
        intro:"Enter the world of sustainable luxury with the BMW i7, an all-electric flagship sedan that exemplifies sophistication, performance, and forward-thinking design.",
        good:"average price",

    },
    {
        id:10,
        name: "Audi A4 Saloon",
        imaa: [audi_a4],
        year:2023,
        miles:0,
        hp:200,
        price:"£36.514",
        type:"petrol",
        owners:0,
        intro:"Immerse yourself in timeless elegance and exhilarating performance with the Audi A4 Saloon, where every journey becomes an unforgettable experience.",
        good:"good price",

    },
    {
        id:11,
        name: "Audi Q2",
        imaa: [audi_q2, t_audi_q2],
        year:2018,
        miles:35.671,
        hp:235,
        price:"£16.250" ,
        type:"petrol",
        owners:1,
        intro:"Discover a compact SUV that defies expectations with the Audi Q2, combining sporty agility, urban versatility, and exceptional craftsmanship.",
        good:"very good price",

    },
    {
        id:12,
        name: "Mercedes-Benz CLA",
        imaa: [mer__, t_mer_cla1, t_mer_cla],
        year:2023,
        miles:0,
        hp:260,
        price:"£43.000",
        type:"petrol",
        owners:0,
        intro:"Experience the perfect fusion of elegance and sportiness in the Mercedes-Benz CLA, a four-door coupe that captivates with its design and performance.",
        good:"good price",

    },
    {
        id:1,
        name: "Tesla Model 3",
        imaa: [t_model_3, t_model_31, t_model_32],
        year:2020,
        miles: 40.156,
        hp:283,
        price: "£32.999",
        type:"electric",
        owners:1,
        intro:"Redefining the electric car segment, the Tesla Model 3 combines innovation, range, and advanced technology in a compact and stylish package.",
        good:"very good price",

    },
    
]









