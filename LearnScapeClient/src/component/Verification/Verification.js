import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import './Verification.scss';
export default function Verification() {
    return (
        <div className = "Verification">
            <p className = "emailVerify">Email Verfication</p>
            <form>
            <Input type  ="password" title = "OTP" icon = "fa fa-lock" />
            <Button title = "verify" text = "Verify" />
            </form>
            
        </div>
    )
}
