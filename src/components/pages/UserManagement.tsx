/* eslint-disable react-hooks/exhaustive-deps */
import { Wrap, WrapItem, Center, Spinner, useDisclosure } from '@chakra-ui/react';
import { memo, FC, useEffect, useCallback } from 'react';

import { UserCard } from '../organisms/user/UserCard';
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUser } from "../../hooks/UseSelectUser";
import { UserDetailModal } from '../organisms/user/UserDetailModal';

export const UserManagement: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, loading, users } = useAllUsers();
  const { onSelectUser, selectedUser} = useSelectUser();

  // マウント時に一度だけgetUsers関数を呼び出している
  useEffect(() => getUsers(), []);

  const onClickUser = useCallback((id: number) => {
    onSelectUser({id, users, onOpen});
  }, [users, onSelectUser, onOpen]);
  return (
    <>
      {loading ? (
          <Center h="100vh">
            <Spinner color="teal.200" />
          </Center>
        ) : (
      <Wrap p={{ base : 4, md : 10 }}>
        {users.map(user => (
              <WrapItem key={user.id} mx="auto">
                <UserCard
                  id={user.id}
                  imageUrl="https://source.unsplash.com/random"
                  userName={user.username}
                  fullName={user.name}
                  onClick={onClickUser}
                />
              </WrapItem>
            ))}
      </Wrap>
      )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} />
    </>
  );
});