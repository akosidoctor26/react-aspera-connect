
export let asperaWeb, asperaInstaller, config;

export const initAspera = (params) => {
  const { AW4 } = window;

  config = {
    ...params,
    minVersion: params.minVersion || '3.8.0'
  };
  
  asperaWeb = new AW4.Connect({ sdkLocation: config.sdkLocation, minVersion: config.minVersion });
  asperaInstaller = new AW4.ConnectInstaller({ sdkLocation: config.sdkLocation });

  const statusEventListener = function (eventType, data) {
    if (eventType === AW4.Connect.EVENT.STATUS && data === AW4.Connect.STATUS.INITIALIZING) {
      console.log('Aspera Connect Client is initializing');
      asperaInstaller.showLaunching();
    } else if (eventType === AW4.Connect.EVENT.STATUS && data === AW4.Connect.STATUS.FAILED) {
      console.log('Aspera Connect Client failed to load');
      asperaInstaller.showDownload();
    } else if (eventType === AW4.Connect.EVENT.STATUS && data === AW4.Connect.STATUS.OUTDATED) {
      console.log('Aspera Connect Client is Outdated');
      asperaInstaller.showUpdate();
    } else if (eventType === AW4.Connect.EVENT.STATUS && data === AW4.Connect.STATUS.RUNNING) {
      console.log('Aspera Connect Client is now Running');
      asperaInstaller.connected();
    }
  };

  asperaWeb.addEventListener(AW4.Connect.EVENT.STATUS, statusEventListener);
  asperaWeb.initSession();
}
