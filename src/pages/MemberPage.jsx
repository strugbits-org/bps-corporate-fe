import React from 'react'
import { Helmet } from 'react-helmet'

const MemberPage = () => {
  return (
    <div>
       <Helmet>
        <title>Members page</title>
        <meta
          name="description"
          content="Events are crucial for enhancing brand awareness, offering exclusive
           chances to showcase ideas, products, and services intimately."
        />
      </Helmet>
      <h1>this is private page</h1>
    </div>
  )
}

export default MemberPage
