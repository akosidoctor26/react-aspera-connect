# react-aspera-connect
Library for using Aspera Connect Client with React Applications

## Prerequisites

- ReactJS

## Installing

Add this to your main html file
```
<script src="//d3gcli72yxqn2z.cloudfront.net/connect/v4/connectinstaller-4.min.js"></script>
<script src="//d3gcli72yxqn2z.cloudfront.net/connect/v4/asperaweb-4.min.js"></script>
```

Then install the package
```
    npm i react-aspera-connect
```

## Usage

In the main file (e.g. index.js) of your react application. Add the following code.

```
import { initAspera } from 'react-aspera-connect'

initAspera({
   sdkLocation: '//d3gcli72yxqn2z.cloudfront.net/connect/v4',
  // other config
  //minVersion: '3.6.0' or '3.8.0',
  //pollingTime,
  //dragDropEnabled,
  //containerId,
  //id,
  //connectLaunchWaitTimeoutMs
})
```

aspera instance is available via
```
import { asperaWeb, asperaInstaller, config } from 'react-aspera-connect';
```


More details from https://developer.asperasoft.com
