import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles.css'
import Button from "./Button/Button";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
import Loader from "./Loader/Loader";
import { useState, useEffect } from 'react';

import fetchImage from 'js/fetchImg';

const App = () => {
  const [pictures, setPictures] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [totalHits, setTotalHits] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (query === '') {
      return;
    }
    setStatus('pending');

    fetchImage(query, page)
      .then(pictures => {
        if (!pictures.totalHits) {
          toast.error('Did find anything');
        }
        return pictures;
      })

      .then(pictures => {
        const selectedProperties = pictures.hits.map(
          ({ id, largeImageURL, webformatURL }) => {
            return { id, largeImageURL, webformatURL };
          }
        );

        setPictures(prevState => [...prevState, ...selectedProperties]);
        setStatus('resolved');
        setTotalHits(pictures.total);
      })
      .catch(error => setError(error) && setStatus('rejected'));

  }, [query, page]);


  const processSubmit = query => {
    setQuery(query);
    setPictures([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={processSubmit} />
      {pictures && <ImageGallery images={pictures} />}
      {totalHits > pictures.length && (
        <Button onClick={handleLoadMore} />
      )}
      {status === 'pending' && <Loader />}
      {status === 'rejected' && { error }}
      <ToastContainer autoClose={2000} />
    </div >

  );
}

export default App;