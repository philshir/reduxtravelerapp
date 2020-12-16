import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keyword' content={keywords} />
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Redux Traveler',
    description: 'Show your love and support with the hottest Reduxtraveler swag and gear!',
    keywords: 'swag, hiking gear, travel gear, travel accessories',
}

export default Meta
