import { Modal, ModalProps } from 'antd';
import React from 'react';
import './../../styles/customModal.scss';

const AntdModal = ({ ...props }: ModalProps) => {
  return <Modal className="custom-modal" {...props} />;
};

export default AntdModal;
