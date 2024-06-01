import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function ModalDemo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false}>
        Hello Tway Team,we are exicted to start our project today onwards
      </Modal>

      <Button onClick={open}>Open Modal</Button>
    </>
  );
}
export default ModalDemo;