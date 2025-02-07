import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const ListTask = ({task}) =>{
    return ( 

    <div className="list-container">
      <ol>
        {task.map((taskItem, index) => <li key={index}>
          <div className="list-info">
            <input type="checkbox" />
            <span>{taskItem}</span>
          </div>
  
          <div className="list-info">
            <button>
              <FontAwesomeIcon icon={faClock} />
              <div className="time-container">
                <h4>12.00</h4>
                <span></span>
                <h4>00.00</h4>
              </div>
            </button>
  
            <button>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </div>
  
        </li>)}
      </ol>
    </div>
    );
  }

export default ListTask;
  
// usage in HomePage.jsx