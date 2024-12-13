import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { ChatContext } from '../../Context/ChatContext'

const Chats = ({handleToogleModal}) => {
  const {user} = useContext(AuthContext)
  const {availableNewChats,createChat} = useContext(ChatContext)

  const handleUserSelect = (user1, user2) => {
    createChat(user1, user2)
    handleToogleModal()
  }
  return (
    <div>
      {
        availableNewChats && availableNewChats.map((u, index) => (
          <div className='modal_chats' onClick={() => handleUserSelect(user.id, u._id)} key={index}>
            <div className='offline'>
              {u.name}
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Chats;