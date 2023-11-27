import './App.css';
import RenderTickets from './rendertickets.jsx';
import gearIcon from "./assets/iconsetting.jpg"
import  { useState, useEffect } from 'react';

const App = ()=>{
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState('status');
  const [sorting, setSorting] = useState('priority');
  const [showDiv, setShowDiv] = useState(false);
  var user=0; //for using to remember the grouping 
  const handleButtonClick = () => {
    setShowDiv(!showDiv);};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const jsonData = await response.json();
        setTickets(jsonData.tickets);
        setUsers(jsonData.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const groupAndSortTickets = () => {
    // Grouping
    let groupedTickets = {};
    switch (grouping) {
      case 'status':{
        groupedTickets = groupByStatus(tickets);
        user=0;
      }
        break;
      case 'user':{
        groupedTickets = groupByUser(tickets);
        user=1
      }
        break;
      case 'priority':{
        groupedTickets = groupByPriority(tickets);
        user=2
      }
        break;
      default:
        break;
    }
    
    // Sorting
    Object.keys(groupedTickets).forEach((group) => {
      groupedTickets[group].sort((a, b) => {
        if (sorting === 'priority') {
          return b.priority - a.priority;
        } else if (sorting === 'title') {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
    });

    return groupedTickets;
  };

  const groupByStatus = (tickets) => {
    const grouped = {};
    tickets.forEach((ticket) => {
      const status = ticket.status;
      if (!grouped[status]) {
        grouped[status] = [];
      }
      grouped[status].push(ticket);
    });
    return grouped;
  };

  const groupByUser = (tickets) => {
    const grouped = {};
    tickets.forEach((ticket) => {
      const user = users.find((u) => u.id === ticket.userId);
      if (user) {
        const userName = user.name;
        if (!grouped[userName]) {
          grouped[userName] = [];
        }
        grouped[userName].push(ticket);
      }
    });
    return grouped;
  };

  const groupByPriority = (tickets) => {
    const grouped = {};
    tickets.forEach((ticket) => {
      const priority = ticket.priority;
      if (!grouped[priority]) {
        grouped[priority] = [];
      }
      grouped[priority].push(ticket);
    });
    return grouped;
  };
  
  const groupedAndSortedTickets = groupAndSortTickets( );
  return (
    <div className='body'>
      <header className="header">
            <button onClick ={handleButtonClick}>
              <img src={gearIcon}/>
              Display 
              <span className ="arrow"></span>
            </button>
            {showDiv && (
            <div className="selective" >
              <div className ="options">
                <label>Grouping</label>
                <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
              <div className ="options">
                <label>Sorting</label>
                <select value={sorting} onChange={(e) => setSorting(e.target.value)}>
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>)}
      </header>
        {/* To display tickets */}
      <RenderTickets groupedAndSortedTickets ={groupedAndSortedTickets}
      user = {user}/>
    </div>
  );
};
export default App
// code by sahil soni, this code need a little more time in css