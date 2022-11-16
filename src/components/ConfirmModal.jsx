import React from 'react';
import {Button, Modal} from 'semantic-ui-react';

const ConfirmModal = ({open, setOpen, restart}) => {
  return (
    <Modal
        dimmer="blurring"
        size="mini"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Modal.Header>Well done!!</Modal.Header>
        <Modal.Content>
          <p>Thanks for playing! Restart a new game?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => setOpen(false)}>
            No
          </Button>
          <Button positive onClick={() => restart()}>
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
  )
}

export default ConfirmModal