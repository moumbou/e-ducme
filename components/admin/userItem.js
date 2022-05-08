import React from "react";

function UserItem({ value }) {
  const { nom, prenom, email, role, validation } = value;
  return (
    <li>
      <span>{nom}</span>
      <span>{prenom}</span>
      <span>{email}</span>
      <span>{role}</span>
      <span>{validation ? 'valide !' : 'non valide'}</span>
    </li>
  );
}

export default UserItem;
