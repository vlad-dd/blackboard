import React from "react";
import {
  CardFormModal,
  CardsFilterModal,
  ConfirmationModal,
  EditCardFormModal,
  UserProfileModal
} from './components'

const Modals = () => {
  return (
    <>
      <CardFormModal />
      <CardsFilterModal />
      <EditCardFormModal />
      <UserProfileModal />
      <ConfirmationModal />
    </>
  )
}

export default Modals