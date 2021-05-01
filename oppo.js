let data = [{
    link: "https://cellphones.com.vn/oppo-reno-5.html",
    img_url: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/o/p/oppo-reno-5_3_.jpg",
    discount: "-15%",
    name:"Oppo Reno 5",
    new_price: "7.390.000đ",
    old_price:"8.9690.000đ",
    rating:5,
    evaluate:"17 đánh giá",
    promotion:"Gói bảo hành 1 đổi 1 (12 tháng)",
},
{
    link: "https://cellphones.com.vn/oppo-a93.html",
    img_url: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/c/o/combo_-_a93-black_2.png",
    discount: "-18%",
    name:"Oppo A93 ",
    new_price: "5.290.000 ₫",
    old_price:"6.490.000₫",
    rating:5,
    evaluate:"3 đánh giá",
},{
    link: "https://cellphones.com.vn/oppo-a73.html",
    img_url: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/o/p/oppo-a73_1_.jpg",
    discount: "-13%",
    name:"Oppo A73",
    new_price: "4.790.000 ₫",
    old_price:"5.490.000 ₫",
    rating:5,
    evaluate:"1 đánh giá",
},{
    link: "https://cellphones.com.vn/oppo-a15.html",
    img_url: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/o/p/oppo-a15_1_.jpg",
    discount: "-11%",
    name:"Oppo A15",
    new_price: "3.050.000 ₫",
    old_price:"3.490.000 ₫",
    rating:4,
    evaluate:"3 đánh giá",
},{
    link: "https://cellphones.com.vn/oppo-reno-5-5g.html",
    img_url: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/o/p/oppo-reno-5-5g_2_.jpg",
    discount: "-11%",
    name:"Oppo Reno5 5G",
    new_price: "10.690.000 ₫",
    old_price:"11.990.000 ₫",
    rating:4,
    evaluate:"3 đánh giá",
},{
    link: "https://cellphones.com.vn/oppo-a94.html",
    img_url: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/o/p/oppo-a94-purple.png",
    discount: "-9%",
    name:"Oppo A94",
    new_price: "6.990.000 ₫",
    old_price:"7.690.000 ₫",
    rating:4,
},{
    link: "https://cellphones.com.vn/oppo-reno-4.html",
    img_url: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/_/0/_0003_combo_-_reno4_-_blue_-_full_check.jpg",
    discount: "-22%",
    name:"Oppo Reno 4",
    new_price: "6.590.000 ₫",
    old_price:"8.490.000 ₫",
    rating:4,
    evaluate:"6 đánh giá",
},{
    link: "https://cellphones.com.vn/oppo-a12.html",
    img_url: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/o/p/oppo-a12_1_.jpg",
    discount: "-13%",
    name:"Oppo A12 3GB",
    new_price: "2.590.000 ₫",
    old_price:"2.990.000 ₫",
    rating:4,
    evaluate:"2 đánh giá",
},{
    link: "https://cellphones.com.vn/oppo-a54.html",
    img_url: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/o/p/oppo-a54-4g-black-600x600.jpg",
    discount: "-27%",
    name:"Oppo A54",
    new_price: "4.290.000 ₫",
    old_price:"4.690.000 ₫",
    rating:4,
    evaluate:"2 đánh giá",
    promotion:"Quà"
},{
    link: "https://cellphones.com.vn/oppo-find-x3-pro.html",
    img_url: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/o/p/oppo-find-x3-pro_4.jpg",
    discount: "-7%",
    name:"Oppo FindX 3 Pro													",
    new_price: "5.500.000 ₫",
    old_price:"8.990.000 ₫",
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

