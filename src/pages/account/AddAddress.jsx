import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReturnLink from '../../components/utils/ReturnLink';

const AddAddress = () => {
  return (
    <section className='addresses'>
      <div className='d-flex align-items-center mb-4'>
        <ReturnLink link={'/account/addresses'} className="mb-0 me-3"/>
        <h4>Новый адрес</h4>
      </div>
      <form action="">
        <Row className='gx-3 gx-xl-4 gy-4'>
          <Col md={6} xxl={7}>
            <p className="dark-gray mb-1">Улица</p>
            <input type="text" placeholder='Улица'/>
          </Col>
          <Col md={6} xxl={5}>
            <Row className='gx-2 gx-sm-3 gx-xl-4'>
              <Col xs={4}>
                <p className="dark-gray mb-1">Дом</p>
                <input type="text" placeholder='Дом'/>
              </Col>
              <Col xs={4}>
                <p className="dark-gray mb-1">Корпус</p>
                <input type="text" placeholder='Корпус'/>
              </Col>
              <Col xs={4}>
                <p className="dark-gray mb-1">Подъезд</p>
                <input type="text" placeholder='Подъезд'/>
              </Col>
            </Row>
          </Col>
          <Col md={6} xxl={5}>
            <Row className='gx-2 gx-sm-3 gx-xl-4'>
              <Col xs={4}>
                <p className="dark-gray mb-1">Квартира</p>
                <input type="text" placeholder='Квартира'/>
              </Col>
              <Col xs={4}>
                <p className="dark-gray mb-1">Этаж</p>
                <input type="text" placeholder='Этаж'/>
              </Col>
              <Col xs={4}>
                <p className="dark-gray mb-1">Домофон</p>
                <input type="text" placeholder='Домофон'/>
              </Col>
            </Row>
          </Col>
          <Col md={6} xxl={7} className='d-flex flex-column justify-content-end'>
            <button type='submit' className='btn-1 w-xs-100 ms-xxl-5' >Сохранить адрес</button>
          </Col>
        </Row>
      </form>
    </section>
  );
};

export default AddAddress;