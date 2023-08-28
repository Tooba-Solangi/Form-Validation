import React, { useState } from "react";
import "./faceBook.css";

const FaceBook = () => {
  const [firstName, setFirstName] = useState("");
const [firstNameMesg, setFirstNameMesg] =useState("Enter Your First Name")

  const [showFirstNameError, setShowFirstNameError] = useState(false)

  const [surName, setSurName] = useState("");
  const [surNameMesg, setsurNameMesg] =useState("Enter Your  Surname")

  const [showSurNameError, setShowSurNameError] = useState(false)


  const [email, setEmail] = useState("");
  const [emailMesg, setEmailMesg] =useState("Enter Your Valid Email or Phone Number")

  const [showEmailError, setShowEmailError] = useState(false)

  const [password, setPassword] = useState("");
  const [passwordMesg, setPasswordMesg] =useState("Enter Your Valid Password")

  const [showPasswordError, setShowPasswordError] = useState(false)



  const firstNameHandler = (event) => {
  
    setFirstName(event.target.value)
    if(firstName !==""){
setShowFirstNameError(true)
setFirstNameMesg("Looks Good!")

    }
  }
  
  const surNameHandler = (event) => {

    setSurName(event.target.value)
    if(surName !==""){
setShowSurNameError(true)
setsurNameMesg("Looks Good!")

    }
  }

  const emailHandler = (event) => {


    setEmail(event.target.value)
    if(email !==""){
setShowEmailError(true)
setEmailMesg("Looks Good!")


    }


  }
  const passwordHandler = (event) => {

    setPassword(event.target.value)
    if(password !==""){

setShowPasswordError(true)
setPasswordMesg("Looks Good!")

    }


  }

  const userFormSubmitHandler = (event) => {
    event.preventDefault()


    if (firstName === "") {
      setShowFirstNameError(true)

    }

    if (surName === "") {
      setShowSurNameError(true)


    }


    if (password === "") {
      setShowPasswordError(true)


    }


    if (email === "") {
      setShowEmailError(true)

    }

  }








 return (
    <div className="text-center body">
      <div className="">
        <div className="container">
          <h1 className="heading">facebook</h1>
          <div className="wrapper">
            <h2>Create a new account</h2>
            <span>It's quick and easy.</span>
            <hr />
            <div className="">
              <form onSubmit={userFormSubmitHandler}>
                <div className="form-row mt-4 mb-4">
                  <div className="col-auto d-flex">
                    <input value={firstName} onChange={firstNameHandler} type="text" className="form-control form-control-sm mb-2" id="Name" placeholder="Name" />
                    
                    {showFirstNameError  && <p className={`${firstNameMesg ==="Looks Good!"? "text-success":"text-danger"}`}> {firstNameMesg} </p>} 


                    <input value={surName} onChange={surNameHandler} type="text" className="form-control form-control-sm mb-2" id="Surname" placeholder="Surname" />
                    {showSurNameError && <p  className={`${firstNameMesg ==="Looks Good!"? 'text-success':"text-danger"}`}>{surNameMesg}</p>}




                  </div>

                  <div className="col-auto">
                    <input value={email} onChange={emailHandler} type="email" className="form-control form-control-sm mb-2" id="emailPhone" placeholder="Email or Phone" />
                    {showEmailError && <p  className={`${firstNameMesg ==="Looks Good!"? "text-success":"text-danger"}`}>{emailMesg}</p>}
                  </div>
                  <div className="col-auto">
                    <div className=" mb-2">
                      <input value={password} onChange={passwordHandler} type="Password" className="form-control form-control-sm" id="password" placeholder="Password" />
                      {showPasswordError && <p  className={`${firstNameMesg ==="Looks Good!"? "text-success":"text-danger"}`}>{passwordMesg}</p>}
                    </div>
                  </div>
                  <div className="col-auto">
                    <button type="submit" id="submit" className="btn btn-sm btn-fb mb-2 align-bottom text-white"> Sign Up</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaceBook;