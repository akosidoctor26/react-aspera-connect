export { initAspera, asperaWeb, asperaInstaller, config } from './react-aspera-connect';
export { withAspera }  from './with-aspera';

module.exports = {
    initAspera: initAspera,
    withAspera: withAspera,
    aspera: {
        web: asperaWeb, 
        installer: asperaInstaller, 
        config: config
    }
}