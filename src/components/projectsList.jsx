import React, { Component } from 'react'

class ProjectsList extends Component {
  constructor(props) {
    super(props)
  }

  log = () => {
    console.log(this.props.data.login)
  }
}
// const ProjectsList = ({ data }) => (
//   <div>
//     <p>{data.login}</p>
//   </div>
// )

export default ProjectsList
