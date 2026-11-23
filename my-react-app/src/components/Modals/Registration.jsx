import React, { useState } from 'react'
import { Input } from '../Inputs/Input';

export const Registration = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
      <div>
        <Input type="email" value={email} change={setEmail} description={'write email'}/>
        <Input type="password" value={password} change={setPassword} description={'write password'}/>
      </div>
    );
}
