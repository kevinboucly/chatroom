import React from 'react';
import { Plus } from 'react-feather';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';
import './style.scss';

const Settings = ({ open, toggleOpen }) => (
  <div className="settings">
    <button onClick={toggleOpen} className="settings-toggler" type="button"><Plus color="#0055FF " size="100%" /></button>
    {open
    && (
    <form className="settings-form">
      <Field type="email" placeholder="Email" />
      <Field type="mot de passe" placeholder="Mot de passe" />
      <button className="settings-submit" type="submit">Envoyer</button>
    </form>
    )}
  </div>
);

Settings.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};
export default Settings;
