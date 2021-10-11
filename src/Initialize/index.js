import React, { useState } from 'react';
import getJoke from '../api/data/jokeData';
// import getJoke from '../api/data/jokeData';

function Initialize() {
  const [btnText, setBtnText] = useState('Get a Joke');
  const [joke, setJoke] = useState({});
  // console.warn(joke);
  // getJoke().then(console.warn);
  console.warn(setBtnText);

  const setButton = (text) => {
    setBtnText(text);
  };

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });

      setButton('Get Punchline');
    });
  };

  //   return (
  //     <div className="App">
  //       <h1>
  //         { joke.setup }
  //       </h1>
  //       <h1>
  //         { btnText !== 'Get Punchline' ? joke.punchline : '' }
  //       </h1>
  //       { btnText === 'Get a Joke' || btnText === 'Get Another Joke' ? (
  //         <button
  //           onClick={getAJoke}
  //           type="button"
  //           className="btn btn-outline-dark"
  //         >
  //           {btnText}
  //         </button>
  //       ) : (
  //         <button
  //           onClick={() => setButton('Get Another Joke')}
  //           type="button"
  //           className="btn btn-outline-dark"
  //         >
  //           {btnText}
  //         </button>
  //       )};
  //     </div>
  //   );
  // }

  return (
    <div className="App">
      <div id="main-container">
        <div className="card">
          <div className="card-header">Joka</div>
          <div className="card-body">
            <h5 className="card-title">{joke.setup}</h5>
            <p className="card-text">
              {btnText !== 'Get Punchline' ? joke.punchline : ''}
            </p>
          </div>
          {btnText === 'Get a Joke' || btnText === 'Get Another Joke' ? (
            <button
              onClick={getAJoke}
              type="button"
              className="btn btn-outline-info"
            >
              {btnText}
            </button>
          ) : (
            <button
              onClick={() => setButton('Get Another Joke')}
              type="button"
              className="btn btn-outline-info"
            >
              {btnText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// return (
//   <div className="App">
//     <div id="main-container">
//       // eslint-disable-next-line react/jsx-no-undef
//       <Card border="danger" style={{ width: '18rem' }}>
//         <Card.Header>Joka</Card.Header>
//         <Card.Body>
//           <Card.Title>{ joke.setup }</Card.Title>
//           <Card.Text>
//             { btnText !== 'Get Punchline' ? joke.punchline : '' }.
//           </Card.Text>
//         </Card.Body>
//       </Card>
//       <br />
//       { btnText === 'Get a Joke' || btnText === 'Get Another Joke' ? (
//         <button
//           onClick={getAJoke}
//           type="button"
//           className="btn btn-outline-dark"
//         >
//           {btnText}
//         </button>
//       ) : (
//         <button
//           onClick={() => setButton('Get Another Joke')}
//           type="button"
//           className="btn btn-outline-dark"
//         >
//           {btnText}
//         </button>
//       )};
//     </div>
//   </div>
// );
// }

export default Initialize;
