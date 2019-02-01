import { initAspera, asperaWeb, asperaInstaller, config } from './react-aspera-connect';
import { withAspera }  from './with-aspera';

exports.initAspera = initAspera;
exports.withAspera = withAspera;
exports.aspera = {
    web: asperaWeb, 
    installer: asperaInstaller, 
    config: config
}