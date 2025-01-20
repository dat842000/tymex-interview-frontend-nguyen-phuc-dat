import React from 'react';
import { Divider } from 'antd';
import {
  NAV_FOOTER_ITEMS,
  NAV_FOOTER_POLICY_ITEMS,
} from '../utils/constant.ts';
import AntdButton from './AntdButton.tsx';
import Handset from '../assets/icons/handset.svg';
import Comment from '../assets/icons/comment.svg';
import ImgIcon from './ImgIcon.tsx';
import AntdInput from './AntdInput.tsx';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__above">
          <div className="footer__navigation-section">
            <span className="footer__navigation-section__header">
              Navigation
            </span>
            <div className="footer__navigation-section__content">
              {NAV_FOOTER_ITEMS.map((item) => (
                <span key={item.label}>{item.label}</span>
              ))}
            </div>
          </div>
          <div className="footer__contact-section">
            <span className="footer__contact-section__header">Contact us</span>
            <div className="footer__contact-section__content">
              <div className="footer__contact-section__item">
                <ImgIcon src={Handset} size={20} />
                <span>01234568910</span>
              </div>
              <div className="footer__contact-section__item">
                <ImgIcon src={Comment} size={20} />
                <span>tymex-talent@tyme.com</span>
              </div>
            </div>
          </div>
          <div className="footer__subcribe-section">
            <span className="footer__subcribe-section__header">
              Subcribe to receive our latest update
            </span>
            <div className="footer__subcribe-section__content">
              <AntdInput variant="outlined" placeholder="Your email address" />
              <AntdButton text="Subcribe" />
            </div>
          </div>
        </div>
        <Divider
          style={{ borderBlockStart: '1px solid rgba(58, 56, 65, 1)' }}
        />
        <div className="footer__below">
          <div>©2023 Tyme - Edit. All Rights reserved.</div>
          <div className="footer__policy-navigation-section">
            {NAV_FOOTER_POLICY_ITEMS.map((item) => (
              <span key={item.label}>{item.label}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
