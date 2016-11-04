<h1 align="center">formidable-charts</h1>

<h4 align="center">
  Ready-made composed Victory Components!
</h4>

***

![demo](http://imgur.com/nQg3JOx.gif)

- [Getting Started](docs/index.md)
- [API Documentation](docs/api.md)
- [Themes](docs/themes.md)
- [Standalone](docs/standalone.md)
- [Development](#development)
- [Contributing](#contributing)
- [_IMPORTANT_](#important)

## Getting Started

`formidable-charts` is a set of composed, pre-styled Victory components that can be used to display rich, interactive charts. Our theming system not only supports style based theming, but behavioral/compositional theming as well.

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
3. Explore the API and try out the various possible components and configurations and their themes!

## Development

```sh
# Run the demo app server
$ npm start

# Open the demo app
$ open http://localhost:3000

# Run tests
$ npm test
```

For more on the development environment, see [DEVELOPMENT](https://github.com/FormidableLabs/builder-victory-component/blob/master/dev/DEVELOPMENT.md) in the project builder archetype.

## Contributing

Please review our [Code of Conduct](https://github.com/FormidableLabs/builder-victory-component/blob/master/CONTRIBUTING.md#contributor-covenant-code-of-conduct) before contributing.

For a detailed contribution guide, please see [CONTRIBUTING](https://github.com/FormidableLabs/builder-victory-component/blob/master/dev/CONTRIBUTING.md) in the project builder archetype.

## _IMPORTANT_

This project is in a pre-release state. We're hard at work fixing bugs and improving the API. Be prepared for breaking changes!
