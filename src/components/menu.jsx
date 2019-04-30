import React, { useState, useEffect } from 'react'
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
  let [height, setHeight] = useState(0)

  useEffect(() => {
    let el = document.getElementById('MenuToggle')
    setHeight((height = el.offsetHeight))
  })

  const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    position: relative;
    padding: 10px;
    margin-top: 0.5%;
  `

  const MenuToggle = styled.button`
    background: none;
    border: none;
    outline: none;
    z-index: 1;
  `

  const MenuItemsListContainer = styled.div`
    position: absolute;
    margin-top: ${height}px;
    margin-left: 20px;
    padding: 10px;
    z-index: 1;
    background-color: whitesmoke;
    box-shadow: 0 10px 10px #666;
    border-radius: 10px;
  `

  const MenuItemsList = styled.ul`
    list-style: none;
    margin: 10px;
  `

  const MenuItem = styled.li`
    font-size: 110%;
    font-weight: bold;
    & > a {
      transition: color 0.2s;
      color: black;
    }
    &:hover > a {
      color: #62929e;
      background-color: whitesmoke;
    }
  `

  return (
    <Container>
      <MenuToggle
        id="MenuToggle"
        name="MenuToggle"
        aria-label="Menu toggle"
        onClick={() => setIsComponentVisible(!isComponentVisible)}
      >
        <span>
          <FaBars size={35} style={{ color: '#495159' }} />
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
