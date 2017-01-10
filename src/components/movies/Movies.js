import React from 'react';
import axios from 'axios';
import PouchDB from 'pouchdb';

export default class Random extends React.Component{
  constructor(props){
    super(props);
    this.state = {results:[]};
    this.search = this.search.bind(this)
    this.clear = this.clear.bind(this);
    this.add = this.add.bind(this)
    this.db = new PouchDB('Movies')
  }

 clear(){
    this.setState({results: []});
  }
  search(){
    
      const query = this.query.value;
      const url = `http://www.omdbapi.com/?s=${query}&page=1`
      axios.get(url)
        .then(rsp => {
            const results = rsp.data.Search;
            this.setState({results});
        })
  }
  add(event){
      debugger
  }

  render(){
    return (
      <div>
        <h1>Movies</h1>
        <div className="panel panel-default">
            <div className="panel-body">
                <label>Search</label>
                <input ref={node => this.query = node} type="text" />
                <button onClick={this.search} className="btn btn-info btn-sm">Search</button>
                <button onClick={this.clear} className="btn btn-danger btn-sm">Clear</button>
            </div>
             <table className="table table-striped">
                
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Poster</th>
                        <th>Add</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.results.map((r,i) => {
                        return(
                            <tr key={i}>
                                <td>{r.Title}</td>
                                <td>{r.Year}</td>
                                <td><img src={r.Poster}/></td>
                                <td><button onClick={this.add} className="btn btn-info btn-xs">Add</button></td>
                            </tr>
                        )

                    })
                }
                </tbody>
             </table>
        </div>
      </div>
    );
  }
}