const productList=[
    {
        id:'1',
        title:'لپ تاپ 15.6 اینچی ایسوس  ',
        price:28.405,
        image:'./images/laptop.webp'
    },
    {
        id:'2',
        title:'هدفون بلوتوثی اپل',
        price:10.049,
        image:'/images/headphone.png'
    },
    {
        id:'3',
        title:'گوشی موبایل سامسونگ',
        price:70.899,
        image:'/images/mobile.jpg'
    },
    {
        id:'4',
        title:'کنسول بازی سونی',
        price:26.607,
        image:'/images/playstation.jpg'
    },
    {
        id:'5',
        title:'تبلت سامسونگ',
        price:23.291,
        image:'/images/tablet.jpg'
    },
    {
        id:'6',
        title:'اسپیکر بلوتوثی قابل حمل',
        price:4.155,
        image:'/images/spiker.jpg'
    },
    {
        id:'7',
        title:'ساعت هوشمند اپل',
        price:39.595,
        image:'/images/watch.jpg'
    },
    {
        id:'8',
        title:'هدفون بیرداینامیک',
        price:11.35,
        image:'/images/headphone2.jpg'
    },
]
function getProductData(id){
    let productData=productList.find((item)=>item.id===id)
    return productData
}
export{productList,getProductData}