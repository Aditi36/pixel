import { useState, useEffect } from 'react'
import { HeartFill } from 'react-bootstrap-icons'

function App() {
  const apiKey = '22370348-bfe5606cd71a228b69adf1909'
  let [text, setText] = useState("aurora")
  let [data, setData] = useState([])

  useEffect(() => {
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${text}&image_type=photo`

    fetch(url)
    .then(res => res.json())
    .then(res2 => {
      setData(res2.hits)
    })
    .catch(err => console.log(err))
  }, [text])


  return (
    <div className="container my-5">
      <center>
        <h1 className="display-3 mb-5" style={styles.heading}><i>Pixel</i></h1>
        <div className="col-lg-6 mx-auto mb-3">
          <div className="input-group input-group-lg">
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Search here..." onChange={(e) => setText(e.target.value)} autoFocus />
          </div>
        </div>
      </center>

      <br />

      <div className="row">
        {
          data.map(item => {
            return (
              <div className="col-lg-4" key={item.id}>
                <div className="card p-2 my-3">
                  <img src={item.largeImageURL} className="card-img-top" alt={item.tags} style={styles.image} />
                  <div className="card-body">
                    <HeartFill color="red" /> {item.likes}
                    <p className="text-muted">{item.tags}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

      <center>
        <p className="text-muted mt-2">Made with <HeartFill color="red" /> by Aditi.</p>
      </center>
    </div>
  );
}

const styles = {
  image: {
    maxHeight: '150px',
    maxWeidth: '150px'
  },
  heading: {
    color: 'silver'
  }
}

export default App