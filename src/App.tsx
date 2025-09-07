import  Headers from './components/application-layout/Headers'
import Card from './components/application-layout/Card'

import './App.css'

export default function App() {
  return (

    <div className="container">
      <Headers />
      <div className='cards-container'>
        <Card
          src={"bohemian-man-with-his-arms-crossed.jpg"}
          name="Yossi Cohen"
          description="A good friend of mine"
          dete={Date()}
        />
        <Card
          src={"young-bearded-man-with-striped-shirt.jpg"}
          name="Ruth Levi"
          description="Math teacher"
          dete={Date()}
        />
        <Card
          src={"OC3I520.jpg"}
          name="Dani Israeli"
          description="Hardworking student"
          dete={Date()}
        />
        <Card
          src={"OC3I520.jpg"}
          name="Dani Israeli"
          description="Hardworking student"
          dete={Date()}
        />
        <Card
          src={"OC3I520.jpg"}
          name="Dani Israeli"
          description="Hardworking student"
          dete={Date()}
        />
        <Card
          src={"OC3I520.jpg"}
          name="Dani Israeli"
          description="Hardworking student"
          dete={Date()}
        />
        <Card
          src={"OC3I520.jpg"}
          name="Dani Israeli"
          description="Hardworking student"
          dete={Date()}
        />
        <Card
          src={"OC3I520.jpg"}
          name="Dani Israeli"
          description="Hardworking student"
          dete={Date()}
        />
        <Card
          src={"OC3I520.jpg"}
          name="Dani Israeli"
          description="Hardworking student"
          dete={Date()}
        />
      </div>
    </div>
    
  )
}

