import { FC } from 'react';
import { FloatingLabel, Form, InputGroup } from 'react-bootstrap';
import { IconType } from 'react-icons';
import { ClassNameProp } from '../types';

type TextInputProps = ClassNameProp & {
  Icon: IconType;
  label: string;
  type: string;
  placeholder: string;
};

export const TextInput: FC<TextInputProps> = ({ className, Icon, label, type, placeholder }) => (
  <InputGroup className={className}>
    <InputGroup.Text className="pe-0 bg-white border-end-0 rounded-start-3-and-half">
      <Icon className="fs-2 opacity-50" />
    </InputGroup.Text>
    <FloatingLabel label={<p className="opacity-50">{label}</p>}>
      <Form.Control
        className="text-input border-start-0 rounded-end-3-and-half"
        type={type}
        placeholder={placeholder}
      />
    </FloatingLabel>
  </InputGroup>
);
