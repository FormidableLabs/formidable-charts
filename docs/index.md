# Getting Started

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

# Themes

`formidable-charts` has a set of beautiful preset themes ready to go. We default to the `simple` theme by default, but if you want to try out the whole gang, here is how:

```js
import { LineChart, Themes } from "formidable-charts";

class MyChart extends Component {
  render() {
    return (
      <LineChart theme={Themes.dark} />
    )
  }
}
```

Right now we have 4 themes you can choose from:

`bright` - A bright, fun theme.

![bright](http://i.imgur.com/ZXKDgEe.png)

`simple` - A simple, yet elegant theme.

![simple](http://i.imgur.com/aAfwrWj.png)

`dark` - Uh oh who turned the lights out. A dark theme for your charts.

![dark](http://i.imgur.com/qJhlp1f.png)

`danceparty` - Use this one carefully. You might have too much fun.

![danceparty](http://i.imgur.com/ULpP5LV.png)

Keep your eyes peeled, there are more themes on the way!

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

# Contributing

Please review our [Code of Conduct](https://github.com/FormidableLabs/builder-victory-component/blob/master/CONTRIBUTING.md#contributor-covenant-code-of-conduct) before contributing.

For a detailed contribution guide, please see [CONTRIBUTING](https://github.com/FormidableLabs/builder-victory-component/blob/master/dev/CONTRIBUTING.md) in the project builder archetype.

# _IMPORTANT_

This project is in a pre-release state. We're hard at work fixing bugs and improving the API. Be prepared for breaking changes!
