import classes from "./InfinityPagination.module.css"
import axios from "axios"
import { useEffect, useState } from "react"


export const InfinityPagination = () => {
    const [photos, setPhotos] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)

    const scrollHandler = (e) => {
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 ) {
            setFetching(true)
        }
    }

    useEffect( () => {
        axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${currentPage}`)
        .then(response => {
            setPhotos([...photos, ...response.data])
            setCurrentPage(prevState => prevState + 1)
        })
        .finally( () => setFetching(false))
        // eslint-disable-next-line
    }, [fetching])

    useEffect( () => {
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
        // eslint-disable-next-line
    }, [])

    return <div>
        {photos.map(photo => 
            <div className={classes.photo} key={photo.id}>
                <div className={classes.title}>
                    {photo.id}. {photo.title}
                </div>
                <img src={photo.thumbnailUrl} alt="" className={classes.photoItem}/>
            </div>
        )}
    </div>
}