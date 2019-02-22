import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id
    console.log(props)
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
            <span className="card-title">Project Title -  {id}</span>
            <p> Lorem  teeeikums gars un gards jo gars</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
        <div>Posted in a Sunny day</div>
        <div> Time is around 22</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails 