# Introduction to FormidableCharts

## Getting Started

`formidable-charts` is a set of composed, pre-styled components from our [Victory](https://www.formidable.com/open-source/victory) library that can be used to display rich, interactive charts. Our theming system not only supports style based theming, but behavioral and compositional theming as well.

1. Add `formidable-charts` to your project

	```sh
	npm install formidable-charts --save
	```

  For React Native, you'll need `-native` and `react-native-svg`:

  ```sh
  npm install -native formidable-charts react-native-svg --save
  react-native link react-native-svg
  ```

2. Add your first `formidable-charts` component:

	```js
   import React, { Component } from 'react';
   import { render } from 'react-dom';
   import { LineChart } from 'formidable-charts';

   class MyLineChart extends Component {
     render() {
       return (
         <LineChart />
       );
     }
   }

   render(<MyLineChart />, document.getElementById('app'));
	```
3. Explore the API docs and try out the various possible components and configurations and their themes!

## Contributing

Please review our [Code of Conduct](https://github.com/FormidableLabs/builder-victory-component/blob/master/CONTRIBUTING.md#contributor-covenant-code-of-conduct) before contributing.

For a detailed contribution guide, please see [the contribution guide](https://github.com/FormidableLabs/builder-victory-component/blob/master/dev/CONTRIBUTING.md) in the project builder archetype. To read more on the development environment, see [the development guide](https://github.com/FormidableLabs/builder-victory-component/blob/master/dev/DEVELOPMENT.md).
