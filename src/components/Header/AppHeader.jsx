import './appheader.css';
import UserInfo from './UserInfo'
import Menubar from './Menubar';


function AppHeader() {
  

  return (
    <header className='mainstyle'>
      <Menubar />
      <UserInfo />
    </header>
  )
}

export default AppHeader;
