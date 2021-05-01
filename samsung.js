let data = [{
    link: "https://cellphones.com.vn/samsung-galaxy-note-20-ultra-5g.html",
    img_url: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg",
    discount: "-36%",
    name:"Samsung Galaxy Note 20 Ultra 5G",
    new_price: "29.299.000đ",
    old_price:"32.990.000đ",
    rating:5,
    evaluate:"5 đánh giá",
    promotion:"Giảm 30% đồng hồ samsung active 2",
},
{
    link: "https://cellphones.com.vn/samsung-galaxy-a52.html",
    img_url: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-a52-26.jpg",
    discount: "-9%",
    name:"Samsung Galaxy A52 ",
    new_price: "8.500.000 ₫",
    old_price:"9.290.000₫",
    rating:5,
    evaluate:"3 đánh giá",
    promotion:"Quà tặng",
},{
    link: "https://cellphones.com.vn/samsung-galaxy-a72.html",
    img_url: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-a72-30.jpg",
    discount: "-9%",
    name:"Samsung Galaxy A72",
    new_price: "10.500.000 ₫",
    old_price:"11.490.000 ₫",
    rating:5,
    evaluate:"5 đánh giá",
    promotion:"Giảm 30% đồng hồ samsung active 2",
},{
    link: "https://cellphones.com.vn/samsung-galaxy-note-20-ultra.html",
    img_url: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/b/l/black_final.jpg",
    discount: "-17%",
    name:"Samsung Galaxy Note 20 Ultra",
    new_price: "24.850.000 ₫",
    old_price:"29.990.000 ₫",
    rating:4,
    evaluate:"6 đánh giá",
    promotion:"Giảm 30% đồng hồ samsung active 2",
},{
    link: "https://cellphones.com.vn/samsung-galaxy-note-20.html",
    img_url: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/m/i/mint_final.jpg",
    discount: "-19%",
    name:"Samsung Galaxy Note 20										",
    new_price: "19.450.000 ₫",
    old_price:"23.990.000 ₫",
    rating:4,
    evaluate:"8 đánh giá",
    promotion:"Giảm 30% đồng hồ samsung active 2",
},{
    link: "https://cellphones.com.vn/samsung-galaxy-s20-ultra.html",
    img_url: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/6/3/637170935875912528_ss-s20-ultra-den-1.png",
    discount: "-38%",
    name:"Samsung Galaxy S20 Ultra												",
    new_price: "18.700.000 ₫",
    old_price:"29.990.000 ₫",
    rating:4,
    evaluate:"7 đánh giá",
    promotion:"Giảm thêm 500.000đ khi mua kèm apple watch series 6",
},{
    link: "https://cellphones.com.vn/samsung-galaxy-a11.html",
    img_url: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/3/_/3_48_28.jpg",
    discount: "-10%",
    name:"Samsung Galaxy A11													",
    new_price: "2.700.000 ₫",
    old_price:"2.990.000 ₫",
    rating:4,
    evaluate:"8 đánh giá",
},{
    link: "https://cellphones.com.vn/samsung-galaxy-z-fold-2-mua-he.html",
    img_url: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/g/a/galaxy-z-fold2-5g-1_3_3.jpg",
    discount: "-5%",
    name:"Samsung Galaxy Z Fold2 5G",
    new_price: "47.500.000 ₫",
    old_price:"50.000.000 ₫",
    rating:4,
    evaluate:"7 đánh giá",
    promotion:"Tặng samsung watch 3",
},{
    link: "https://cellphones.com.vn/samsung-galaxy-a71.html",
    img_url: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-a71-thumblo_n-tra_ng-600x600_1_2_1.jpg",
    discount: "-27%",
    name:"Samsung Galaxy A71												",
    new_price: "32.000.000 ₫",
    old_price:"36.990.000 ₫",
    rating:4,
    evaluate:"35 đánh giá",
},{
    link: "https://cellphones.com.vn/samsung-galaxy-fold-2.html",
    img_url: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/g/a/galaxy-z-fold2-5g-1.jpg",
    discount: "-7%",
    name:"Samsung Galaxy Z Fold 5G													",
    new_price: "46.500.000 ₫",
    old_price:"49.990.000 ₫",
    rating:4,
    evaluate:"1 đánh giá",
    promotion:"Đặc quyền ưu đãi",
},]

let render_rating = (rate)=>{
    let html = ``
    for(let i = 0;i<5;i++ ){
        if(i<rate){
            html += `<i class="fa fa-star rating-checked"></i>`
        }else{
            html += `<i class="fa fa-star"></i>`
        }
    }
    console.log(html);
    return html
}
let render_product = (data) =>{
    let dom = document.querySelector('.product-container ul')
    dom.innerHTML = ''
    for(let i =0; i<data.length;i++){
        let html = `            <li>
        <div class="top-product">
            <a href="${data[i].link}"><img src="${data[i].img_url}" alt=""></a>
            <div class="sticker">
                <span>${data[i].discount}</span>
            </div>
        </div>
        <div class="bot-product">
            <h3>${data[i].name}</h3>
            <div class="price-box">
                <p class="new-price">${data[i].new_price}
                </p>
                <p class="old-price">${data[i].old_price}</p>
            </div>
            <span class="rating_product">${render_rating(data[i].rating)}
                "${data[i].evaluate}"
            </span>
            <div class="promotion-product">
                <p>${data[i].promotion}</p>
            </div>
            <div class="buy-btn-box">
                <button>Mua Ngay</button>
            </div>
        </div>
    </li>`
    dom.innerHTML += html
    }
}

render_product(data)

