import React from 'react';
import $ from 'jquery';
import './App.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          action: 0,
          index: '',
         p: []
        }
    } 

    componentDidMounte(){
        this.refs.nama.focus();
    }

    submit = (e) => {
        e.preventDefault();
        console.log('try');

        let p = this.state.p;
        let nama = this.refs.nama.value;

        if(this.state.action === 0){   
            let data = {
              nama
            }
            p.push(data);
        }else{                      
            let index = this.state.index;
            p[index].nama = nama;
        }  

        this.setState({
            p: p,
            action: 0
        });

        this.refs.myForm.reset();
        this.refs.nama.focus();
    }

    delete = (i) => {
        let p = this.state.p;
        p.splice(i,1);

        this.setState({
            p: p
        });

        this.refs.myForm.reset();
        this.refs.nama.focus();
    }

    edit = (i) => {
        let data = this.state.p[i];
        this.refs.nama.value = data.nama;

        this.setState({
            action: 1,
            index: i
        });

        this.refs.nama.focus();
    }

    render() {
        let p = this.state.p;
        return(
            <div className="col-sm-7 mx-auto m-5 bg-dark text-white"><br/>
                <div className="text-center">
                    <h4>List Mahasiswa</h4>
                </div>
                <form ref="myForm" className="myForm">
                    <div className="form-group">
                    <label className="col-form-label">Nama</label>
                    <input type="text" ref="nama" className="form-control"></input>
                    </div>
                    <button onClick={(e)=>this.submit(e)} className="btn btn-success btn-block">Submit </button>
                </form><br/><br/>
                <pre>
                    {p.map((data,i) => {
                        return(
                            <table key={i} className="table bg-light text-black">
                                <tr>
                                    <td>{data.nama}</td>
                                    <td>
                                        <button onClick={()=>this.edit(i)} className="btn btn-sm btn-info m-1">Edit</button>
                                        <button onClick={()=>this.delete(i)} className="btn btn-sm btn-danger m-1">Delete</button>
                                    </td>
                                </tr>
                            </table>
                        );
                    })}
                </pre>
            </div>
        );
    }
}
export default App;