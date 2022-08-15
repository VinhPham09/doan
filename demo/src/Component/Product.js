import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return (
        <section className="product">
        <div className="container">
          <div className="product top row">
            <p>Trang chủ</p> <span>⟶</span>; <p>Nữ</p>;<span>⟶</span>;<p>Hàng nữ mới về</p>; <span>⟶</span>;
          </div>
          <div className="product-content row">
            <div className="product-content-left row">
              <div className="product-content-left-big-img">
                <img src="./image/1-1.jfif" alt="" />
              </div>
              <div className="product-content-left-small-img">
                <img src="./image/1-1.jfif" alt="" />
                <img src="./image/1-2.jfif" alt="" />
                <img src="./image/1-1.jfif" alt="" />
              </div>
            </div>
            <div className="product-content-right">
              <div className="product-content-right-product-name">
                <h1>ÁO THUN CỔ TRÒN</h1>
                <p>MSP: 123123</p>
              </div>
              <div className="product-content-right-product-price">
                <p>600.000<sup>đ</sup></p>
              </div>
              <div className="product-content-right-product-color">
                <p><span>Màu sắc</span>:Xanh cổ vịt <span style={{color: 'red'}}>*</span></p>
                <div className="product-content-right-product-color-img">
                  <img src="./image/anh-mau-den.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
  }
}
