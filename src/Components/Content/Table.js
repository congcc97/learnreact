import React, { Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    };
  }

  isEdit = () => {
    if (this.state.editMode === false) {
      return (
        <div className="col-md-4">
          <div className="card">
            <div className="card-header card-header-success">
              <h4 className="card-title ">Add new</h4>
              <p className="card-category"> Thêm mới một sản phẩm vào bảng</p>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="inputName">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    placeholder="David Chan"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputPhone">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPhone"
                    placeholder="0948757369"
                  />
                </div>
                <div className="form-group bmd-form-group">
                  <label htmlFor="inputState" className="bmd-label-static">
                    Mode
                  </label>
                  <select id="inputState" className="form-control">
                    <option>Administrator</option>
                    <option>Manager</option>
                    <option>Editor</option>
                    <option>Member</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success btn-block">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="col-md-4">
          <div className="card">
            <div className="card-header card-header-warning">
              <h4 className="card-title ">Edit Mode</h4>
              <p className="card-category"> Chỉnh sửa thông tin thành viên</p>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="inputName">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    placeholder="David Chan"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputPhone">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPhone"
                    placeholder="0948757369"
                    pattern="[0-9]"
                  />
                </div>
                <div className="form-group bmd-form-group">
                  <label htmlFor="inputState" className="bmd-label-static">
                    Mode
                  </label>
                  <select id="inputState" className="form-control">
                    <option>Administrator</option>
                    <option>Manager</option>
                    <option>Editor</option>
                    <option>Member</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-warning btn-block">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      );
    }
  };

  btnEditClick = () => {
    this.setState({ editMode: true });
  };

  render() {
    console.log(this.props);
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title ">Simple Table</h4>
                  <p className="card-category">
                    {" "}
                    Here is a subtitle for this table
                  </p>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className=" text-primary">
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Phone</th>
                          <th>Mode</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Dakota Rice</td>
                          <td>Niger</td>
                          <td>Oud-Turnhout</td>
                          <td>
                            {" "}
                            <button
                              onClick={() => this.btnEditClick()}
                              className="btn btn-warning"
                              title="Edit"
                            >
                              <i className="fa fa-pencil-square-o" />
                            </button>
                            <button className="btn btn-danger" title="Delete">
                              <i className="fa fa-trash-o" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Minerva Hooper</td>
                          <td>Curaçao</td>
                          <td>Sinaai-Waas</td>
                          <td>
                            {" "}
                            <button
                              onClick={() => this.btnEditClick()}
                              className="btn btn-warning"
                              title="Edit"
                            >
                              <i className="fa fa-pencil-square-o" />
                            </button>
                            <button className="btn btn-danger" title="Delete">
                              <i className="fa fa-trash-o" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Sage Rodriguez</td>
                          <td>Netherlands</td>
                          <td>Baileux</td>
                          <td>
                            {" "}
                            <button
                              onClick={() => this.btnEditClick()}
                              className="btn btn-warning"
                              title="Edit"
                            >
                              <i className="fa fa-pencil-square-o" />
                            </button>
                            <button className="btn btn-danger" title="Delete">
                              <i className="fa fa-trash-o" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Philip Chaney</td>
                          <td>Korea, South</td>
                          <td>Overland Park</td>
                          <td>
                            {" "}
                            <button
                              onClick={() => this.btnEditClick()}
                              className="btn btn-warning"
                              title="Edit"
                            >
                              <i className="fa fa-pencil-square-o" />
                            </button>
                            <button className="btn btn-danger" title="Delete">
                              <i className="fa fa-trash-o" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Doris Greene</td>
                          <td>Malawi</td>
                          <td>Feldkirchen in Kärnten</td>
                          <td>
                            {" "}
                            <button
                              onClick={() => this.btnEditClick()}
                              className="btn btn-warning"
                              title="Edit"
                            >
                              <i className="fa fa-pencil-square-o" />
                            </button>
                            <button className="btn btn-danger" title="Delete">
                              <i className="fa fa-trash-o" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>Mason Porter</td>
                          <td>Chile</td>
                          <td>Gloucester</td>
                          <td>
                            {" "}
                            <button
                              onClick={() => this.btnEditClick()}
                              className="btn btn-warning"
                              title="Edit"
                            >
                              <i className="fa fa-pencil-square-o" />
                            </button>
                            <button className="btn btn-danger" title="Delete">
                              <i className="fa fa-trash-o" />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {this.isEdit()}
            <div className="col-md-12">
              <div className="card card-plain">
                <div className="card-header card-header-primary">
                  <h4 className="card-title mt-0">
                    {" "}
                    Table on Plain Background
                  </h4>
                  <p className="card-category">
                    {" "}
                    Here is a subtitle for this table
                  </p>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead className>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Country</th>
                          <th>City</th>
                          <th>Salary</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Dakota Rice</td>
                          <td>Niger</td>
                          <td>Oud-Turnhout</td>
                          <td>$36,738</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Minerva Hooper</td>
                          <td>Curaçao</td>
                          <td>Sinaai-Waas</td>
                          <td>$23,789</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Sage Rodriguez</td>
                          <td>Netherlands</td>
                          <td>Baileux</td>
                          <td>$56,142</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Philip Chaney</td>
                          <td>Korea, South</td>
                          <td>Overland Park</td>
                          <td>$38,735</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Doris Greene</td>
                          <td>Malawi</td>
                          <td>Feldkirchen in Kärnten</td>
                          <td>$63,542</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>Mason Porter</td>
                          <td>Chile</td>
                          <td>Gloucester</td>
                          <td>$78,615</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
