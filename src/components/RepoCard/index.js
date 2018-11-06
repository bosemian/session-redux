import React from 'react'

export default ({ data }) => (
  <div className="column is-3">
    <div className="card is-fixed-height">
      <div className="card-content">
        <div>
          <p className="subtitle has-text-weight-bold">{data.name}</p>
          <p>
            <i className="far fa-star" /> {data.stargazers_count}
            {data.language ? (
              <span
                className="tag is-rounded"
                style={{
                  float: 'right'
                }}
              >
                {data.language}
              </span>
            ) : null}
          </p>
        </div>

        <a className="button is-info" href={data.html_url} target="_blank">
          <span className="icon">
            <i className="fas fa-link" />
          </span>
        </a>
      </div>
    </div>
  </div>
)
