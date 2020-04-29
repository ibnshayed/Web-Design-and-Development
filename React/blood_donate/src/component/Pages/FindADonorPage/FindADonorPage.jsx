import React from "react";
import classes from "./FindADonorPage.scss";
export default () =>{
    return(
        <section className="bg-secondary py-5 text-center" id="findadonor">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="display-2 text-white">Find A Doner</h1>

                        <div className="bg-white mt-5">
                            <table className="table table-hover">
                                <thead className="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Blood Group</th>
                                    <th scope="col">Phone Number</th>
                                    <th scope="col">Update</th>
                                    <th scope="col">Delete</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>A+</td>
                                    <td>017212312</td>
                                    <td>
                                        <button className="btn btn-info px-3">Update</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger px-3">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>B+</td>
                                    <td>015215245</td>
                                    <td>
                                        <button className="btn btn-info px-3">Update</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger px-3">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>AB-</td>
                                    <td>0146212415</td>
                                    <td>
                                        <button className="btn btn-info px-3">Update</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger px-3">Delete</button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}