import React from "react";
import classes from "./BeADonorPage.scss";

export default () => {
    return (
        <section className="bg-dark py-5 text-center" id="beadonor">
            <div className="container">
                <h1 className="display-2 text-white">Be A Doner</h1>

                <form action="" className="bg-warning mt-5 py-5">
                    <div className="container">
                        <div className="form-group mb-0">
                            <div className="row justify-content-center">
                                <label htmlFor="" className="col-2 col-form-label-lg">Name: </label>
                                <div className="col-8">
                                    <input type="text" className="form-control" placeholder="Name"/>
                                </div>
                            </div>
                        </div>

                        <div className="form-group mb-0">
                            <div className="row justify-content-center">
                                <label htmlFor="" className="col-2 col-form-label-lg">Email: </label>
                                <div className="col-8">
                                    <input type="email" className="form-control" placeholder="Enter Your Email"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group mb-0">
                            <div className="row justify-content-center">
                                <label htmlFor="" className="col-2 col-form-label-lg">Phone: </label>
                                <div className="col-8">
                                    <input type="number" className="form-control" placeholder="Phone Or Mobile"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row justify-content-center">
                                <div className="col-2 align-self-center">
                                    <label htmlFor="" className="col-form-label-lg ">Address: </label>
                                </div>
                                <div className="col-8">
                                    <textarea className="form-control" name="" id="" cols="30" rows="5" placeholder="Messages"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="form-group mb-0">
                            <div className="row justify-content-center">
                                <div className="col-2 align-self-center">
                                    <label htmlFor="" className="col-form-label-lg ">Blood Group*: </label>
                                </div>
                                <div className="col-8">
                                    <select name="" id="" className="form-control">
                                        <option value="Select None">Select None</option>
                                        <option value="A+">A+</option>
                                        <option value="A+">A-</option>
                                        <option value="A+">B+</option>
                                        <option value="A+">B-</option>
                                        <option value="A+">AB+</option>
                                        <option value="A+">AB-</option>

                                    </select>
                                </div>
                            </div>
                        </div>
                            <div className="row justify-content-center">
                                <div className="col-2"></div>
                                <div className="col-8">
                                    <input type="submit" value="Submit" className="btn btn-block btn-primary"/>
                                </div>
                            </div>
                    </div>
                </form>
            </div>
        </section>
    )
}