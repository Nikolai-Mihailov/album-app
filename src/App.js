import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchData } from './store/slices/actions/fetchData';
import { Grid, Container } from '@mui/material'

import CardComponent from './components/UI/Card';
import HeaderComponent from './components/UI/Header';


function App() {

  const map = new Map();
  const result = [];
  const data = useSelector(state => state.albums.items);
  const dispatch = useDispatch();

  // Get the unique albums ID whit thumbnailUrl
  data.forEach(item => {
    if (!map.has(item.albumId)) {

      map.set(item.albumId, true)
      result.push({
        albumId: item.albumId,
        thumbnailUrl: item.thumbnailUrl
      })
    }
  });

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch]);

  const albums = result.map((item, index) => {
    return (
      <Grid item xs key={index}>
        <CardComponent albumNumver={item.albumId} thumbnailUrl={item.thumbnailUrl} />
      </Grid>
    )
  });

  return (
    <div className="App">
      <HeaderComponent />
      <Container disableGutters maxWidth="true" >
        <Grid container spacing={3} pr={2} pl={2} alignItems="center" style={{ minHeight: "90vh" }}>
          {albums}
        </Grid>
      </Container>
    </div>
  );
}


export default App;
