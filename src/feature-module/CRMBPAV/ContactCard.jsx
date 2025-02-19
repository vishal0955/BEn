import React from 'react'

const ContactCard = () => {
  const activities = [
    {
      date: "24 Dec 2024 at 11:48 GMT",
      user: "Andrew Ashraf",
      action:
        "moved ticket Invoice - INV-0000214 from InsightAV CAD Services Private Limited For Date 9/12/24 Reddy Vineyard CAD Drawings",
      status: "Closed",
    },
    {
      date: "24 Dec 2024 at 11:48 GMT",
      user: "Andrew Ashraf",
      action:
        "moved ticket Invoice - INV-0000215 from InsightAV CAD Services Private Limited For 19/12/24 CAD Drawings",
      status: "Closed",
    },
    {
      date: "23 Dec 2024 at 17:40 GMT",
      user: "Andrew Ashraf",
      action:
        "Ticket Invoice - INV-0000215 from InsightAV CAD Services Private Limited For 19/12/24 CAD Drawings",
      status: "moved to New by Conversations",
    },
    {
      date: "23 Dec 2024 at 17:40 GMT",
      user: "Andrew Ashraf",
      action:
        "Ticket Invoice - INV-0000215 from InsightAV CAD Services Private Limited For 19/12/24 CAD Drawings",
      status: "created by Conversations",
    },
  ];
  return (

    <div className="container-fluid">
      <div className="row mt-3">
        {/* Sidebar */}
        <div className="col-lg-3 col-md-4 col-sm-12 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <div className="mb-3 d-flex justify-content-between">
                {/* <h5 className="text-info fw-semibold">
              <span>
                <i className="fa-solid fa-chevron-left fs-6 me-2" />
              </span>{" "}
              Contacts
            </h5> */}
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle text-info fw-semibold"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    Actions
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Send Email
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Call
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Send Text
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Go On This Linked
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Send Whatsapp essage
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mb-3 text-center">
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <img
                      src="https://i.ibb.co/zTFjy386/user.png"
                      alt="user"
                      className="rounded-circle"
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>
                  <div>
                    <h5>Nikunj</h5>
                    <a href="#" className="text-decoration-none text-info fw-semibold">
                      zohoinvoice.com
                    </a>
                    <p>Nikunj@zoho.com</p>
                  </div>
                </div>

                <div className="mt-4 d-flex justify-content-center flex-wrap">
                  <span className="me-2">
                    <i className="fa-solid fa-pen-to-square rounded-circle p-2 border bg-light" />{" "}
                    <br />
                    <span style={{ fontSize: 12 }}>Notes</span>
                  </span>
                  <span className="me-2">
                    <i className="fa-solid fa-envelope rounded-circle p-2 border bg-light" />{" "}
                    <br />
                    <span style={{ fontSize: 12 }}>Email</span>
                  </span>
                  <span className="me-2">
                    <i className="fa-solid fa-phone rounded-circle p-2 border bg-light" />{" "}
                    <br />
                    <span style={{ fontSize: 12 }}>Call</span>
                  </span>
                  <span className="me-2">
                    <i className="fa-solid fa-clipboard rounded-circle p-2 border bg-light" />{" "}
                    <br />
                    <span style={{ fontSize: 12 }}>Task</span>
                  </span>
                  <span className="me-2">
                    <i className="fa-solid fa-calendar-days rounded-circle p-2 border bg-light" />{" "}
                    <br />
                    <span style={{ fontSize: 12 }}>Meeting</span>
                  </span>
                  <span className="me-2">
                    <i className="fa-solid fa-ellipsis rounded-circle p-2 border bg-light" />{" "}
                    <br />
                    <span style={{ fontSize: 12 }}>More</span>
                  </span>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-between " style={{borderBottom:"1px solid grey"}}>
                <h6>
                  <i className="fa-solid fa-chevron-right me-2 text-info" /> About
                  this contact
                </h6>
                
                {/* <div className="dropdown">
              <button
                className="btn dropdown-toggle text-info fw-semibold"
                type="button"
                data-bs-toggle="dropdown"
              >
                Actions
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div> */}
              </div>
              <hr />
              <h6 style={{borderBottom:"1px solid grey"}}>
                <i className="fa-solid fa-chevron-right me-2 text-info" /> Communication Subcripation
                Intent
              </h6>
              
              <h6 className='mt-3' style={{borderBottom:"1px solid grey"}}>
                <i className="fa-solid fa-chevron-right me-2 text-info" /> Website Activity
              </h6>
            </div>
          </div>
        </div>
        {/* Main content */}
        <div className="col-lg-6 col-md-8 col-sm-12 content">
          {/* <h6 className="text-end text-info fw-semibold">
            <i className="fa-solid fa-gear text-secondary fs-6 me-1" /> Customize
            record
          </h6> */}
          <ul className="nav nav-tabs mt-3">
            <li className="nav-item">
              <button
                className="nav-link active text-dark"
                data-bs-toggle="tab"
                data-bs-target="#overview"
              >
                Overview
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link text-dark"
                data-bs-toggle="tab"
                data-bs-target="#activities"
              >
                Activities
              </button>
            </li>

          </ul>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="overview">
              <div className="card shadow-sm p-3">
                <div className=" d-flex justify-content-between my-2">
                  <div className="mb-2">
                    {/* Tabs */}
                    <div
                      className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4"
                    >
                      <div className="input-group mb-3 mb-md-0" style={{ maxWidth: "400px" }}>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search activities"
                          aria-label="Search activities"
                        />
                        <button className="btn btn-outline-secondary" type="button">
                          Search
                        </button>
                      </div>
                      <button className="btn btn-primary btn-sm">Customize record</button>
                    </div>
                    <ul
                      className="nav nav-tabs mb-3"
                      style={{
                        borderBottom: "2px solid #e9ecef",
                        fontSize: "0.95rem",
                        fontWeight: "500",
                      }}
                    >

                      <li className="nav-item">
                        <a className="nav-link" href="#activities">
                          Activities
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#notes">
                          Notes
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#emails">
                          Emails
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#calls">
                          Calls
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#tasks">
                          Tasks
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#meetings">
                          Meetings
                        </a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#meetings">
                          AI
                        </a>
                      </li>
                    </ul>

                    {/* Search Bar and Filters */}

                  </div>

                </div>


                <div>
                  <h6 className="text-secondary mb-3">December 2024</h6>
                  {activities.map((activity, index) => (
                    <div
                      key={index}
                      className="p-3 mb-2 border rounded"
                      style={{ backgroundColor: "#f9f9f9" }}
                    >
                      <p className="mb-1 text-muted" style={{ fontSize: "0.9rem" }}>
                        {activity.date}
                      </p>
                      <p className="mb-1" style={{ fontWeight: "bold" }}>
                        {activity.user}
                      </p>
                      <p className="mb-1">
                        {activity.action} <span style={{ fontWeight: "bold" }}>{activity.status}</span>
                      </p>
                      <a href="#view-details" className="text-primary" style={{ fontSize: "0.9rem" }}>
                        View details
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Additional Sidebar */}
        <div className="col-lg-3 col-md-4 col-sm-12 mb-4">
          <div className="card shadow-sm h-100">
            <div className="sidebar-menu p-3">
              <div className="menu-item" style={{borderBottom:"1px solid grey"}}>
                <span>
                  <i className="fa-solid fa-chevron-right fs-6 text-info me-3 p-2" />{" "}
                  Account Overview
                </span>
              </div>
              <div className="menu-item d-flex justify-content-between" style={{borderBottom:"1px solid grey"}}>
                <span>
                  <i className="fa-solid fa-chevron-right fs-6 text-info me-3 p-2" />{" "}
                  Companies (0)
                </span>
                <a href="#" className="text-info">
                  + Add
                </a>
              </div>
              <div className="menu-item d-flex justify-content-between" style={{borderBottom:"1px solid grey"}}>
                <span>
                  <i className="fa-solid fa-chevron-right fs-6 text-info me-3 p-2" />{" "}
                  Contacts (1)
                </span>
                <a href="#" className="text-info">
                  + Add
                </a>
              </div>
              <div className="menu-item d-flex justify-content-between" style={{borderBottom:"1px solid grey"}}>
                <span>
                  <i className="fa-solid fa-chevron-right fs-6 text-info me-3 p-2" />{" "}
                  Leads (0)
                </span>
                <a href="#" className="text-secondary fw-bold">
                  + Add
                </a>
              </div>
              <div className="menu-item d-flex justify-content-between" style={{borderBottom:"1px solid grey"}}>
                <span>
                  <i className="fa-solid fa-chevron-right fs-6 text-info me-3 p-2" />{" "}
                  Deals (0)
                </span>
                <a href="#" className="text-info fw-bold">
                  + Add
                </a>
              </div>
              <div className="menu-item d-flex justify-content-between" style={{borderBottom:"1px solid grey"}}>
                <span>
                  <i className="fa-solid fa-chevron-right fs-6 text-info me-3 p-2" />{" "}
                  Tickets (2)
                </span>
                <a href="#" className="text-info fw-bold">
                  + Add
                </a>
              </div>
              <div className="menu-item d-flex justify-content-between">
                <span>
                  <i className="fa-solid fa-chevron-right fs-6 text-info me-3 p-2" />{" "}
                  Invoices (0)
                </span>
                <a href="#" className="text-info" />
                <div className="dropdown">
                  <a href="#" className="text-info">
                    <button
                      className="btn text-info fw-bold dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Add
                    </button>
                  </a>
                  <ul
                    className="dropdown-menu "
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <a href="#" className="text-info"></a>
                    <li>
                      <a href="#" className="text-info" />
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="menu-item" style={{borderBottom:"1px solid grey"}}>
                <span>
                  <i className="fa-solid fa-chevron-right fs-6 text-info me-3 p-2" />
                  Health Score
                </span>
              </div>
              <div className="menu-item" style={{borderBottom:"1px solid grey"}}>
                <span>
                  <i className="fa-solid fa-chevron-right fs-6 text-info me-3 p-2" />
                  Lead Score
                </span>
              </div>
              <div className="menu-item d-flex justify-content-between" style={{borderBottom:"1px solid grey"}}>
                <span>
                  <i className="fa-solid fa-chevron-right fs-6 text-info me-3 p-2" />{" "}
                  Payments (0)
                </span>
                <a href="#" className="text-info fw-bold">
                  + Add
                </a>
              </div>
              <div className="menu-item d-flex justify-content-between" style={{borderBottom:"1px solid grey"}}>
                <span>
                  <i className="fa-solid fa-chevron-right fs-6 text-info me-3 p-2" />{" "}
                  Attachments{" "}
                </span>
                <a href="#" className="text-info" />
                <div className="dropdown" >
                  <a href="#" className="text-info">
                    <button
                      className="btn text-info fw-bold dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Add
                    </button>
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <a href="#" className="text-info"></a>
                    <li>
                      <a href="#" className="text-info" />
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                    </ul>
                
                </div>
              </div>
                
                <div className="menu-item" style={{borderBottom:"1px solid grey"}}>
                <span >
                  <i className="fa-solid fa-chevron-right fs-6 text-info me-3 p-2" />{" "}
                  Portant-Documents Automation (1)
                </span>
                
              </div>
              <div className="menu-item" style={{borderBottom:"1px solid grey"}}>
                <span >
                  <i className="fa-solid fa-chevron-right fs-6 text-info me-3 p-2" />{" "}
                  Portant | Latest Document
                </span>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ContactCard;