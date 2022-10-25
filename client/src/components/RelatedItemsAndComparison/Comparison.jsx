/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import productCompare from '../../lib/productCompare';

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color; rgba(0, 0, 0, 0.50);
  z-index: 500;
`;

const ModalWrapper = styled.div`
  width: 40%;
  height: 50%;
  position: fixed;
  max-height: 80%;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: white;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

const TableDiv = styled.div`
  width: fit-content;
  overflow-y: scroll;
  margin: auto;
  & > table {
    border-spacing: 70px 20px;
  }

  & > table > tbody > tr {
    text-align: center;
  }

`;
// TODO: give margin on text in modal
const ModalHeader = styled.h3`
  text-align: center;
`;

const Comparison = function Comparison({ setModalOpen, data }) {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [originalFeature, setOriginalFeature] = useState([]);
  const [combinedFeature, setCombinedFeature] = useState([]);
  const column = ['originalValue', 'feature', 'compareValue'];

  const modalClose = () => {
    setModalOpen(false);
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(`/api/products/${id}`);
      setOriginalFeature(res.data);
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  }, [id]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const compareResult = productCompare(originalFeature.features, data.features);
    setCombinedFeature(compareResult);
  }, [originalFeature.features, data.features]);

  if (loading) {
    return (
      <Background onClick={modalClose}>
        <ModalWrapper>
          <ModalHeader>Loading...</ModalHeader>
        </ModalWrapper>
      </Background>
    );
  }

  return (
    <Background onClick={modalClose}>
      <ModalWrapper>
        <TableDiv>
          <ModalHeader>COMPARING</ModalHeader>
          <table>
            <thead>
              <tr>
                <th>{originalFeature.name}</th>
                <th>Features</th>
                <th>{data.name}</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(combinedFeature) ? combinedFeature.map((item, index) => (
                <tr key={index}>
                  {column.map((col, idx) => (
                    <td key={idx}>{item[col]}</td>
                  ))}
                </tr>
              )) : null}
            </tbody>
          </table>
        </TableDiv>
      </ModalWrapper>
    </Background>
  );
};

Comparison.propTypes = {
  setModalOpen: PropTypes.func,
  data: PropTypes.shape({
    category: PropTypes.string,
    name: PropTypes.string,
    defaultPrice: PropTypes.number,
    ratings: PropTypes.number,
    thumbnails: PropTypes.array,
    features: PropTypes.array,
  }),
};

Comparison.defaultProps = {
  setModalOpen: null,
  data: null,
};

export default Comparison;
