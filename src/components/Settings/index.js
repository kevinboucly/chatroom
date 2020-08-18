import React from 'react';
import { Plus } from 'react-feather';

import Field from 'src/components/Field';
import './style.scss';

const Setting = () => (
  <div className="settings">
    <button className="settings-toggler" type="button"><Plus color="#0055FF " size="100%" /></button>
    {true
    && (
    <form className="settings-form">
      <Field type="email" placeholder="Email" />
      <Field type="mot de passe" placeholder="Mot de passe" />
      <button className="settings-submit" type="submit">Envoyer</button>
    </form>
    )}
  </div>
);

export default Setting;
