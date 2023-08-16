import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #f8f8f8;
  min-height: 100vh;
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 40px;
  list-style: none;
`;

export const Product = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  min-width: 300px;
  position: relative;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 16px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  h4 {
    font-size: 18px;
    font-weight: 600;
    color: #333;
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    color: #666;
    margin-bottom: 16px;
    text-align: center;
  }

  span:last-child {
    font-size: 18px;
    font-weight: 600;
    color: #ff6b6b;
    position: absolute;
    top: -16px;
    right: -16px;
    background-color: #ffffff;
    padding: 8px 16px;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const Tag = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  background-color: #333;
  padding: 4px 8px;
  border-radius: 8px;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50%;
  background-color: #ffffff;
  padding: 8px;
  border: 2px solid #333;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #222;
  }
`;

export const AnyDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  width: 80%;
`;
