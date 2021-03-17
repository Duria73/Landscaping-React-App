import React from 'react'
import styled from "styled-components"
import {Button} from "../components/Button";

import EmailBg from "../images/scope.jpg"

const Email = () => {
    return (
        <EmailContainer>
            <EmailContent>
                <h1>Contact Us</h1>
                <p>
                    To book a consultation, service call or make other inquiries, please fill out the contact form below or email us at GardenGlow@email.com.
                </p>
            <form action="#">
                <FormWrap>
                   
                        <label for="fname">First Name
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                        </label>

                        <label for="lname">Last Name
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                        </label>

                        <label for="email">Email
                            <input type="email" id="email" name="email" placeholder="Your Email.." />
                        </label>

                        <label for="subject">Subject
                        <textarea id="subject" name="subject" placeholder="Let Us Know How We Can Help.."></textarea>
                        </label>
              
                    <Button as="button" type="submit">Submit</Button>
                </FormWrap>
            </form>
            </EmailContent>
        </EmailContainer>
    )
}

export default Email

const EmailContainer = styled.div`
    background: linear-gradient(
        180deg,
        rgba(0,0,0,0.5) 0%,
        rgba(0,0,0,0.5) 35%,
        rgba(0,0,0,0.1) 100%
    ),
    url(${EmailBg}) no-repeat center;
    background-size: cover;
    height: 650px;
    width: 100%;
    padding: 5rem calc((100vw - 1300px) / 2);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`

const EmailContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        text-align: center;
        margin-bottom: 1rem;
        font-size: clamp(1rem, 5vw, 3rem);
        padding: 0 1rem;
    }

    p {
      text-align: center;
      font-size: clamp(1rem, 2.5vw, 1.5rem);
      padding: 0 1rem;
      margin-bottom: 2rem;  
    }

    form {
        z-index: 10;
    }
`

const FormWrap = styled.div`
   input[type=text], input[type=email], select, textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */ 
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* input[id=fname], input[id=lname] {
    display: flex;
    flex-direction
    width: 40% !important;
} */

/* Style the submit button with a specific background color etc */
input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type=submit]:hover {
  background-color: #45a049;
}
    @media screen and (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        width: 100%;
    }


    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0 1rem;

        input {
            margin-bottom: 1rem;
            width: 100%;
            margin-right: 0;
        }
    }
`