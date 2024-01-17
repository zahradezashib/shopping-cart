import {Row , Col} from 'react-bootstrap'
import ProductItem from './Productitem'
import { productList } from '../data/items'
function Shopp(){
    return (
        <Row xs={1} md={4} className='g-4'>
            {productList.map((item)=>(
                <Col align='center' key={item.id}>
                    <ProductItem product={item} />
                </Col>
            ))}
        </Row>
    )

}
export default Shopp