import React from 'react';
import { Carousel } from 'react-bootstrap';

export default class Home extends React.Component{
    render(){
        return(
            <div className='container'>
            <div>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://drive.google.com/uc?id=1nQsF__zBx9BSPxD-gVpiG6G_9DpR9l4e"
                        alt="First slide"
                        width="100px" height="475px"
                        />
                        <Carousel.Caption>
                        <h3>Selamat Datang Di Web Toko Buku</h3>
                        <p>Menyediakan Berbagai Macam Buku Yang Ingin Anda Cari</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://drive.google.com/uc?id=1zuxnpgoh0yU6Z3iWWKGmrqcABegkMZv-"
                        alt="Second slide"
                        width="100px" height="475px"
                        />
                        <Carousel.Caption>
                        <h3>ORDER SEKARANG JUGA</h3>
                        <p>Menerima Peminjaman Buku Dan Dikembalikan Pada Waktu Yang Ditentukan</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://drive.google.com/uc?id=1pL9f24x9DrwB_fJXIjS_1aC8PclvZJqk"
                        alt="Third slide"
                        width="100px" height="475px"
                        />
                        <Carousel.Caption>
                        <h3>Selamat Membaca</h3>
                        <p>Jangan Lupa Kasih Bintang 5</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                 </div>
                 <br /><br />
                 <div className='col'>
                        <div className='card-body bg-info'>
                            <div className='row'>
                                <div className='col'>
                                    <div className='card-body'>
                                        <h5 className='text-center'>Total Buku Fiksi</h5>
                                    </div>
                                    <h3 className='text-center'>200</h3>
                                </div>
                            </div>
                        </div>
                    <br />
                    <div className='col'>
                        <div className='card-body bg-warning'>
                            <div className='row'>
                                <div className='col'>
                                    <div className='card-body'>
                                        <h5 className='text-center'>Total Buku Non Fiksi</h5>
                                    </div>
                                    <h3 className='text-center'>120</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className='col'>
                        <div className='card-body bg-success'>
                            <div className='row'>
                                <div className='col'>
                                    <div className='card-body'>
                                        <h5 className='text-center'>Total Buku Memasak</h5>
                                    </div>
                                    <h3 className='text-center'>38</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}