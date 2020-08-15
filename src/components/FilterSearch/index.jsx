import React, { useState } from 'react';
import { Navbar, Button, Form, Collapse, BDiv } from 'bootstrap-4-react';
import useUsersElements from '../UsersList/useUsersElements';

const FilterSearch = ({ token, setToken, onSearch }) => {
  const [searchName, setSearchName] = useState('');

  const { controlLogout } = useUsersElements({ token, setToken });

  const changeValue = e => setSearchName(e.target.value);

  const controlSearch = () => onSearch(searchName);

  const clearSearch = () => {
    setSearchName('');
    onSearch('');
  };

  return (
    <>
      <BDiv display="none lg-block xl-block">
        <Navbar expand="sm" dark bg="dark" mb="3">
          <Navbar.Brand href="#">Emphasoft</Navbar.Brand>
          <Navbar.Nav mx="auto" display="flex" alignItems="center">
            <Form.Input 
              type="text" 
              text="white" 
              placeholder="Поиск по логину..." 
              mr="sm-2"
              value={searchName} 
              onChange={changeValue}
            />
            <Button onClick={controlSearch} outline info ml="2">Поиск</Button>
            <Button onClick={clearSearch} outline info ml="2">Очистить</Button>
          </Navbar.Nav>
          <BDiv float="right">
            <Button onClick={controlLogout} outline info ml="2">Выход</Button>
          </BDiv>  
        </Navbar>
      </BDiv>
      <BDiv display="lg-none xl-none">
        <Collapse id="navbarToggleExternalContent">
        <BDiv bg="dark" p="2">
          <Form.Input 
            type="text" 
            text="white" 
            placeholder="Поиск по логину..." 
            m="lg-2" 
            value={searchName} 
            onChange={changeValue} 
          />
        </BDiv>
        <BDiv bg="dark" p="2" display="flex" alignItems="center" justifyContent="center">
            <Button onClick={controlSearch} outline info ml="2">Поиск</Button>
            <Button onClick={clearSearch} outline info ml="2">Очистить</Button>
            <Button onClick={controlLogout} outline info ml="2">Выход</Button>
        </BDiv>
      </Collapse>
      <Navbar dark bg="dark" display="flex" alignItems="center">
        <Navbar.Toggler target="#navbarToggleExternalContent" />
      </Navbar>
      </BDiv>
    </>
  );
};

export default FilterSearch;