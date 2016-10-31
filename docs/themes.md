# Themes

`formidable-charts` has a set of beautiful preset themes ready to go. We default to the `simple` theme, but if you want to try out the whole set, here's how:

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

Right now we have four themes that you can choose from:

`bright` - A bright, fun theme. The default for FormidableChart components.

![bright](http://i.imgur.com/ZXKDgEe.png)

`simple` - A simple, yet elegant theme.

![simple](http://i.imgur.com/aAfwrWj.png)

`dark` - A dark theme for your charts.

![dark](http://i.imgur.com/qJhlp1f.png)

`danceparty` - Use this one carefully. You might have too much fun.

![danceparty](http://i.imgur.com/ULpP5LV.png)

Keep your eyes peeled, there are more themes on the way!
