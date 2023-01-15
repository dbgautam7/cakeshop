import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import bread from '../../images/bread.jpg'
import bdycake from '../../images/bdycake.jpg'
import buns from '../../images/buns.jpg'
import cookies from '../../images/cookies.jpg'
import dessert from '../../images/dessert.jpg'
import pastries from '../../images/pastries.jpg'
import other from '../../images/bakery3.jpg'



const Home = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', padding: '10px' }}>
      <Card style={{ width: '45%', marginTop: '15px' }}>
        <Card.Img variant="top" src={bread} alt='bread' style={{ height: '70%' }} />
        <Card.Body>
          <Card.Title>Bread</Card.Title>
          <Card.Text>
            Price: Rs 55
            <br />
            Freshly baked bread made with high-quality ingredients.
          </Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '45%', marginTop: '15px' }}>
        <Card.Img variant="top" src={buns} alt='buns' style={{ height: '70%' }} />
        <Card.Body>
          <Card.Title>Buns</Card.Title>
          <Card.Text>

          </Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '45%', marginTop: '15px' }}>
        <Card.Img variant="top" src={pastries} alt='pastries' style={{ height: '70%' }} />
        <Card.Body>
          <Card.Title>Pastries</Card.Title>
          <Card.Text>

          </Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '45%', marginTop: '15px' }}>
        <Card.Img variant="top" src={bdycake} alt='bdycake' style={{ height: '70%' }} />
        <Card.Body>
          <Card.Title>Cakes</Card.Title>
          <Card.Text>

          </Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '45%', marginTop: '15px' }}>
        <Card.Img variant="top" src={cookies} alt='cookies' style={{ height: '70%' }} />
        <Card.Body>
          <Card.Title>Cookies</Card.Title>
          <Card.Text>

          </Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '45%', marginTop: '15px' }}>
        <Card.Img variant="top" src={dessert} alt='dessert' style={{ height: '70%' }} />
        <Card.Body>
          <Card.Title>Desserts</Card.Title>
          <Card.Text>

          </Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '45%', marginTop: '15px' }}>
        <Card.Img variant="top" src={other} alt='other' style={{ height: '70%' }} />
        <Card.Body>
          <Card.Title>Others</Card.Title>
          <Card.Text>

          </Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Home