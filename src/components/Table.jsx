import {FaCheck} from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'

const Table = () => {
  return (
    <div>
    <table className=''>
    <thead>
        <tr>
            <th></th>
            <th>Basic</th>
            <th>Standard</th>
            <th>Premium</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Monthly price after free month ends on 6/19/19</td>
            <td>$8.99</td>
            <td>$12.99</td>
            <td>$15.99</td>
        </tr>
        <tr>
            <td>HD Available</td>
            <FaTimes />
            <FaCheck />
            <FaCheck />
        </tr>
        <tr>
            <td>Ultra HD Available</td>
            <FaTimes />
            <FaTimes />
            <FaCheck />
        </tr>
        <tr>
            <td>Screens you can watch on at the same time</td>
            <td>1</td>
            <td>2</td>
            <td>4</td>
        </tr>
        <tr>
            <td>Watch on your laptop, TV, phone and tablet</td>
            <FaCheck />
            <FaCheck />
            <FaCheck />
        </tr>
        <tr>
            <td>Unlimited movies and TV shows</td>
            <FaCheck />
            <FaCheck />
            <FaCheck />
        </tr>
        <tr>
            <td>Cancel anytime</td>
            <FaCheck />
            <FaCheck />
            <FaCheck />
        </tr>
        <tr>
            <td>First month free</td>
            <FaCheck />
            <FaCheck />
            <FaCheck />
        </tr>
    </tbody>
</table>
    </div>
  )
}

export default Table