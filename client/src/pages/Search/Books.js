import React from 'react'

const Books = props => {
  const { id, title, image, snippet, author, summary, linkTo, handleSave, handleDel } = props;

  return (

    <div className="container" id={id}>
      <div class="card">
        <div class="card-header">
          {title || "Harry Potter"}
        </div>
        <img class="card-img-top" src={image} alt={title} />
        <div class="card-body">
          <h5 class="card-title">{snippet}</h5>
          <h5 class="lead">{author}</h5>
          <p className="card-text">{summary}</p>
          <button type="button" btn className="btn-outline-info">
            <a href={linkTo}>View</a>
          </button>
          {/* will add login here for differentiating whether to display delete or save btn */}
          <button type="button" btn className={"btn-outline-success" || "btn-outline-danger"}>
            <a href={handleSave || handleDel}>{"Save" || "Delete"}</a>
          </button>
        </div>
      </div>
    </div>

  )
}

export default Books