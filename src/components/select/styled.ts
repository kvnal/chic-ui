import styled from 'styled-components';
import { ComponentSize, heights, sidePaddings } from '../../config/sizes';
import SvgArrowDown from '../../icons/ArrowDown';

interface SelectWrapperProps {
  width: string;
}

export const SelectWrapper = styled.div<SelectWrapperProps>`
  width: ${(pr) => pr.width};
  display: flex;
  flex-direction: column;
`;

export const SelectOption = styled.li`
  list-style: none;
  border-radius: 2px;
  padding: 8px;
  &:hover {
    background-color: rgba(144, 202, 249, 0.6);
  }
`;

interface StyledSelectDivProps {
  error: boolean;
  innerSize: ComponentSize;
  disabled: boolean;
}

export const StyledSelectDiv = styled.div<StyledSelectDivProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  transition: 0.1s ease-out;
  box-shadow: inset 0 0 0 2px ${(pr) => (pr.error ? '#d93848' : 'transparent')};
  background-color: ${(pr) => (pr.error ? 'ffe3e6' : '#EEEEEE')};
  height: ${(pr) => heights[pr.innerSize]}px;
  &:focus {
    box-shadow: inset 0 0 0 2px ${(pr) => (pr.error ? '#d93848' : '#000')};
  }

  //Disabled
  ${(pr) =>
    pr.disabled &&
    `
        background-color: #a6a6a6;
        color: #5e5e5e;
        cursor: not-allowed;

        &:hover {
            background-color: #a6a6a6 !important;
            color: #5e5e5e !important;
        }
    `}
`;

export const SelectOptionWrapper = styled.div`
  background-color: rgba(144, 202, 249, 0.16);
  max-height: 240px;
  &:hover {
    cursor: pointer;
  }
`;

export const ArrowDown = styled(SvgArrowDown)`
  box-sizing: border-box;
  height: 15px;
`;
