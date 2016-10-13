<h1 align="center">victory-composed</h1>

<h4 align="center">
  Ready-made composed Victory Components!
</h4>

***

## Getting Started

`victory-composed` is a set of composed, pre-styled Victory components that can be used to display rich, interactive charts. Our theming system not only supports style based theming, but behavioral/compositional theming as well.

1. Add `victory-composed` to your project

	```sh
	npm install victory-composed --save
	```

2. Add your first `victory-composed` component:

	```js
   import React, { Component } from 'react';
   import { render } from 'react-dom';
   import { VictoryLineChart } from 'victory-composed';
 	
   class MyLineChart extends Component {
     render() {
       return (
         <VictoryLineChart />
       );
     }
   }
	
   render(<MyLineChart />, document.getElementById('app'));
	```
3. Explore the API below and out the various possible components and configurations and their themes!

## API Documentation

### Components

#### \<VictoryAreaChart />

#### \<VictoryBarChart />

#### \<VictoryLineChart />

#### \<VictoryScatterChart />

#### \<VictoryPieChart />

### Themes

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