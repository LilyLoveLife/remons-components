import React from 'react';
import 'antd/dist/antd.css';
import { Form, FormItemProps } from 'antd';
import { Com } from './const';

interface IPropsOption {
  /**
   * @description 所支持的组件类型
   */
  component?:
    | 'input'
    | 'inputPassword'
    | 'textarea'
    | 'inputNumber'
    | 'datePicker'
    | 'select'
    | 'radio'
    | 'checkbox'
    | 'rate'
    | 'slider'
    | 'timePicker'
    | 'upload'
    | 'treeSelect'
    | 'cascader'
    | any;
  /**
   * @description 透传到 FormItem 使用组件的参数
   */
  componentProps?: object;
}

export const IPropsOption = (props: IPropsOption) => null;

type IProps = IPropsOption & FormItemProps;

const MyForm: React.FC<IProps> = ({ component, componentProps, children, ...others }) => {
  let ReCompont = null;
  if (component) {
    if (typeof component === 'string') {
      ReCompont = Com[component];
    } else {
      ReCompont = component;
    }
  }

  return (
    <Form.Item {...others}>
      {ReCompont ? <ReCompont {...componentProps}></ReCompont> : children}
    </Form.Item>
  );
};

export default MyForm;
