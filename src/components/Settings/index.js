import React from 'react';

import Field from 'src/components/Field';
import './style.scss';

const Setting = () => (
  <div className="settings">
    <button type="button">+</button>
    <form>
      <Field type="email" placeholder="Email" />
      <Field type="mot de passe" placeholder="Mot de passe" />
      <button type="submit">Envoyer</button>
    </form>
  </div>
);

export default Setting;
