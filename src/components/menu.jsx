import React from 'react'
import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'

import useComponentVisible from '../hooks/useComponentVisible'
import ResumeViewer from '../components/resumeViewer'

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
    position: relative;
    padding: 10px;
  `

  const MenuToggle = styled.button`
    background: none;
    border: none;
    outline: none;
    z-index: 1;
  `

  const MenuItemsListContainer = styled.div`
    position: absolute;
    margin-left: 20px;
  `

  const MenuItemsList = styled.ul`
    list-style: none;
  `

  const MenuLink = styled(Link)`
    color: white;
  `

  const MenuItem = styled.li`
    font-size: 110%;
    font-weight: bold;
    & > a {
      transition: color 0.2s;
      color: white;
    }
    &:hover a {
      color: #62929e;
    }
  `

  return (
    <Container id="NavBar">
      <MenuToggle onClick={() => setIsComponentVisible(!isComponentVisible)}>
        <span>
          <FaBars size={35} style={{ color: 'white' }} />
        </span>
      </MenuToggle>
      {isComponentVisible && (
        <MenuItemsListContainer ref={ref}>
          <MenuItemsList id="MenuList">
            <MenuItem>
              <MenuLink to="/">Home</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/contact">Contact</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/projects">Projects</MenuLink>
            </MenuItem>
            <MenuItem>
              <ResumeViewer />
            </MenuItem>
          </MenuItemsList>
        </MenuItemsListContainer>
      )}
    </Container>
  )
}

export default Menu
