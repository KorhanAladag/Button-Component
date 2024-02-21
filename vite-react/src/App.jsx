import './App.css'
import {MdAddShoppingCart} from 'react-icons/md'
import Button from './Components/Button.jsx'
import Sidebar from './Components/Sidebar.jsx'

function App() {

  return (
    <div className='container'>
      <Sidebar/>

      <div className='content'>
        <div className='row'>
          <div className='row-item'>
            <Button
              variant = 'default'
              title='<Button />'
              text='Default'
              color='#3F3F3F'
            />
          </div>

          <div className='row-item'>
            <Button 
                hover={true}
                variant='default-hover'
                title='&:hover, &:focus'
                text='Default'
                color='#3F3F3F'
            />
          </div>  
        </div>  

        <div className='row'>
          <div className='row-item'>
            <Button 
              variant='outline'
              title='<Button variant="outline" />'
              text='Default'
            />
          </div>  

          <div className='row-item'>  
            <Button 
              hover={true}
              variant='outline-hover'
              title='&:hover, &:focus'
              text='Default'
            />
          </div>    
        </div>  

        <div className='row'>
          <div className='row-item'>
            <Button
              variant='text'
              title='<Button variant="text" />'
              text='Default'
            />
          </div>  

          <div className='row-item'>
            <Button 
              hover={true}
              variant='text-hover'
              title='&:hover, &:focus'
              text='Default'
            />
          </div>  
        </div>  

        <Button
          color='primary'
          title='<Button disableShadow />'
          text='Default'
          disableShadow={true}
        />

        <Button
          variant=''
          disabled = {true}
          title='<Button disabled />'
          text='Default'
        />

        <Button 
          variant='text'
          disabled = {true}
          title='<Button variant="text" disabled />'
          text='Default'
        />

        <div className='row'> 
          <div className='row-item'> 
            <Button 
              color='primary'
              startIcon={<MdAddShoppingCart className='start-icon' />}
              title='<Button startIcon="local_grocery_store" />'
              text='Default'
            />
          </div>  

          <div className='row-item'> 
            <Button 
              color='primary'
              endIcon={<MdAddShoppingCart className='end-icon' />}
              title='<Button endIcon="local_grocery_store" />'
              text='Default'
            />
          </div>
        </div>

        <div className='row'> 
          <div className='row-item'>
            <Button
              variant='default'
              size='button-sm'
              color='primary'
              title='<Button size="sm" />'
              text='Default'
            />
          </div>  

          <div className='row-item'>
            <Button
              variant='default'
              color='primary'
              size='button-md'
              title='<Button size="md" />'
              text='Default'
            />
          </div>  

          <div className='row-item'>
            <Button
              variant='default'
              color='primary'
              size='button-lg'
              title='<Button size="lg" />'
              text='Default'
            />
          </div>
        </div>

        <div className='row'>
          <div className='row-item'>
            <Button
              color='default'
              title='<Button color="default" />'
              text='Default'
            />
          </div>

          <div className='row-item'>
            <Button
              color='primary'
              title='<Button color="primary" />'
              text='Default'
            />
          </div>

          <div className='row-item'>  
            <Button
              color='secondary'
              title='<Button color="secondary" />'
              text='Secondary'
            />
          </div> 

          <div className='row-item'>
            <Button
              color='danger'
              title='<Button color="danger" />'
              text='Danger'
            />
          </div>  
        </div>  

        <div className='row'>
          <div className='row-item'>
            <Button
              hover={true}
              color='default-hover'
              title='&:hover, &:focus'
              text='Default'
            />
          </div>

          <div className='row-item x'>
            <Button
              hover={true}
              color='primary-hover'
              text='Default'
            />
          </div>  

          <div className='row-item x'>
            <Button
              hover={true}
              color='secondary-hover'
              text='Secondary'
            />
          </div>

          <div className='row-item x'>
            <Button
              hover={true}
              color='danger-hover'
              text='Danger'
            />
          </div>  
            
        </div>

      </div>

      <p className="footer">created by <strong>Korhan Aladağ</strong> - devChallenges.io</p>
      
    </div>
  )
}

export default App
