import React, { useState } from 'react';
import { Input } from '../Inputs/Input';
export const SingIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <Input
        type="email"
        value={email}
        change={setEmail}
        description={'Email/login'}
      />
      <Input
        type="password"
        value={password}
        change={setPassword}
        description={'Your Password'}
      />
    </div>
  );
};
