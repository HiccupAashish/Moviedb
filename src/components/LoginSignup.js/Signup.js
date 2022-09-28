import React, { useContext, useRef, useState } from "react";
import { Card, Button, Form, Container } from "react-bootstrap";
import { fire } from "../../Firebase/firebase";
import { Link } from "react-router-dom";

export default function Signup() {

  const emailref = useRef();
  const passwordref = useRef();
  const [loading,setLoading]=useState(false)
  const passwordConfirmationref = useRef();
  const [error,setError]=useState()
  

  function handleSubmit(e){
    e.preventDefault()
    console.log(passwordref.current.value)
    if (passwordref.current.value === passwordConfirmationref.current.value){
      console.log("a")
   fire
   .auth()
   .createUserWithEmailAndPassword(emailref.current.value,passwordref.current.value)
   .catch((err)=>{
    switch(err.code){
     case 'auth/email-already-in-use':
        case 'auth/invalid-email':
                // setError(err.message)
                alert("Wrong Details")
                break;
                case 'auth/weak-password':
                    alert("Weak Password")
                    break;                
   }
})}
else{
    setError("Sorry the password and confirmation password do not Match")
}

  }
  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Sign Up</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailref} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordref} required />
                </Form.Group>
                <Form.Group id="confirm-password">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="confirm-password"
                    ref={passwordConfirmationref}
                    required
                  />
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">
                  Signup
                </Button>
              </Form>
            </Card.Body>
            {error && <div style={{Color:"red"}} className="error w-100 text-center mt-2">{error}</div>}
          <div className="w-100 text-center mt-2">
            Already Have an Account?<Link to="/login"> Log In</Link>
          </div>
          </Card>
        
        </div>
      </Container>
    </>
  );
}
