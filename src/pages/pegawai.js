import React from "react";
import axios from "axios";
import { Modal,Form } from "react-bootstrap";

export default class Pegawai extends React.Component{
    constructor(){
        super()
        this.state = {
            jumlah_pegawai : 0,
            pegawai: [],
            isModalOpen : false,
            nip: "",
            nama: "",
            alamat: "",
            action: "",
            keyword: ""
        }
    }   
    getPegawai = () =>{
        let url= "http://localhost:4000/pegawai"
        axios.get(url)
        .then(res=> {
            console.log(res.data)
            console.log(res.data.count)
            console.log(res.data.pegawai)

            this.setState({
                jumlah_pegawai : res.data.count,
                pegawai : res.data.pegawai
            })
        })
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSave = (e) => {
        e.preventDefault()
        let data = {
            nip: this.state.nip,
            nama: this.state.nama,
            alamat: this.state.alamat
        }

        let url = ""
        // setting url
        if (this.state.action === "insert") {
            url = "http://localhost:4000/pegawai/save"
        }
        else if(this.state.action === "update"){
            url = "http://localhost:4000/pegawai/update"
        }

        // panggil api backend
        axios.post(url, data)
        .then(res => {
            console.log(res.data.message)
            this.getPegawai()
            this.handleClose()
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    handleSearch = (e) => {
        let url = "http://localhost:4000/pegawai"
        if (e.keyCode === 13) {
            let data = {
                keyword: this.state.keyword
            }
            axios.post(url, data)
            .then(res => {
                this.setState({
                    pegawai: res.data.pegawai
                })
                .catch(err => {
                    console.log(err.message)
                })
            })
            // console.log("search")   
        }
    }

    handleAdd = () =>{
        // console.log("add")
        this.setState({
            isModalOpen : true,
            nip:"",
            nama:"",
            alamat:"",
            action: "insert"
        })
    }
    handleClose = () =>{
        this.setState({
            isModalOpen: false
        })
    }
    handleEdit = (selectedItem) => {
        // console.log("edit")
        // console.log(selectedItem)
        this.setState({
            isModalOpen : true,
            nip : selectedItem.nip,
            nama : selectedItem.nama,
            alamat : selectedItem.alamat,
            action : "update"
        })
    }
    handleDelete = (nip) => {
        let url = "http://localhost:4000/pegawai/" + nip

        if (window.confirm('Yakin mau menghapus data ini?')) {
            axios.delete(url)
            .then(res => {
                console.log(res.message)
                this.getPegawai()
            })
            .catch(err => {
                console.log(err.message)
            })
        }
    }

    componentDidMount = () =>{
        this.getPegawai()
    }

    
    render(){
        return(
            <div className="container">
                <div className="m-3 card">
                    <div className="card-header bg-primary text-white">
                        Data Pegawai
                    </div>
                    <div className="card-body" >
                        <input type="text" className="form-control mb-2" 
                        name="keyword" value={this.state.keyword} 
                        onChange={this.handleChange} onKeyUp={this.handleSearch} 
                        placeholder="Masukkan Nip/Nama/Alamat" />
                        <table className="table">
                            <thead>
                                <th>NIP</th>
                                <th>Nama</th>
                                <th>Alamat</th>
                                <th>Action</th>
                            </thead>
                            <tbody>
                                {this.state.pegawai.map((item,index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{item.nip}</td>
                                            <td>{item.nama}</td>
                                            <td>{item.alamat}</td>
                                            <td>
                                                <button className="btn btn-sm btn-info m-1" onClick={() => {this.handleEdit(item)}}>Edit</button>
                                                <button className="btn btn-sm btn-danger m-1" onClick={() => {this.handleDelete(item.nip)}}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                            <button className='btn btn-success' onClick={this.handleAdd}>Tambah Data</button>
                        </table>
                    </div>
                </div>
                 {/* ini modal */}
                 <Modal show={this.state.isModalOpen} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Form Pegawai</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={e => this.handleSave(e)}>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="nip">
                            <Form.Label>NIP</Form.Label>
                            <Form.Control type="text" name="nip" placeholder="Masukkan NIP" 
                            value={this.state.nip} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="nama">
                            <Form.Label>Nama</Form.Label>
                            <Form.Control type="text" name="nama" placeholder="Masukkan Nama" 
                            value={this.state.nama} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="alamat">
                            <Form.Label>Alamat</Form.Label>
                            <Form.Control type="text" name="alamat" placeholder="Masukkan Alamat" 
                            value={this.state.alamat} onChange={this.handleChange} />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                    <button variant="secondary" onClick={this.handleClose}>
                        Close
                    </button>
                    <button variant="primary" type="submit">
                        Save
                    </button>
                    </Modal.Footer>
                    </Form>
                </Modal>
            </div>
        )
    }
}