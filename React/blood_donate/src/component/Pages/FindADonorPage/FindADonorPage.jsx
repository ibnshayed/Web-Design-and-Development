import React, {Fragment, useContext, useEffect} from "react";
import classes from "./FindADonorPage.scss";
import Table from "../../Table/Table";
import {DonorContext} from "../../../context/DonorContextProvider/DonorContextProvider";
export default () =>{

    const donorContext = useContext(DonorContext);

    useEffect(() => {
       donorContext.getAllDonors();
    },[]);

    const viewDonorDetails = (
      <Fragment>
          <div className="modal fade text-left" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLongTitle">Donor</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <div className="modal-body">
                          <div className="row">
                              <div className="col-4">Name: </div>
                              <div className="col-8">Emran</div>
                          </div>
                          <div className="row">
                              <div className="col-4">Blood Group: </div>
                              <div className="col-8">A+</div>
                          </div>
                      </div>
                      <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      </div>
                  </div>
              </div>
          </div>
      </Fragment>
    );

    return(
        <section className="bg-secondary py-5 text-center" id="findadonor">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="display-2 text-white">Find A Doner</h1>

                        <div className="bg-white mt-5">
                            {
                                donorContext.donors ?
                                    <Table columns={donorColumn}
                                           dataSource={donorContext.donors}
                                            view={viewDonorDetails}/>
                                    : null
                            }

                            {viewDonorDetails}

                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
};

const donorColumn = [
    {
        key: "id",
        title: "ID",
        dataIndex: "id"
    },
    {
        key: "name",
        title: "Name",
        dataIndex: "name"
    },
    {
        key: "bloodType",
        title: "Blood Group",
        dataIndex: "bloodType"
    },
    {
        key: "phone",
        title: "Phone",
        dataIndex: "phone"
    },
    {
        key: "action",
        title: "Action"
    }

];