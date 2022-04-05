import React from "react";

export default class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [], //local
      user: "", //session
      total: 0, //dapat dari hasil perhitungan
    };
  }
  getUser = () => {
    let userName = sessionStorage.getItem("user");
    this.setState({
      user: userName,
    });
  };
  getCart = () => {
    let tempCart = [];
    let totalHarga = 0;
    if (localStorage.getItem("cart") !== null) {
      tempCart = JSON.parse(localStorage.getItem("cart"));
    }
    tempCart.map((item) => {
      return (totalHarga = totalHarga + item.harga * item.jumlahBeli);
    });
    this.setState({
      cart: tempCart,
      total: totalHarga,
    });
  };
  componentDidMount = () => {
    this.getUser();
    this.getCart();
  };
  drop = (item) => {
    if (window.confirm("Apakah anda yakin ingin menghapus data ini")) {
        window.localStorage.removeItem('cart');
        window.location.reload(false);
    }
  };
  render() {
    return(
        <div className="container">
          <div className="card col-12 mt-2">
            <div className="card-header bg-primary text-white">
              keranjang belanja
            </div>
            <div className="card-body">
              <h5 className="text-grey">
                  Nama Pengguna : {this.state.user}
                </h5>
                <table className="table table-bordered">
                  <thead>
                      <th>Judul Buku</th>
                      <th>Harga</th>  
                      <th>Jumlah</th>
                      <th>Total Harga</th>
                      <th>Hapus Buku</th>
                  </thead>  
                  <tbody>
                    {this.state.cart.map((item, index) => {
                      return(
                        <tr key={index}>
                          <td>{item.judul}</td>
                          <td>{item.harga}</td>
                          <td>{item.jumlahBeli}</td>
                          <td>{item.harga * item.jumlahBeli}</td>
                          <td>
                            <button className='btn btn-danger' onClick={() => this.drop()}>
                                Hapus
                            </button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
                <th>
                <h5 className="text-info">
                  Total Harga : {this.state.total}
                </h5>
                <button className='btn btn-danger' onClick={() => this.drop()}>
                        Hapus Semua
                </button>
                </th>
            </div>
          </div>
        </div>
    ) 
  }
}