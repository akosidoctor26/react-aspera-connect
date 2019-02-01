import { initAspera, asperaWeb, asperaInstaller, config } from './react-aspera-connect';
import { withAspera }  from './with-aspera';



export const aspera = {
        initAspera: initAspera,
        withAspera: withAspera,
        aspera: {
            web: asperaWeb, 
            installer: asperaInstaller, 
            config: config
        }
    }