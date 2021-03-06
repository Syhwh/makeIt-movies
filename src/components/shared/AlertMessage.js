import React, { useContext } from 'react'
import { Toast } from 'react-bootstrap'
import { MoviesContext } from '../../context/MoviesContext';

export const AlertMessage = () => {

  const { showAlert, setShowAlert, notificationData } = useContext(MoviesContext)

  const { action, element } = notificationData
  const actionTitle = action.charAt(0).toUpperCase() + action.slice(1)

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100px',
        zIndex: 1
      }}
    >
      <Toast
        onClose={() => setShowAlert(false)}
        show={showAlert} delay={3000}
        autohide
        style={{
          position: 'fixed',
          top: '80%',
          right: 10,
        }}>
        <Toast.Header style={{ backgroundColor: action === 'saved' ? '#62c462' : '#ee5f5b', color: '#fff' }} >
          <strong className="mr-auto">{actionTitle}</strong>
        </Toast.Header>
        <Toast.Body style={{ backgroundColor: '#fff' }} > Your {element} has been {action}</Toast.Body>
      </Toast>
    </div>
  );



}
