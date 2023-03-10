import React from 'react';
import styled from '@emotion/styled';

// import { ChevronDown } from '../../icons/ChevronDown';
// import { ChevronUp } from '../../icons/ChevronUp';
// import { Icon } from '../Icon';

const AccordionItemContainer = styled.div`
  display: block;
  margin-bottom: 5px;
`;

const AccordionItemTitle = styled.div`
  box-sizing: border-box;
  max-height: 50px;
  background-color: red;
  padding: '5px';
  border-radius: '5px';
  cursor: pointer;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;

  &.show {
    border-top: 1px solid red;
    border-left: 1px solid red;
    border-right: 1px solid red;
    border-bottom: 0px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  &.hide {
    border: 1px solid red;
  }
`;

const AccordionItemContent = styled.div`
  padding: '5px';
  &.show {
    display: block;
    border: 1px solid red;
    border-top: 0px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  &.hide {
    display: none;
  }
`;

//AccordionItem doesnt know about anything happening on the outside (self contained)
export const AccordionItem = ({ data, isOpen, onClick }) => {
  return (
    <AccordionItemContainer>
      <AccordionItemTitle
        onClick={(index) => onClick(index)}
        className={isOpen ? 'show' : 'hide'}
      >
        {data.title}
        {
          // <Icon iconSize='30px' color='white'>
          //   {isOpen ? ChevronUp : ChevronDown}
          // </Icon>
        }
      </AccordionItemTitle>
      <AccordionItemContent className={isOpen ? 'show' : 'hide'}>
        {data.body}
      </AccordionItemContent>
    </AccordionItemContainer>
  );
};
