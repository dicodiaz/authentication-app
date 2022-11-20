import { FC } from 'react';
import { Button, Form } from 'react-bootstrap';
import { MdEmail, MdLock } from 'react-icons/md';
import { ClassNameProp } from '../types';
import { TextInput } from './TextInput';

export const RegisterForm: FC<ClassNameProp> = ({ className }) => (
  <Form className={className}>
    <TextInput Icon={MdEmail} label="Email" type="email" placeholder="name@example.com" />
    <TextInput
      className="mt-3"
      Icon={MdLock}
      label="Password"
      type="password"
      placeholder="Password"
    />
    <Button className="mt-3 w-100" type="submit">
      Start coding now
    </Button>
  </Form>
);
