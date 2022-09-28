import React, { useEffect, useRef, useState } from "react";
import db, { fire } from "../../Firebase/firebase";
import { Form, Card, Button, Container } from "react-bootstrap";
import { useContext } from "react";

import { AuthContext } from "../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
  
 const navigate=useNavigate()
  const [error, setError] = useState();
  
  const [hasaccount, setHasAccount] = useState();
  const {currentUser,setCurrentUser}=useContext(AuthContext)
  
  const emailref=useRef()
  const passwordref=useRef()

  function handleLogin(e) {
 e.preventDefault()
 fire
 .auth()
 .signInWithEmailAndPassword(emailref.current.value,passwordref.current.value)
 .catch((err)=>{
    switch(err.code){
        case"auth/invalid-email":
        case "auth/user-disabled":
            case "auth/user-not-found":
                case "auth/wrong-password":
                // setError(err.message)
                alert("Put in the right Details")
                break;
                
    }
 })
}

 function authListener(){
    fire.auth().onAuthStateChanged((user)=>{
        if(user){
            setCurrentUser(user)
        }else{
            setCurrentUser("")
        }
    })
 }

 useEffect(()=>{
    authListener()
    if(currentUser){
        navigate("/")
    }
 },[])
  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWIdth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Login</h2>

              <Form onSubmit={ handleLogin }>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailref} required />
                </Form.Group>

                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordref} required />
                </Form.Group>
                <Button type="submit" className="w-100">
                  Login
                </Button>
                <div className="w-100 text-center mt-2">
                  Don't have an account? <Link to="/signup">Signup</Link>
                </div>
              </Form>
            </Card.Body>
            <Button></Button>
          </Card>
        </div>
      </Container>
    </>
  );
}
