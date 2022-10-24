import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PathParam = () => {
  const { id: idFromUseParams } = useParams();
  const navigate = useNavigate();
  const [pathParam, setPathParam] = React.useState<string>();

  React.useEffect(() => {
    setPathParam(idFromUseParams);
    console.log('idFromUseParams', idFromUseParams);
    if (idFromUseParams === undefined) {
      navigate('/path-param/1', { replace: true });
    }
  }, [idFromUseParams, navigate]);

  return (
    <div>
      <h3>PathParam</h3>
      <p>pathParam: {pathParam}</p>
    </div>
  );
};

export default PathParam;
