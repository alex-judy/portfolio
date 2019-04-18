import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'

import useComponentVisible from '../hooks/useComponentVisible'

function Menu() {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(false)

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    height: 100%;
    padding-bottom: 10px;
  `

  const MenuToggle = styled.button`
    background: none;
    border: none;
    outline: none;
  `

  const MenuItemsListContainer = styled.div``

  const MenuItemsList = styled.ul`
    list-style: none;
    justify-content: space-evenly;
    flex-direction: column;
    background: darkgray;
  `
  const MenuItem = styled.li`
    fontweight: bold;
    color: black;
  `

  return (
    <Container id="NavBar">
      <MenuToggle onClick={() => setIsComponentVisible(!isComponentVisible)}>
        <span>
          <FaBars />
        </span>
      </MenuToggle>
      {isComponentVisible && (
        <MenuItemsListContainer ref={ref}>
          <MenuItemsList id="MenuList">
            <MenuItem>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/contact">Contact</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/projects">Projects</Link>
            </MenuItem>
          </MenuItemsList>{' '}
        </MenuItemsListContainer>
      )}
    </Container>
  )
}

export default Menu
