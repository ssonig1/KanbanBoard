import './App.css'
import avatar from './assets/avatar.png'
import pr from './assets/pr.png'
import work from './assets/work.png'
let priority = ''
function get(group){
  switch(group){
    case '0':
      priority = 'No Priority'
      break;
    case '1':
      priority = 'Low'
      break;
    case '2':
      priority = 'Medium'
      break;
    case '3':
      priority = 'High'
      break;
    case '4':
      priority = 'Urgent'
      break;
  }
  
}
const RenderTickets = ({groupedAndSortedTickets, user }) => {
    return (
      <div className="container">
        {Object.keys(groupedAndSortedTickets).map((group) => (
          <div key={group} className='card'>
            <div className="cardNav">
            {console.log(groupedAndSortedTickets)}
              <div className="left"> 
              {user==0? (<span> <img src = {work} alt="userimage"/> {group} {groupedAndSortedTickets[group].length}</span>): (user ==1?(<span><img src = {avatar} alt="userimage"/>{group} </span>):(<span>{get(group)} <img src = {pr} alt="userimage"/> {priority}</span>)) }
              </div>
              <div className="right">
                    <span className="plus">+ </span>
                    <span className="dotted"> ...</span>
              </div>
            </div>
              <div className="cardContent">
                  {groupedAndSortedTickets[group].map((ticket) => (
                    <li key={ticket.id}>
                    <div className = "data">
                        <div className='id'>
                          {ticket.id}
                          <img src = {avatar} alt="userimage"/>
                        </div>
                        <div>{ticket.title}</div>
                        <div className = "cardtag">
                          <span className='tag'>...</span>
                          <span className='tag'>
                            <span>• </span>
                            Feature Request
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
              </div>
            </div>
        ))}
      </div>
    );
  };
  
export default RenderTickets