import React from 'react';

function Cartas() {
  return (
    <div className="cartas">
        <div className="card1">
    <div className="card" style={{ width: '18rem', margin: '1rem auto' }}>
      <img src="a1.jpg" className="card-img-top" alt="Imagen del curso" />
      <div className="card-body">
        <h5 className="card-title">Kullawada</h5>
        <p className="card-text">
La Kullawada (también escrito como Kullawua, Cullaguada o Kullawa) es una danza folklórica boliviana y peruana, con orígenes que se remontan a épocas precoloniales. Se caracteriza por su alegoría a los hilanderos y tejedores, y se interpreta en diversas festividades, como el Carnaval de Oruro. 
        </p>
        <a href="https://pentagramadelrecuerdo.com/2023/06/11/kullawada/" className="btn btn-primary">Ver más</a>
      </div>
    </div>
    </div>
    <div className="card2">
    <div className="card" style={{ width: '18rem', margin: '1rem auto' }}>
      <img src="a3.jpg" className="card-img-top" alt="Imagen del curso" />
      <div className="card-body">
        <h5 className="card-title">Caporales</h5>
        <p className="card-text">
         Los Caporales es una danza folklórica boliviana, surgida a fines de la década de 1960 en La Paz, Bolivia. Se caracteriza por su ritmo enérgico y acrobático, con movimientos sensuales y saltos, tanto por parte de los hombres como de las mujeres, aunque con énfasis diferentes. La danza es una representación del personaje del caporal, un capataz mulato en la época colonial. 
        </p>
        <a href="https://sayacaporal.com/caporales/historia-de-los-caporales/" className="btn btn-primary">Ver más</a>
      </div>
    </div>
    </div>
    <div className="card3">
    <div className="card" style={{ width: '18rem', margin: '1rem auto' }}>
      <img src="a4.jpg" className="card-img-top" alt="Imagen del curso" />
      <div className="card-body">
        <h5 className="card-title">Saya</h5>
        <p className="card-text">
        La saya es una manifestación cultural expresada en música, danza, poesía y ritmo propio del pueblo afroamericano asentado en la meseta del Collao, uno de los lugares donde se establecieron los esclavos africanos en el Virreinato del Perú perteneciente al imperio español. Nació como un mestizaje del ritmo musical andino, la música criolla traída desde Europa y del ritmo propio de las etnias africanas.
        </p>
        <a href="https://sayacaporal.com/caporales/historia-de-la-saya/" className="btn btn-primary">Ver más</a>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Cartas;

