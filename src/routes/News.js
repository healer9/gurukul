import React from 'react'
import NewsFeeds from '../News/NewsFeeds'
import NewsCard from '../components/NewsCard'

const News = () => {
    return (
        <div className="news-container">
            {NewsFeeds.map((NewsFeed) => {
                return (
                    <NewsCard
                        key={NewsFeed.id}
                        heading={NewsFeed.heading}
                        date={NewsFeed.date}
                        news={NewsFeed.news}
                    />
                )
            })}
        </div>
    )
}

export default News